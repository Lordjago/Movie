define('post-manager', ['http-client'], function PostManager (httpClient) {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return {
        printPost(){
            httpClient.get(url).then(response => {
                console.log(response)
            })
        }
    }
})