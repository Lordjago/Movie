//Pure function in a Funtional Programming

class Student {
    constructor (user) {
        this.user = user
    }

    createUsername (user) {
        return `${user.firstName} . ${user.lastName} . ${user.id}`
    }

    createProfileUrl (domain, username) {
        return `${domain}${username}`
    }
}

let user = {
    id: 4636,
    firstName: "John",
    lastName: "David"
}

let student = new Student (user)
let profileUrl = student.createProfileUrl ('http://mynetwrok.com', student.createUsername(user))
console.log(profileUrl)

