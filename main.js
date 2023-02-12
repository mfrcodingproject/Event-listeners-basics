//Part 1
const ZoomIn = document.querySelector(".zoom-in-btn");
const ZoomOut = document.querySelector(".zoom-out-btn");
//Part 2
const image = document.querySelector("#image");

//Part 3 
const increase = () => {
    image.width +=100;
 };

  ZoomIn.addEventListener("click", increase); 

  const decrease = () => {
    image.width -= 100;
};

ZoomOut.addEventListener("click", decrease);


  