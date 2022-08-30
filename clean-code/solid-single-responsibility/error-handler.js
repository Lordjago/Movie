// import * as toastr from 'toastr'

export class ErrorHnadler {
    static handleError(res) {
        if(res.status == 401) {
            console.log('You are not authorized')
        }
        else if(res.status == 404) {
            console.log('Content not found')
        }
        else if(res.status == 500) {
            console.log('Internal Server Error')
        }
        else{
            console.log('Unknown Error')
        }
    }
}