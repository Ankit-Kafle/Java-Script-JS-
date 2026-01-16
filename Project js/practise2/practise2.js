const passwordBox = document.getElementById("password");
const length= 10;
const upperCase= "ABCDEFGHIZKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghizklmnopqrstuvwxyz";
const number = "0123456789";
const symbol="!@#$%^&*()_+~";
const allChars= upperCase+ lowerCase +number+ symbol


function createPassword(){
    let pass="";
    // we have added a variable password which is empty, then we are adding the values from the down process 
    // Ensure at least one character from each category
    pass+= upperCase[Math.floor(Math.random()*upperCase.length)];
    pass+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    pass+= number[Math.floor(Math.random()*number.length)];
    pass+= symbol[Math.floor(Math.random()*symbol.length)];

while(length > pass.length){
    pass+=allChars[Math.floor(Math.random()*allChars.length)];

}
passwordBox.value=pass;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

