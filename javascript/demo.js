let variable = document.querySelector('button');
variable.addEventListener('click',showmsg);

function showmsg(){
    alert("please ender correct details");
}

let secvar =document.querySelector('button');

secvar.addEventListener('click',inputmsg);
function inputmsg(){
    let name = prompt('Enter the name');
    secvar.textContent=  'Name: '+ name;
}