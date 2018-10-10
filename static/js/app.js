const email = document.getElementById('email');
const pwd = document.getElementById('password');
const msg = document.getElementById('msg');
const btn = document.querySelector('input[type="button"]');
const config = {
  password:{
    minLength : 6
  }
}
const errorsList = [
                      {
                        id : 1,
                        message : 'format de l\'email est incorrect'
                      },
                      {
                        id : 2,
                        message : 'Mot de passe doit avoir au moins ' +  config.password.minLength + ' caractères'
                      },
                      {
                        id : 3,
                        message : 'Mot de passe doit avoir au moins au moins deux chiffres'
                      }
                ];

let errors = [];

function addEvents(){
  btn.addEventListener('click', e =>{
    let index = null;
    index = search(1);
    if(email.value.indexOf('@') == -1){
      if(index == -1) errors.push(1);
    }
    else{
      if(index !== -1) errors.splice(index,1);
    }

    index = search(2);
    if(pwd.value.length < config.password.minLength){
      if(index == -1) errors.push(2);
    }
    else{
      if(index !== -1) errors.splice(index,1);
    }

    index = search(3);
    if(countNumericValues(pwd.value) < 2){
      if(index == -1) errors.push(3);
    }
    else{
      if(index !== -1) errors.splice(index,1);
    }
    displayErrors();
  });
}


function countNumericValues(str){
  let nb = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] >= 0 && str[i] <= 9) nb++;
  }
  return nb;
}

function search(id){
  let index = -1;

  for (let i = 0; i < errors.length; i++) {
    if(id == errors[i]){
      index = i;
    }
    break;
  }

  return index;
}

function displayErrors(){
  let html = '';
  errors.forEach(errorId =>{
    html += '<li class="list-group-item">' + getErrorMessage(errorId) + '</li>';
  });
  msg.innerHTML = html;
}

function getErrorMessage(id){
  let msg = null;
  for (let i = 0; i < errorsList.length; i++) {
    if(id == errorsList[i].id){
      msg = errorsList[i].message;
      break;
    }
  }
  return msg;
}

function init(){
  addEvents();
}

init();
