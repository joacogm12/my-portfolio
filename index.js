var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slidePosition - 1].style.display = "block";
}



var slidePositionFront = 1;
SlideShowFront(slidePositionFront);

// forward/Back controls
function plusSlidesFront(n, backFront) {
    SlideShowFront(slidePositionFront += n, backFront);
}

//  images controls
function currentSlideFront(n) {
    SlideShowFront(slidePositionFront = n);
}

function SlideShowFront(n, backFront) {
    var i;
    var slides = document.getElementsByClassName("frontContainers");
    if (n > slides.length) { slidePositionFront = 1 }
    if (n < 1) { slidePositionFront = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slidePositionFront == slides.length && backFront == false) {
        slidePositionFront = 3
    }
    if (slidePositionFront == slides.length && backFront == true) {
        slidePositionFront = 1
    }
    slides[slidePositionFront - 1].style.display = "block";
    slides[slidePositionFront].style.display = "block";
}


var slidePositionBack = 1;
SlideShowBack(slidePositionBack);

// forward/Back controls
function plusSlidesBack(n, backFront) {
    SlideShowBack(slidePositionBack += n, backFront);
}

//  images controls
function currentSlideBack(n) {
    SlideShowBack(slidePositionBack = n);
}

function SlideShowBack(n, backFront) {
    var i;
    var slides = document.getElementsByClassName("BackContainers");
    if (n > slides.length) { slidePositionBack = 1 }
    if (n < 1) { slidePositionBack = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slidePositionBack == slides.length && backFront == true) {
        slidePositionBack = 1
    }

    if (slidePositionBack == slides.length && backFront == false) {
        slidePositionBack = 3
    }
    if (slidePositionBack == slides.length && backFront == true) {
        slidePositionBack = 1
    }
    slides[slidePositionBack - 1].style.display = "block";
    slides[slidePositionBack].style.display = "block";
} 