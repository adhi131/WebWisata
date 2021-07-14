const slider = document.querySelector('.slider');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

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

function prevSlide() {
  counter-=1;
  if(counter == 0){
    counter = 5;
  }
  document.getElementById('radio' + counter).checked = true;
}

function nextSlide() {
  counter+=1;
  if(counter > 5){
    counter = 1;
  }
  document.getElementById('radio' + counter).checked = true;
}

prev.addEventListener('click',function(){
  prevSlide();
})

next.addEventListener('click',function(){
 nextSlide();
 
})

slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
  repeater();
});