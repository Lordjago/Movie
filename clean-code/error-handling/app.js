import {ErrorHandler} from './error-handler'
import { ErrorLoggingStrategy } from './error-logging-strategy'
import { MessageHandlingStrategys } from './message-handler'


const errorHandler = new ErrorHandler(MessageHandlingStrategys, ErrorLoggingStrategy)

onerror = function(message, source, lineNumber, colNumber, errorObject) {
    errorHandler.handle('Unknown Error', 'Oops Something went wrong', 5 , {
        message,
        source,
        lineNumber,
        colNumber,
        errorObject
    })
}

let myFunc = {}

myFunc()