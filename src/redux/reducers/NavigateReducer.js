import { SET_NAVIGATE } from "../consts/NavigateConsts";

const stateDefault = {
    navigate: "",
};

export const NavigateReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_NAVIGATE: {
            return { ...state, navigate: action.navigate };
        }
        default: return { ...state };
    };
};