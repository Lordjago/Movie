define('http-client', [], function HttpClient () {
    return {
        get(url) {
            return  fetch(url).then(response => response.json())
        }
    }
})