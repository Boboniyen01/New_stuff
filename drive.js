let driveButton = document.getElementById('drive-btn')
console.log(driveButton)
let Car = document.getElementById('img-car')
let headOne = document.querySelector('.head-one')
console.dir(headOne)
function driveTheCar(){
    if(driveButton){
        Car.classList.add('cardrive')
        window.alert("Click 'ok' to start the engine and drive Tate's Car")
    }else{ console.log('nothing is happening');
        Car.classList.remove('cardrive')
    
    }

}
driveButton.addEventListener('click',driveTheCar)