document.getElementById("formfill").addEventListener("submit",function (e){
  e.preventDefault();
    const myObject={
     Name: document.getElementById("firstName").value,
    Email: document.getElementById("emailName").value,
    phone: document.getElementById("phoneNo").value
   };
   sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
   const mySessionData= JSON.parse(sessionStorage.getItem("mySessionStore"));
   console.log(mySessionData);

   //variable declared inside work only inside
document.getElementById("Output").value =
        "Hello " + myObject.Name  +
        " Thank you for giving your email: " + myObject.Email + " and phone: " + myObject.phone + "\n"+
        "Don't worry i am not doing any unethical things here"  + "\n"+
        "I am only testing my knowledge"+ "\n"+
        "Now last but not least: Hare Krishna";
})
