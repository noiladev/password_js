var input = document.querySelector('.inp');
var btn = document.querySelector('.btn');
var answer = document.querySelector('.ans');

function fn() {
    if (input.value.length >= 8 && input.value.match(/[0-9.,]/g)) {
        input.value.trim()
        if (input.value.match(/[A-Z]/g)) {
            input.style.border = '3px solid blue';
            input.style.boxShadow = "0px 6px 25px 10px rgba(48, 76, 235, 0.651)";
            answer.textContent = 'strong password';
            answer.style.color = 'blue';
            console.log('strong password');
        } else {
            input.style.border = '3px solid red';
            input.style.boxShadow = "0px 6px 25px 10px rgba(235, 48, 76, 0.651)";
            answer.textContent = 'you should  add atleast one uppercase letter';
            answer.style.color = 'red';
      console.log('not strong password');
    }
  } else {
    input.style.border = '3px solid red';
    input.style.boxShadow = "0px 6px 25px 10px rgba(235, 48, 76, 0.651)";
    answer.textContent = 'please write a strong password! It helps your security';
    answer.style.color = 'red';
    console.log('not strong password');
  }
  console.log(input.value);
}

btn.addEventListener('click', fn);
