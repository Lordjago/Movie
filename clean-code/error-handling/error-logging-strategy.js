export function ErrorLoggingStrategy(error) {
    console.log(`An error occured at file ${error.source} line ${error.lineNumber} with message ${error.message}`)
}