const email = document.getElementById('email');
const btn = document.querySelector('input[type="button"]');
let icone = document.getElementById('icone');

function addEvents(){
  email.addEventListener('keyup',e =>{
    let cond1 = email.value.length > 6,
    cond2 = email.value.indexOf('@') != -1,
    cond3 = email.value.substr('-3') == '.fr' || email.value.substr('-3') == '.be';
    btn.disabled = (cond1 && cond2 && cond3)?false:true;
    icone.innerHTML = (!btn.disabled)?'<span class="glyphicon glyphicon-thumbs-up"></span>':'<span class="glyphicon glyphicon-thumbs-down"></span>';
  });
}

function init(){
  addEvents();
}

init();
