
let password=document.querySelector('#exampleInputPassword1');
let eyes_chang=document.querySelector('.fa-eye-slash');
let check=document.querySelector('#exampleCheck1');

function chang(){
    if(eyes_chang.className=="fa-solid fa-eye-slash"){
        eyes_chang.className="fa-solid fa-eye";
        password.type="text";
    }
    else  if(eyes_chang.className=="fa-solid fa-eye"){
        eyes_chang.className="fa-solid fa-eye-slash";
        password.type="password";
    }
}
