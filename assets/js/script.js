const mediaQuery = window.matchMedia('(max-width: 768px)')
let earned_value = document.getElementById("earned_value").textContent;
var progressPercent = parseInt((earned_value.replace(' ', '')).substring(0, earned_value.length - 2)) / 1000000;
function handleTabletChange(e) {
  if (e.matches) {
        document.querySelector(':root').style.setProperty('--max-scale', 'none');
        document.querySelector(':root').style.setProperty('--current-scale', 0 + 'px');
        setProgressValue(earned_value, progressPercent);
        document.querySelector(':root').style.setProperty('--number-order', 7);

  } else {
    document.querySelector(':root').style.setProperty('--max-scale', 714 + 'px');
    document.querySelector(':root').style.setProperty('--current-scale', 0 + 'px');
    setProgressValue(earned_value, progressPercent)
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

const mediaPhone = window.matchMedia('(max-width:550px)');
function handleTabletPhoneChange(e){
    if(e.matches){
        document.getElementById('teachers-title').textContent = "Ваши препо-\nдаватели";
    } else {
        document.getElementById('teachers-title').textContent = "Ваши преподаватели";
    }
}
mediaPhone.addListener(handleTabletPhoneChange);
handleTabletPhoneChange(mediaPhone);

const mediaLaptopQuery = window.matchMedia('(max-width: 1280px)')
function handleLaptopChange(e) {
  if (e.matches) {
        document.querySelector('.menu-list').style.display = 'none';
        document.querySelector('.menuheader').style.display = 'none';
  }
    else{
        document.querySelector('.menu-list').style.display = 'flex';
        document.querySelector('.menuheader').style.display = 'none';
    }
}
mediaLaptopQuery.addListener(handleLaptopChange)
handleTabletChange(mediaLaptopQuery)
function setProgressValue(value, progress){
    var startPosition= 0;
    
    var progressWidth = document.getElementById("total-scale").offsetWidth * progress;
    var intervalTime = Math.round(1000 / document.getElementById("total-scale").offsetWidth);
    console.log(intervalTime);
    var progressScale = setInterval(function(){
        var currentScale = document.getElementById("current-scale").offsetWidth;
        if(currentScale >= progressWidth){
            
            clearInterval(progressScale);
        } else {
            
            document.querySelector(':root').style.setProperty('--current-scale', (currentScale+1) + 'px');

        }
    }, intervalTime);

}





var timerTime = 1000000;
var timer = setInterval(function(){
    if(timerTime<=0) clearInterval(timer);  
    var temp = 24*60*60;
    var days = Math.floor(timerTime/temp);
    var hours = Math.floor((timerTime - days*temp)/3600);
    var minutes = Math.floor((timerTime - days*temp - hours*3600)/60);
    var seconds = timerTime - days*temp - hours*3600 - minutes*60;  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    timerTime--;
}, 1000);




const menu_list = document.querySelectorAll('a[href*="#"]')
for (let item of menu_list) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = item.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

document.querySelector('.burger').addEventListener('click', function(){
    spancomplex = document.querySelectorAll('.burger span');
    for(let span of spancomplex){
        span.classList.toggle('active');
    }
    if(!document.querySelector('.menuheader').classList.contains('active')){
            document.querySelector('.menuheader').style.display = 'block';
            document.querySelector('.menu-list').style.display = 'block';
            document.querySelector('.menuheader').classList.toggle('active');
            document.querySelector('.menu-list').classList.toggle('active');
            document.querySelector('body').classList.toggle('active');
        } else {
            
            document.querySelector('.menuheader').classList.toggle('active');
            document.querySelector('.menu-list').classList.toggle('active');
            document.querySelector('body').classList.toggle('active');
            document.querySelector('.menuheader').style.display = 'none';
            document.querySelector('.menu-list').style.display = 'none';
        }
})
for(let item of menu_list){
    item.addEventListener('click', function(){
        if(document.querySelector('.menuheader').classList.contains('active')){
            spancomplex = document.querySelectorAll('.burger span');
            for(let span of spancomplex){
                span.classList.toggle('active');
            }
            document.querySelector('.menuheader').classList.toggle('active');
            document.querySelector('.menu-list').classList.toggle('active');
            document.querySelector('body').classList.toggle('active');
            document.querySelector('.menuheader').style.display = 'none';
            document.querySelector('.menu-list').style.display = 'none';
        }
    })
}
//this.classList.contains('active')