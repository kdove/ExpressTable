//making a table
class Table {
    constructor(name, phoneNumber, email, id){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.id = id;
    }

    //get name function
    getName(){
        return this.name;
    }

    //get phoneNumber function
    getPhoneNumber(){
        return this.phoneNumber;
    }

    //get email function
    getEmail(){
        return this.email;
    }

    //getid function
    getId(){
        return this.id;
    }
}

module.exports = Table;