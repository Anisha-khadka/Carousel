let slides = document.getElementsByClassName("main");
let slider = document.getElementsByClassName("main2")[0].children;
let circle = document.getElementsByClassName("circle")[0].children;
console.log(circle);

// console.log(slider);
let currentIndex = 0;
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-arrow-left")) {
      slider[currentIndex].style.display = "none";
      currentIndex = (currentIndex - 1 + slider.length) % slider.length;
      slider[currentIndex].style.display = "block";
      console.log("hello left");
    }

    if (e.target.classList.contains("fa-arrow-right")) {
      slider[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1 + slider.length) % slider.length;
      slider[currentIndex].style.display = "block";
    }

    for (j = 0; j < circle.length; j++) {
      if (e.target === circle[j]) {
        slider[currentIndex].style.display = "none";

        currentIndex = [j];
        
        slider[currentIndex].style.display = "block";
          


      }
    }



    // if(e.target===circle[0]){
    //   slider[currentIndex].style.display="none"
    //   currentIndex=0;
    //   slider[currentIndex].style.display="block"

    // }
    // if(e.target===circle[1]){
    //   slider[currentIndex].style.display="none"
    //   currentIndex=1;
    //   slider[currentIndex].style.display="block"

    // }
    // if(e.target===circle[2]){
    //   slider[currentIndex].style.display="none"
    //   currentIndex=2;
    //   slider[currentIndex].style.display="block"

    // }
  });
}
