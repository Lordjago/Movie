import { ErrorHnadler } from "./error-handler"
export class HttpClient {
    get(url) {
        return fetch(url,
            {
                headers: {
                    'Accept' : 'application/json'
                }
            }).then( res => {
                if(res.ok) {
                    return res.json()
                }
                else{
                    ErrorHnadler.handleError(res)
                }
            })
    }
}