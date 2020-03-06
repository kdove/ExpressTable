const Table = require("../lib/table");

//describe the Table functions
describe("Table:", () => {
    //test the get name function
    test("Get name function", () => {
        const testTable = new Table("Bill", "214-555-5555", "email@email.com", 1);

        expect(testTable.getName()).toEqual("Bill");
    });

    //test the get phone number function
    test("Get phone number function", () => {
        const testTable = new Table("Bill", "214-555-5555", "email@email.com", 1);

        expect(testTable.getPhoneNumber()).toEqual("214-555-5555");
    });
    
    //test the get email function
    test("Get email function", () => {
        const testTable = new Table("Bill", "214-555-5555", "email@email.com", 1);

        expect(testTable.getEmail()).toEqual("email@email.com");
    });
    
    //test the get ID function
    test("Get ID function", () => {
        const testTable = new Table("Bill", "214-555-5555", "email@email.com", 1);

        expect(testTable.getId()).toEqual(1);
    });
});