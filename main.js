document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.querySelector('.form-container');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('body');
  const submit = document.getElementById('submit');

  function getData() {
    const request = new XMLHttpRequest();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
   
    const requestURL = `mail.php?ИМЯ=${name}&ФАМИЛИЯ=${surname}&ТЕЛЕФОН=${number}&E-MAIL=${email}&КОММЕНТАРИЙ=${comment}`;
    const url = "mail.php";

    request.open("GET", requestURL);
    
    request.onload = () => {
      if (request.status !== 200) {
        // выводим ошибку в консоль
        alert(`Ошибка ${request.status}: ${request.statusText}`);
        return;
      }
      alert('Сообщение успешно отправлено!');
      console.log(request.response);
    };
    // срабатывает, когда запрос не может быть выполнен (например, нет соединения или не корректный URL)
    request.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
      console.log(`Ошибка при выполнении запроса`);
    };

    request.send();
  }
  
  function clear() {
    formContainer.style.visibility = 'hidden';
    body.style.overflowY = 'visible';
    document.querySelectorAll('input').forEach((el, key) => {
      if (el.type !== 'submit') {
        el.value = "";
      }
    });
  }

  function validateForm() {
    var form = document.forms["myForm"];

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        if (form[key].value == "" && form[key] !== 'comment') {
          form[key].style.background = '#f76a0b76';
          return false;
        }
      }
    }

    return true;
} 

  buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
      window.scrollTo(0, 0);
      formContainer.style.visibility = 'visible';
      body.style.overflowY = 'hidden';
    });
  });

  formContainer.addEventListener('click', (ev) => {
    if(ev.target == formContainer) {
      clear();
    }
  });

  submit.addEventListener('click', ev => {
    ev.preventDefault();

    if (validateForm()) {
      getData();
      clear();
    }
    
  });
});