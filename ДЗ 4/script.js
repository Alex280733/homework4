let sound = new Audio('');
let laugh = new Audio('');
let wow = new Audio('');
wow.autoplay = true;
let alertWindow = 1;

let img = document.querySelector('.img');
let button = document.querySelector('.button');
button.onclick = function(){
    if(alertWindow === 1){
        alert('ЩОСЬ');
        
    }
    let imgSrc = img.getAttribute('src');
    if(imgSrc === 'img/Moon.jpg'){
        img.src = 'img/sun.jpg'
    } else{
        img.src = 'img/Moon.jpg'
    }

    this.classList.toggle('active');

    if(this.innerText === 'ТИСНИ СЮДИ'){
        this.innerText = 'ДИВИСЬ ЛУНА';
    } else{
        this.innerText = 'ТИСНИ СЮДИ';
    }
}
