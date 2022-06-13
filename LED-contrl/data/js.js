let btn = document.querySelector('.btn')
let body = document.querySelector('body')
let audio = document.querySelector('#audio')
let holdOn = false

var falg = false;
btn.onclick = debounce(function () {
    if(!falg){
        sendData(1)
        falg=true;
        body.classList.toggle('on');
        audio.play();
    }else{
        sendData(0)
        falg=false;
        body.classList.toggle('on');
        audio.play();
    }
}
, 1000, true)


// 防抖
function debounce(fn, wait, immediate) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) {
                fn.apply(this, arguments)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, wait);
        }
    }
}

//发送参数
function sendData(led){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "setLED?LEDstate="+led, true);
    xhttp.send()
}
