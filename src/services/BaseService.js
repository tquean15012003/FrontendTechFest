import Axios from "axios"
import { apiKey, DOMAIN } from '../utils/settings/config'
import { TOKEN } from "../utils/settings/config"

export class baseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                "Authorization": localStorage.getItem(TOKEN),
                "Api-Key": apiKey
            }
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                "Authorization": localStorage.getItem(TOKEN),
                "Api-Key": apiKey
            }
        })
    }

    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                "Authorization": localStorage.getItem(TOKEN),
                "Api-Key": apiKey
            }
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {
                "Authorization": localStorage.getItem(TOKEN),
                "Api-Key": apiKey
            }
        })
    }
}