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




// Sensor Class
export class Sensor {
    _id: string;
    displayName: string;
    type: string;
    manufacturer: string;
    gateway: string;
    protocol: string;


    constructor(
        displayName: string,
        type: string,
        manufacturer: string,
        gateway: string,
        protocol: string,
    ) {
        this.displayName = displayName;
        this.type = type;
        this.manufacturer = manufacturer;
        this.gateway = gateway;
        this.protocol = protocol;
    }
}

export function newSensor() {
    return new Sensor('', '', '', '', '');
}


// Gateway Class
export class Gateway {
    _id: string;
    displayName: string;
    type: string;
    manufacturer: string;

    constructor(
        displayName: string,
        type: string,
        manufacturer: string,

    ) {
        this.displayName = displayName;
        this.type = type;
        this.manufacturer = manufacturer;
    }
}

export function newGateway() {
    return new Gateway('', '', '');
}


// Site Class
export class Site {
    _id: string;
    displayName: string;
    type: string;

    constructor(
        displayName: string,
        type: string,

    ) {
        this.displayName = displayName;
        this.type = type;
    }
}

export function newSite() {
    return new Site('', '');
}
