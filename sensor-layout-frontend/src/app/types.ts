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

// Auto Complete Option Class
export class AutoCompleteOption {
    _id: string;
    name: string;

    constructor(
        name: string,
    ) {
        this.name = name;
    }
}

export function newAutoCompleteOption() {
    return new AutoCompleteOption('');
}

// Sensor Class
export class Sensor {
    _id: string;
    name: string;
    type: string;
    manufacturer: string;
    protocol: string;    
    gateway: string;
    site: string;

    constructor(
        name: string,
        type: string,
        manufacturer: string,
        protocol: string,
        gateway: string,
        site: string        
    ) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.protocol = protocol;        
        this.gateway = gateway;
        this.site = site;
    }
}

export function newSensor() {
    return new Sensor('', '', '', '', '', '');
}


// Gateway Class
export class Gateway {
    _id: string;
    name: string;
    type: string;
    manufacturer: string;
    site: string;
    parentGateway: string;
    childGateways: string[];
    sensors: string[];

    constructor(
        name: string,
        type: string,
        manufacturer: string,
        site: string,
        parentGateway: string,
        childGateways: string[],
        sensors: string[],
    ) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.site = site;
        this.parentGateway = parentGateway;
        this.childGateways = childGateways;
        this.sensors = sensors;
    }
}

export function newGateway() {
    return new Gateway('', '', '', '', '', [], []);
}


// Site Class
export class Site {
    _id: string;
    name: string;
    gateways: string[];
    parentSite: string;
    childSites: string[];

    constructor(
        name: string,
        gateways: string[],
        parentSite: string,
        childSites: string[]
    ) {
        this.name = name;
        this.gateways = gateways;
        this.parentSite = parentSite;
        this.childSites = childSites;
    }
}

export function newSite() {
    return new Site('', [], '', []);
}