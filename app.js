// form blur event listeners

document.querySelector('#name').addEventListener('blur',validateName);
document.querySelector('#pin').addEventListener('blur',validatePin);
document.querySelector('#email').addEventListener('blur',validateEmail);
document.querySelector('#phone').addEventListener('blur',validatePhone);

// Event functions
function validateName(e){
       const name =e.target  ;
       const re =/^[A-Za-z]{2,10}$/;
       if(!re.test(name.value)){
               name.classList.add('is-invalid');
       }else{
        name.classList.remove('is-invalid');
       }
e.preventDefault();
}

function validatePin(e){
     
  const pin =e.target  ;
  const re =/^[0-9]{6}$/;
  if(re.test(pin.value)){
          pin.classList.remove('is-invalid');
  }else{
   pin.classList.add('is-invalid');
  }
e.preventDefault();
}

function validateEmail(e){
  const Email =e.target  ;
  const re =/^[\w\.\-]+@gmail.com$/;
  if(re.test(Email.value)){
          Email.classList.remove('is-invalid');
  }else{
   Email.classList.add('is-invalid');
  }
e.preventDefault();
    
}
function validatePhone(e){

    const phone =e.target  ;
  const re =/^[0-9]{10}$/;
  if(re.test(phone.value)){
          phone.classList.remove('is-invalid');
  }else{
   phone.classList.add('is-invalid');
  }
e.preventDefault();
}