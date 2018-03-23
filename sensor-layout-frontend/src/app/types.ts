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
        _id: string,
        name: string,
    ) {
        this._id = _id;
        this.name = name;
    }
}

// export function newAutoCompleteOption() {
//     return new AutoCompleteOption('');
// }



// Type Class
export class Type {
    _id: string;
    name: string;
   
    constructor(
        name: string
    ) {
        this.name = name;
    }
}

export function newType() {
    return new Type('');
}



// Protocol Class
export class Protocol {
    _id: string;
    name: string;
   
    constructor(
        name: string
    ) {
        this.name = name;
    }
}

export function newProtocol() {
    return new Protocol('');
}



// Manufacturer Class
export class Manufacturer {
    _id: string;
    name: string;
   
    constructor(
        name: string,
    ) {
        this.name = name;
    }
}

export function newManufacturer() {
    return new Manufacturer('');
}



// Sensor Class
export class Sensor {
    _id: string;
    name: string;
    type: AutoCompleteOption;
    manufacturer: AutoCompleteOption;
    protocols: AutoCompleteOption[];    
    gateway: AutoCompleteOption;
    site: AutoCompleteOption;

    constructor(
        name: string,
        type: AutoCompleteOption,
        manufacturer: AutoCompleteOption,
        protocols: AutoCompleteOption[],
        gateway: AutoCompleteOption,
        site: AutoCompleteOption        
    ) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.protocols = protocols;        
        this.gateway = gateway;
        this.site = site;
    }
}


// export function newSensor() {
//     return new Sensor(newAutoCompleteOption, , '', '', '', '');
// }



// Gateway Class
export class Gateway {
    _id: string;
    name: string;
    manufacturer: AutoCompleteOption;
    site: AutoCompleteOption;
    protocols: AutoCompleteOption[];
    parentGateway: AutoCompleteOption;
    childGateways: AutoCompleteOption[];
    sensors: AutoCompleteOption[];

    constructor(
        name: string,
        manufacturer: AutoCompleteOption,
        site: AutoCompleteOption,
        protocols: AutoCompleteOption[],
        parentGateway: AutoCompleteOption,
        childGateways: AutoCompleteOption[],
        sensors: AutoCompleteOption[],
    ) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.site = site;
        this.protocols = protocols;
        this.parentGateway = parentGateway;
        this.childGateways = childGateways;
        this.sensors = sensors;
    }
}

// export function newGateway() {
//     return new Gateway('', '', '', [], '', [], []);
// }


// Site Class
export class Site {
    _id: string;
    name: string;
    gateways: AutoCompleteOption[];
    parentSite: AutoCompleteOption;
    childSites: AutoCompleteOption[];

    constructor(
        name: string,
        gateways: AutoCompleteOption[],
        parentSite: AutoCompleteOption,
        childSites: AutoCompleteOption[]
    ) {
        this.name = name;
        this.gateways = gateways;
        this.parentSite = parentSite;
        this.childSites = childSites;
    }
}

// export function newSite() {
//     return new Site('', [], '', []);
// }
