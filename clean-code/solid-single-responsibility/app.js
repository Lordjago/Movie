import {HttpClient} from './http-client'

let http = new HttpClient()
// 'https://jsonplaceholder.typicode.com/posts'
http.get('https://httpstat.us/500').then(data => console.log(data))