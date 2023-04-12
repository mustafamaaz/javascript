const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if(nameInput === "" && emailInput ===""){
    msg.classList.add('error');
    msg.innerHTML = 'Please Enter All Field';

    setTimeout(()=> msg.remove(),3000);
  }else{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
  userList.appendChild(li);
  console.log('sucess');
  //   nameInput.value

//   clear field
nameInput.value = '';
emailInput.value = '';
}

}

// ye value console pr dekhata hy