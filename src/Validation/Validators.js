export default {
    firstName: {reg: /^(([A-Za-z]|[\u0621-\u064A])+[,.]?[ ]?|([A-Za-z]|[\u0621-\u064A])+['-]?)+$/, error_message: "Invalid Name, Please enter "},
    lastName: {},
    email:{reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, error_message: 'Invalid email address!'},
    // at least lower case, at least 1 upper case, at least 1 number, at least have special char and min length 8
    password: {reg: /^(?=.{8,})/, error_message: 'Invalid password!'},
    
    name:{reg: /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/, error_message: 'Invalid name!'},

    phone:{reg:/^(01)[0-9]{9}$/, error_message: 'Invalid phone number!'}
}