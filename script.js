
function showForm(type){
document.getElementById('loginForm').classList.toggle('hidden', type!=='login');
document.getElementById('registerForm').classList.toggle('hidden', type!=='register');
document.getElementById('loginTab').classList.toggle('active', type==='login');
document.getElementById('regTab').classList.toggle('active', type==='register');
}
function togglePass(id,el){
let f=document.getElementById(id);
f.type = f.type==='password' ? 'text' : 'password';
el.innerText = f.type==='password' ? 'Show' : 'Hide';
}
function isEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function validateLogin(e){
e.preventDefault();
let email=document.getElementById('loginEmail').value.trim();
let pass=document.getElementById('loginPass').value;
let ok=true;
if(!isEmail(email)){ document.getElementById('loginEmailErr').innerText='Enter valid email'; document.getElementById('loginEmail').classList.add('error'); ok=false; }
else{ document.getElementById('loginEmailErr').innerText=''; document.getElementById('loginEmail').classList.remove('error'); }
if(pass.length<6){ document.getElementById('loginPassErr').innerText='Password must be min 6 chars'; document.getElementById('loginPass').classList.add('error'); ok=false; }
else{ document.getElementById('loginPassErr').innerText=''; document.getElementById('loginPass').classList.remove('error'); }
if(ok) document.getElementById('loginSuccess').innerText='Login Successful ✅';
return false;
}

function validateRegister(e){
e.preventDefault();
let name=document.getElementById('regName').value.trim();
let email=document.getElementById('regEmail').value.trim();
let pass=document.getElementById('regPass').value;
let conf=document.getElementById('regConfirm').value;
let ok=true;
if(name.length<3){ document.getElementById('regNameErr').innerText='Enter your name'; ok=false; } else document.getElementById('regNameErr').innerText='';
if(!isEmail(email)){ document.getElementById('regEmailErr').innerText='Enter valid email'; ok=false; } else document.getElementById('regEmailErr').innerText='';
if(pass.length<6){ document.getElementById('regPassErr').innerText='Password must be min 6 chars'; ok=false; } else document.getElementById('regPassErr').innerText='';
if(conf!==pass || conf===''){ document.getElementById('regConfirmErr').innerText='Passwords do not match'; ok=false; } else document.getElementById('regConfirmErr').innerText='';
if(ok) document.getElementById('regSuccess').innerText='Account Created Successfully ✅';
return false;
}