import { userService } from "../../services/UserService"
import { DID } from "../../utils/settings/config"
import { ADD_USER_EDUCATION, DELETE_EDUCATION, GET_ADMIN_LIST, GET_COMPANY_LIST, GET_REQUEST_RECEIVED, GET_REQUEST_SENT, SET_USER_INFO } from "../consts/UserConsts"

export const setUserInfoAction = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
})

export const updateUserInfoAction = (values) => {
    return async (dispatch, getState) => {
        try {
            const { userInfo, user } = getState().UserReducer
            if (typeof userInfo.name === "undefined") {
                const { data } = await userService.createUserInfoService(values)
                await userService.createUserUserInfoService({
                    userID: user.id,
                    userInfoID: data.userInfo.id
                })
                await dispatch(setUserInfoAction(data.userInfo))
            }
            else {
                const { data } = await userService.updateUserInfoService(userInfo.id, values)
                await dispatch(setUserInfoAction(data.userInfo))
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getUserInfoAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.getUserUserInfoByUserIDService(id);
            const { userInfoID } = response.data.userUserInfo
            const { data } = await userService.getUserInfoService(userInfoID)
            dispatch(setUserInfoAction(data.userInfo))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const addEducationAction = (education) => ({
    type: ADD_USER_EDUCATION,
    education
})

export const addUserEducationAction = (values) => {
    return async (dispatch, getState) => {
        try {
            const { user } = getState().UserReducer
            const { data } = await userService.createUserEducationService(values)
            await userService.createEducationUserService({
                userID: user.id,
                educationID: data.education.id
            })
            dispatch(addEducationAction(data.education))

        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getEducationAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.getEducationUserDetailByUserIDService(id);
            response.data.educationUserList.forEach(async (educationUser) => {
                const { data } = await userService.getEducationService(educationUser.educationID)
                dispatch(addEducationAction(data.education))
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const deleteEducationAction = (educationID) => {
    return async (dispatch, getState) => {
        try {
            await userService.deleteEducationService(educationID);
            const { data } = await userService.getEducationUserByEducationIDService(educationID);
            await userService.deleteEducationUserService(data.educationUser.id)
            dispatch({
                type: DELETE_EDUCATION,
                educationID
            })
            
            alert("Delete successfully!")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getCompanyListAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getCompanyListService()
            dispatch({
                type: GET_COMPANY_LIST,
                companyList: data.companyList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getAdminListAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getAdminListService()
            dispatch({
                type: GET_ADMIN_LIST,
                adminList: data.adminList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const createRequestAction = (requestType, values) => {
    return async (dispatch, getState) => {
        const { user, userInfo, userEducation } = await getState().UserReducer
        let identity
        if (requestType === "infomation") {
            identity = userInfo.id
        }
        if (requestType === "education"){
            identity = userEducation[Number(userEducation.length) - 1].id
        }
        const model = {
            requestType,
            holderID: user.id,
            issuerID: values.issuer,
            data: JSON.stringify(values),
            holderDID: localStorage.getItem(DID),
            identity
        }
        try {
            if (requestType === "infomation") {
                const { data } = await userService.getRequestListByHolderID(user.id)
                data.requestList.forEach(async (request) => {
                    if (request.requestType === "infomation" && request.isdone === "false") {
                        await userService.deleteRequestService(request.id)
                    }
                })
            }
            await userService.createRequestService(model)
            await dispatch(getRequestSentAction(user.id))

            if (requestType === "infomation") {
                await dispatch(updateUserInfoAction({ ...values, claimID: "" }))
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getRequestReceivedAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getRequestListByIssuerID(id)
            dispatch({
                type: GET_REQUEST_RECEIVED,
                requestReceivedList: data.requestList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const getRequestSentAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.getRequestListByHolderID(id)
            dispatch({
                type: GET_REQUEST_SENT,
                requestSentList: data.requestList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const rejectRequestAction = (request) => {
    return async (dispatch, getState) => {
        try {
            await userService.rejectRequestService(request.id)
            await dispatch(getRequestReceivedAction(request.issuerID))
            alert("Reject successfully!")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const approvedRequestAction = (request) => {
    return async (dispatch, getState) => {
        const { user } = getState().UserReducer
        const newRequest = {...request, issuerName: user.name}
        try {
            const response = await userService.buildUnsignedVCService(newRequest)
            const response_2 = await userService.signVCService({"unsignedCredential": response.data.unsignedCredential})
            const response_3 = await userService.storeVCService({"data": [response_2.data.signedCredential]})
            const response_4 = await userService.shareVCService({id: response_3.data.credentialIds[0]})
            const data = {
                id: request.id,
                claimID: response_3.data.credentialIds[0],
                sharingUrl: response_4.data.sharingUrl
            }
            const response_5 = await userService.approveRequestService(data)
            if (request.requestType === "information"){
                await userService.updateClaimIDUserInfoService(response_5.data.request.identity,response_5.data.request)
            }
            if (request.requestType === "education"){
                await userService.updateClaimIDEducationService(response_5.data.request.identity,response_5.data.request)
            }
            await dispatch(getRequestReceivedAction(request.issuerID))
            alert("Approve successfully!")
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}