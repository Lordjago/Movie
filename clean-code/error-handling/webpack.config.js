module.exports = {
    entry: 'app.js',
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modules: [__dirname]
    }
}