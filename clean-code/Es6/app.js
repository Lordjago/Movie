import {HttpClient} from './http-client.js'

import {PostManager} from './post-manager'

let postManager = new PostManager(new HttpClient)

postManager.printPost()