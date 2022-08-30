const logginEndpoint = 'https://mytestapi.com/v1/logging'

export function ServerLoggingStrategy (error) {
    return fetch(logginEndpoint, {
        method: 'POST',
        body: error
    })
}