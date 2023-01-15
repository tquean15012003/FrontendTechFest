import { logInService } from "../../services/LogInServices"
import { DID, TOKEN, USER } from "../../utils/settings/config"
import { SET_USER } from "../consts/UserConsts"

export const logInInAction = (logInInfo) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await logInService.logInService(logInInfo)
            localStorage.removeItem(DID)
            localStorage.removeItem(TOKEN)
            localStorage.removeItem(USER)
            localStorage.setItem(DID, data.did)
            localStorage.setItem(TOKEN, data.accessToken)
            localStorage.setItem(USER, JSON.stringify(data.user))
            dispatch({
                type: SET_USER,
                user: data.user,
                did: data.did,
                accessToken: data.accessToken
            })
            const { navigate } = getState().NavigateReducer;
            navigate(`${data.user.type}home`, {replace: false})
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const signUpAction = (signUpInfo) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await logInService.signUpService(signUpInfo)
            alert(data.message)
            const { navigate } = getState().NavigateReducer;
            navigate("/", {replace: false})
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const logOutAction = () => {
    return (dispatch, getState) => {
        localStorage.removeItem(DID)
        localStorage.removeItem(TOKEN)
        localStorage.removeItem(USER)
        const { navigate } = getState().NavigateReducer
        navigate(`/`, { replace: false })
        window.location.reload();
    }
}