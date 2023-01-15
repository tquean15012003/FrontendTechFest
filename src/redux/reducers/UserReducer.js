import { DID, TOKEN, USER } from "../../utils/settings/config";
import { ADD_USER_EDUCATION, DELETE_EDUCATION, GET_ADMIN_LIST, GET_COMPANY_LIST, GET_REQUEST_RECEIVED, GET_REQUEST_SENT, SET_USER, SET_USER_INFO } from "../consts/UserConsts";

const stateDefault = {
    user: JSON.parse(localStorage.getItem(USER)),
    userInfo: {
    },
    userSkill: [],
    userEducation: [],
    userExperience: [],
    did: localStorage.getItem(DID),
    accessToken: localStorage.getItem(TOKEN),
    companyList: [],
    adminList: [],
    requestReceivedList: [],
    requestSentList: []
};

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_USER: {
            state.user = action.user
            state.did = action.did
            state.accessToken = action.accessToken
            return { ...state }
        }
        case SET_USER_INFO: {
            state.userInfo = action.userInfo
            return { ...state }
        }
        case ADD_USER_EDUCATION: {
            const index = state.userEducation.findIndex(education => education.id === action.education.id)
            if (index === -1) {
                state.userEducation.push(action.education)
            }
            return { ...state }
        }
        case DELETE_EDUCATION: {
            const newUserEducation = state.userEducation.filter(education => education.id !== action.educationID)
            state.userEducation = newUserEducation;
            return {...state}
        }
        case GET_COMPANY_LIST: {
            state.companyList = action.companyList
            return {...state}
        }
        case GET_ADMIN_LIST: {
            state.adminList = action.adminList
            return {...state}
        }
        case GET_REQUEST_RECEIVED: {
            state.requestReceivedList = action.requestReceivedList;
            return {...state}
        }
        case GET_REQUEST_SENT: {
            state.requestSentList = action.requestSentList;
            return {...state}
        }
        default: return { ...state };
    };
};