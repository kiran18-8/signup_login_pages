var getId=(id)=>{
    return document.getElementById(id);
}
var getClasses=(classes)=>{
    return document.getElementsByClassName(classes);
}
var firstName=getId('firstname'),
lastName=getId('lastname'),
email=getId('email'),
phone=getId('phone'),
password=getId('password'),
button=getId('signup'),
errmsg=getClasses('error'),
form=getId('signup-form'),
container=getId('container');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
   var fname=customvalidator(firstName,0,'FirstName is madatory');
   var lname= customvalidator(lastName,1,'LastName is madatory');
   var email1=customvalidator(email,2,'Email is madatory');
    var phonenumber = customvalidator(phone, 3, 'Phone Number must be 10 digits');
    var password= passwordvalidate(password,4,'password is required');
   if(fname==true && lname==true && email1==true && phonenumber==true && password==true){
    var finalobject = {};
    finalobject['firstname']=firstName.value;
    finalobject['lastname']=lastName.value;
    finalobject['email']=email.value;
    finalobject['phonenumber']=phonenumber.value;
    finalobject['password']=password.value;
    localStorage.setItem('userinfo',JSON.stringify(finalobject));
   }
})

function customvalidator(documentref, classId, errorMessage, pattern = null){
    if(documentref.value.trim() ===''){
        documentref.style.border="2px solid red";
        errmsg[classId].textContent=errorMessage;
        return false;
    }
    else{
        documentref.style.border="2px solid green"
        errmsg[classId].textContent=""
        return true;
    }
}
function passwordvalidate(pass,classId,errorMessage){
    if(pass.value==''){
        pass.style.border="2px solid red";
        errmsg[classId].textContent=errorMessage;
        return false;
    }
    else{
        pass.style.border="2px solid green";
        errmsg[classId].textContent='';
        return true;
    }
}