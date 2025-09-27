// var element = document.getElementsByClassName('plus')[0];

// element.style.color = 'red';
var element = '';
function myFunction(star) {
    console.log(star)

    const plusElements = document.getElementsByClassName('plus');
    for(let i = 0; i < star; i++){
        console.log('i', i)
        plusElements.classList.add("minus");
    }
    for(let i = star; i < 5; i++){
        console.log('i', i)
        plusElements.classList.remove("minus");
    }
    document.getElementById('text').innerHTML = `Thanks for ${star} stars review!`
  }
