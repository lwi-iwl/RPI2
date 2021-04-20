const
    date = document.querySelector('.date'),
    time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  username = document.querySelector('.username'),
  focusname = document.querySelector('.focus'),
  backbutton = document.querySelector('.backbutton'),
  quotebutton = document.querySelector('.quotebutton'),
  quote = document.querySelector('.quote'),
  weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  weatherDescription = document.querySelector('.weather-description'),
  townname = document.querySelector('.town'),
  dayname = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  monthname = ["января","февраля","марта","апреля","мая","июня",
  "июля","августа","сентября","октября","ноября","декабря"];


function fillList(arr){
    var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

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

  date.innerHTML = `${dayname[day]}, ${daynumber} ${monthname[month]}`
  setTimeout(showDate, 1000);
}


function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setQuote(arr){
  if (text == '')
    getQuote(arr)
  quote.textContent = text;
}

function edQuote(e){
  if (e.type === 'click')
  if ((document.getElementById( 'g' ).contentWindow.document.body.innerText != null) && 
  (document.getElementById( 'g' ).contentWindow.document.body.innerText != ''))
  getQuote(arr);
}

function getQuote(arr){
    var today = new Date(),
    str = arr[(today.getHours() + Number(sessionStorage.getItem('hour'))) % 6],
    newstr = '',
    newstr1 = '',
    i = 0,
    maxk = Math.floor(Math.random()*11)*2,
    k = 0,
    allstr = document.getElementById( 'g' ).contentWindow.document.body.innerText;
    if (str.indexOf('g')+1){
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    else if (str.indexOf('k')+1){
      maxk = maxk + 22;
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    else if (str.indexOf('n')+1){
      maxk = maxk + 44;
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    else if (str.indexOf('p')+1){
      maxk = maxk + 66;
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    else if (str.indexOf('r')+1){
      maxk = maxk + 88;
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    else if (str.indexOf('s')+1){
      maxk = maxk + 110;
      while (k<maxk){
        if (allstr[i] == '\n')
          k++;
        i++;
        }
        while (allstr[i] != '\n'){
          newstr = newstr + allstr[i];
          i++;
          }
        i++;
        while (allstr[i] != '\n'){
          newstr1 = newstr1 + allstr[i];
          i++;
          }
    }
    newstr = newstr+'\n'+newstr1;
    text = newstr;
}


function getImg(arr){
    let today = new Date(),
    toon = arr[(today.getHours() + Number(sessionStorage.getItem('hour'))) % 6];
    back = toon + '.jpg';
    return back;
}



function edBackground(){
    if (sessionStorage.getItem('hour') == 23)
    sessionStorage.setItem('hour', 0);
    else
    sessionStorage.setItem('hour', 0 + Number(sessionStorage.getItem('hour'))+1);
    if (document.getElementById( 'g' ).contentWindow.document.body.innerText != null)
    getQuote(arr);
    setBgGreet(arr, text);
}

function setBgGreet(arr) {
  let today = new Date(),
    hour = today.getHours(),
    newhour = (hour + Number(sessionStorage.getItem('hour'))) % 24;
    if (sessionStorage.getItem('oldhour') == null || sessionStorage.getItem('oldhour') != hour)
    {
      sessionStorage.setItem('oldhour', hour);
      sessionStorage.setItem('hour', 0);
    }
    if (newhour < 6)
      document.body.style.backgroundImage = "url('/night/" + getImg(arr) + "')";
  
    else if (newhour < 12) 
      document.body.style.backgroundImage = "url('/morning/" + getImg(arr) + "')";
  
  else if (newhour < 18) 
    document.body.style.backgroundImage = "url('/afternoon/" + getImg(arr) + "')";
  
  else
    document.body.style.backgroundImage = "url('/evening/" + getImg(arr) + "')";

  if (hour < 6)
    greeting.textContent = 'Доброй ночи, ';
  else if (hour < 12)
    greeting.textContent = 'Доброе утро, ';
  else if (hour < 18)
    greeting.textContent = 'Добрый день, ';
  else
    greeting.textContent = 'Добрый вечер, ';

  setTimeout(setBgGreet, 1000, arr);
  if ((document.getElementById( 'g' ).contentWindow.document.body.innerText != null) && 
  (document.getElementById( 'g' ).contentWindow.document.body.innerText != ''))
  setQuote(arr);
}


function getName() {
  if (localStorage.getItem('username') === null) {
    username.textContent = '[Введите имя]';
  } else {
    username.textContent = localStorage.getItem('username');
  }
}


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


function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focusname.textContent = '[Введите Вашу цель]';
  } else {
    focusname.textContent = localStorage.getItem('focus');
  }
}




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



function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focusname.textContent = '[Введите Вашу цель]';
  } else {
    focusname.textContent = localStorage.getItem('focus');
  }
}




function setWeather(e) {
    if (e.type === 'keypress' && e.target.innerText != '') {
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('town', e.target.innerText);
          townname.blur();
          getWeather();
        }
      } else if  (e.target.innerText != ''){
        localStorage.setItem('town', e.target.innerText);
        getWeather();
      }
    
      if (e.type === 'click')
      {
        townname.textContent = '';
      }
    
      else if (e.target.innerText == ''){
        if (e.which == 13 || e.keyCode == 13){
          townname.blur();
        }
        if (e.type === 'blur'){
            getWeather();
        }
      }
}


async function getWeather() {  
  var town = '';
  if (localStorage.getItem('town') === null) {
    townname.textContent = '[Введите Ваш город]';
  } 
  else {
    townname.textContent = localStorage.getItem('town');
    town = localStorage.getItem('town');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&lang=ru&appid=9cb6cff3a8e7050935724619d2067534&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod == '404')
    {
      weatherIcon.className = 'weather-icon owf';
      temperature.textContent = 'Введите верный город';
      weatherDescription.textContent = '';
    }
    else{
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = `Скорость ветра: ${data.wind.speed}м/с\nВлажность: ${data.main.humidity} %`;
    }
  }
}



sessionStorage.setItem('hour', 0);
username.addEventListener('keypress', setName);
username.addEventListener('blur', setName);
username.addEventListener('click', setName);
focusname.addEventListener('keypress', setFocus);
focusname.addEventListener('click', setFocus);
focusname.addEventListener('blur', setFocus);
townname.addEventListener('keypress', setWeather);
townname.addEventListener('click', setWeather);
townname.addEventListener('blur', setWeather);
backbutton.addEventListener('click', edBackground);
quotebutton.addEventListener('click', edQuote);
var oldarr = ["g1","g2", "k1", "k2", "n1", "n2", "p1", "p2", "r1", "r2", "s1", "s2"],
arr = [];
/*var arr = ["g1","g2","g3","g4","g5","g6","g7","g8", 
"k1", "k2", ,"k3","k4","k5","k6","k7","k8",
"n1", "n2","n3","n4","n5","n6","n7","n8",
"p1", "p2", ,"p3","p4","p5","p6","p7","p8",
"r1", "r2", ,"r3","r4","r5","r6","r7","r8",
"s1", "s2","s3","s4","s5","s6","s7","s8"];*/

text = '';
fillList(oldarr);
for (var i = 0; i < 6; i++)
  arr.push(oldarr[i]);

showDate();
setBgGreet(arr);
getName();
getFocus();
getWeather();