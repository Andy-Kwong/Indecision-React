var nameVar = "Andy";
var nameVar = "Andy Kwong";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
    const petName = "Hal";
    return petName;
}

//Block scoping - Const and Let are scoped by block
//Var are available outside of codeblocks such as if statements

const fullName = "Andy Kwong";

if (fullName) {
    const firstName = fullName.split(" ")[0];
    var lastName = fullName.split(" ")[1];
    console.log(firstName);
}
