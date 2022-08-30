import {POST_ENDPOINT} from './config'

export class PostManager {
    constructor(httpClient) {
        this.httpClient = httpClient
    }
    printPost(){
            this.httpClient.get(POST_ENDPOINT).then(response => {
                console.log(response)
            })
        }
}