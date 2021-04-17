const
    date = document.querySelector('.date'),
    time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  username = document.querySelector('.username'),
  focusname = document.querySelector('.focus'),
  dayname = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
  monthname = ["января","февраля","марта","апреля","мая","июня",
  "июля","августа","сентября","октября","ноября","декабря"]; 


function showDate() {
let newdate = new Date(),
day = newdate.getDay(),
daynumber = newdate.getDate(),
month = newdate.getMonth(),
hour = newdate.getHours(),
minute = newdate.getMinutes(),
sec = newdate.getSeconds();

  time.innerHTML = `${hour}:${addZero(minute)}:${addZero(sec)}
  <br>`;

  date.innerHTML = `${dayname[day-1]}, ${daynumber} ${monthname[month]}`

  setTimeout(showDate, 1000);
}


function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}




function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

    if (hour < 6) {
    document.body.style.backgroundImage =
        "url('/night/1.png')";
    greeting.textContent = 'Доброй ночи, ';
    }
  
    else if (hour < 12) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Доброе утро, ';
  }
  
  else if (hour < 18) {
    document.body.style.backgroundImage =
    "url('/night/1.png')";
    greeting.textContent = 'Добрый день, ';
  } 
  
  else {
    document.body.style.backgroundImage =
    "url('morning/s2.jpg')";
    greeting.textContent = 'Добрый вечер, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('username') === null) {
    username.textContent = '[Введите имя]';
  } else {
    username.textContent = localStorage.getItem('username');
  }
}

// Set Name
function setName(e) {

  if (e.type === 'keypress' && e.target.innerText != '') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('username', e.target.innerText);
      username.blur();
    }
  } else if  (e.target.innerText != ''){
    localStorage.setItem('username', e.target.innerText);
  }

  if (e.type === 'click')
  {
    username.textContent = '';
  }

  else if (e.target.innerText == ''){
    if (e.which == 13 || e.keyCode == 13){
        username.blur();
    }
    if (e.type === 'blur'){
        getName();
    }
  }

}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focusname.textContent = '[Введите Вашу цель]';
  } else {
    focusname.textContent = localStorage.getItem('focus');
  }
}



// Set Focus
function setFocus(e) {
    if (e.type === 'keypress' && e.target.innerText != '') {
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('focus', e.target.innerText);
          focusname.blur();
        }
      } else if  (e.target.innerText != ''){
        localStorage.setItem('focus', e.target.innerText);
      }
    
      if (e.type === 'click')
      {
        focusname.textContent = '';
      }
    
      else if (e.target.innerText == ''){
        if (e.which == 13 || e.keyCode == 13){
            focusname.blur();
        }
        if (e.type === 'blur'){
            getFocus();
        }
      }
}

username.addEventListener('keypress', setName);
username.addEventListener('blur', setName);
username.addEventListener('click', setName);
focusname.addEventListener('keypress', setFocus);
focusname.addEventListener('blur', setFocus);
focusname.addEventListener('click', setFocus);

// Run

showDate();
setBgGreet();
getName();
getFocus();