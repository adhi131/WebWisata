const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

var counter = 1;
var playSlider;
var repeater = () => {
   playSlider = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 3000);
}
repeater();

slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
  repeater();
});