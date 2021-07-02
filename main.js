var Person = require("./person");

var awuriname = new Person(1);
/**
 * awuriname
  .getName()
  .then((name) => {
    console.log(name);
  })
  .catch((error) => console.log(error));

 */

Person.Createperson("sochi", "123", "eber@mail.com", 5);

let sochi = new Person(5);

sochi.getName().then((name) => console.log(name));
function generateSalt(){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
} 



const createUser = async (formdata) => {
    if(!formdata.name || formdata.email || formdata.password){
        return("error: invalid params")
    }

    saltedPassword = await 

}