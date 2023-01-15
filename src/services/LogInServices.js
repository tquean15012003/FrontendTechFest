import { baseService } from "./BaseService";

export class LogInService extends baseService {
    logInService = (logInInfo) => {
        return this.post('users/login', logInInfo);
    }
    signUpService = (signUpInfo) => {
        return this.post('users/signup', signUpInfo);
    }
}

export const logInService = new LogInService()