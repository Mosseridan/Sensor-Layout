// User Class
export class User {
    _id: string;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;

    constructor(
        username: string,
        password: string,
        fname: string,
        lname: string,
        email: string,
    ) {
        this.username = username;
        this.password = password;
        this.fname = formatName(fname);
        this.lname = formatName(lname);
        this.email = email;
    }
}

export function formatName(name) {
    return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
}

export function newUser() {
    return new User('', '', '', '', '');
}


// Credentials Class
export class Credentials {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
