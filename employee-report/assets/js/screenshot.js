// *|| Screenshot function Implementation
let screenshot = () => {
  const actualBtn = document.querySelector('#screenshot-upload');
  const fileChosen = document.querySelector('.screenshot--span');
  const showImage = document.querySelector('.screenshot--image');

  actualBtn.addEventListener('change', function(event){
    fileChosen.textContent = this.files[0].name; 
    showImage.classList.add('screenshot--active'); 
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.querySelector('.screenshot--image');
      preview.src = src;
    }
  })
}

screenshot()
