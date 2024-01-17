let driveButton = document.getElementById('drive-btn')
console.log(driveButton)
let Car = document.getElementById('img-car')
let headOne = document.getElementById('first-header')
var paragraph = document.querySelector('#second-sec p')
console.dir(headOne)
function driveTheCar(){
    if(Car){
        headOne.textContent='Congrats!! you have successfully driven Tates car'
        Car.classList.add('cardrive')
        paragraph.textContent =' Reload Page to Drive the car'
        window.alert("Click 'ok' to start the engine and drive Tate's Car")
    }else if(driveButton){
        Car.classList.add('cardrive')
    }
}
driveButton.addEventListener('click',driveTheCar)