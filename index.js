let numberOfDrums = document.querySelectorAll('.drum').length

for (let i=0; i<numberOfDrums; i++) {
document.querySelectorAll('.drum')[i].addEventListener('click', function () {

    let buttonInner = this.innerHTML;

    makeSound(buttonInner);
    
   buttonAnimation(buttonInner);
    
});
}


document.addEventListener('keypress', function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
})

 
function makeSound(key) {

    switch (key) {
        case 'w':

        let audio = new Audio('sounds/crash.mp3');
        audio.play();
            break;

            case 'a':

            let audioa = new Audio('sounds/kick-bass.mp3');
            audioa.play();
            break;
            
            case 's':

            let audios = new Audio('sounds/snare.mp3');
            audios.play();
            break;

            case 'd':
            
            let audiod = new Audio('sounds/tom-1.mp3');
            audiod.play();
            break;

            case 'j':

            let audiosj = new Audio('sounds/tom-2.mp3');
            audiosj.play();
            break;

            case 'k':

            let audiok = new Audio('sounds/tom-3.mp3');
            audiok.play();
            break;

            case 'l':

            let l = new Audio('sounds/tom-4.mp3');
            l.play();
            break;

        default: console.log(buttonInner);
            break;
    }

}


function buttonAnimation(currentKey) {
  let activeButton =  document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  },100);
}