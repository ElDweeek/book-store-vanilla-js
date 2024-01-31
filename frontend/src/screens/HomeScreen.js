import axios from 'axios';
import Rating from '../components/Rating';

const HomeScreen = {

  render: async () => {
    const response = await axios({
      url: 'http://localhost:3000/',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response || response.statusText !== 'OK') {
      return `<div>Error In Loading Content</div>`;
    }

    const data = response.data;

    return `
    <div class="landing d-flex justify-content-center align-items-center">
    <div class="container text-center">
      <h3 class="text-uppercase pb-3 mb-5">Reading is a <span>pleasure</span>, reading is a <span>challenge</span></h3>
      <p>Reading helps you explore life from different perspectives. While you read books you are building new and
        creative thoughts, images and opinions in your mind. It makes you think creatively, fantasize and use your
        imagination.</p>
      <div class="btn mt-4 ps-5 pe-5 pt-3 pb-3">Start Reading</div>
    </div>
  </div>


  <div class="authors">
    <div class="container">
      <div class="heading text-center">
        <h1>Authors</h1>
      </div>
      <ul id="slider" class="authors slider container">
      ${data.authors.map(
      (authors) => `
        <li class="section ${authors.class} row">
      <span>${authors.title}</span>

      <div class="slide col-lg-4 col-md-6">
        <img src="${authors.image1}" alt="" draggable="false">
        <div class="text">
          <h5>${authors.name1}</h5>
          <p>${authors.snapshot1}</p>
        </div>
      </div>

      <div class="slide col-lg-4 col-md-6">
        <img src="${authors.image2}" alt=""draggable="false">
        <div class="text">
          <h5>${authors.name2}</h5>
          <p>${authors.snapshot2}</p>
        </div>
      </div>

      <div class="slide col-lg-4 col-md-6">
        <img src="${authors.image3}" alt="" draggable="false">
        <div class="text">
          <h5>${authors.name3}</h5>
          <p>${authors.snapshot3}</p>
        </div>
      </div>
      </li>
      `).join('\n')}

      </ul>

      <div class="control container">
        <span id="prev" class="prev"><i class="fa-solid fa-chevron-left"></i></span>
        <span id="next" class="next"><i class="fa-solid fa-chevron-right"></i></span>
      </div>

    </div>

    <div id="indicators" class="indicators container d-none d-lg-block">
    </div>
  </div>






  <div class="video">

    <video autoplay muted loop src="./imgs/aboutUs.mp4" type="video/mp4"></video>
    <div class="text  text-center">

      <h3>Reading Benefits</h3>
      <p>"Writing and reading decrease our sense of isolation. They deepen and widen and expand our sense of life: They
        feed the soul. When writers make us shake our heads with the exactness of their prose and their truths, and even
        make us laugh about ourselves or life, our buoyancy is restored. We are given a shot at dancing with, or at
        least clapping along with, the absurdity of life, instead of being squashed by it over and over again. It's like
        singing on a boat during a terrible storm at sea. You can't stop the raging storm, but singing can change the
        hearts and spirits of the people who are together on that ship."</p>
      <div class="btn mt-4 ps-5 pe-5 pt-3 pb-3">See More</div>
    </div>

  </div>


  <div class="books">
    <div class="container">
      <div class="heading text-center">
        <h1>Books</h1>
      </div>


      <h2 class="text-center">English Books</h2>
<div class="engBtns-container">
      <ul class="engSlider container slidding">
      ${data.engProducts.map(
        (engProducts) => `
      <li>
      <div class="box">
            <a href="/#/info/${engProducts._id}" draggable="false">
              <img src="${engProducts.image}" alt="${engProducts.name}" draggable="false">
            </a>
            <a href="/#/info/${engProducts._id}" draggable="false">
              <h5>${engProducts.name}</h5>
            </a>
            <div class="book-rating">
            <span>${Rating.render({ value: engProducts.rating })}</span>
            <span>${engProducts.numReview + " reviews"}</span>
            </div>
            <p>Price:<span>$ ${engProducts.price}</span> </p>
          </div>
      </li>
      `).join('\n')}

      </ul>

      <span class="books-btn" id="engLeft"><i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
      <span class="books-btn" id="engRight"><i class="fa fa-angle-right" aria-hidden="true"></i>
      </span>
      </div>

      <h2 class="text-center mt-5">Arabic Books</h2>

  <div class="arBtns-container">
      <ul class="arSlider container slidding">
      ${data.arProducts.map(
          (arProducts) => `
      <li>
      <div class="box">
            <a href="/#/info/${arProducts._id}" draggable="false">
              <img src="${arProducts.image}" alt="${arProducts.name}" draggable="false">
            </a>
            <a href="/#/info/${arProducts._id}" draggable="false">
              <h5>${arProducts.name}</h5>
            </a>
            <div class="book-rating">
            <span>${Rating.render({ value: arProducts.rating})}</span>
            <span>${arProducts.numReview + " reviews"}</span>
            </div>
            <p>Price:<span>$ ${arProducts.price}</span> </p>
          </div>
      </li>
      `).join('\n')}

      </ul>

      <span class="books-btn" id="arLeft"><i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
      <span class="books-btn" id="arRight"><i class="fa fa-angle-right" aria-hidden="true"></i>
      </span>
      </div>
    </div>
  </div>














    `
  },

// Function Section ----------------------------------------------------------------------------------------------


  after_render: () => {
        // Authors Section -----------------------------------------------------------------------------------

    let sliderSections = Array.from(document.querySelectorAll('.slider .section'));

let sectionCount = sliderSections.length;


let currentSection = 1;


let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

prevButton.onclick = prevSection;
nextButton.onclick = nextSection;

let indicatorElement = document.createElement('ul');


indicatorElement.setAttribute('id', "indicator-ul");

for (let i = 1; i <= sectionCount; i++) {

  let indicatorItem = document.createElement('li');

  indicatorItem.setAttribute('data-section', i);

  indicatorItem.appendChild(document.createTextNode(i));

  indicatorElement.appendChild(indicatorItem);

}

document.getElementById('indicators').appendChild(indicatorElement);


let indicatorCreatedUl = document.getElementById('indicator-ul')

let indicatorBullets = Array.from(document.querySelectorAll('#indicator-ul li'));


for (let i = 0; i < indicatorBullets.length; i++) {

  indicatorBullets[i].onclick = function () {
    currentSection = parseInt(this.getAttribute('data-section'));
    theChecker();
  }
}



theChecker();


function prevSection() {
  if (prevButton.classList.contains('disabled')) {
    return false;
  } else {
    currentSection--;
    theChecker();
  }
}

function nextSection() {
  if (nextButton.classList.contains('disabled')) {
    return false;
  } else {
    currentSection++;
    theChecker();
  }
}



function theChecker() {

  removeAllActive();
  
  sliderSections[currentSection - 1].classList.add('active');


  indicatorCreatedUl.children[currentSection - 1].classList.add('active');

  if (currentSection == 1) {
    prevButton.classList.add('disabled');

  } else
    prevButton.classList.remove('disabled');

  if (currentSection == sectionCount) {
    nextButton.classList.add('disabled');

  } else
    nextButton.classList.remove('disabled');

}

function removeAllActive() {
  sliderSections.forEach(function (section) {
    section.classList.remove('active')
  });

  indicatorBullets.forEach(function (bullet) {
    bullet.classList.remove('active')
  });

}

// Books Section-------------------------------------------------------------------------------

const engBookSlider = document.querySelector(".engSlider");
const arBookSlider = document.querySelector(".arSlider");



let isDragging = false, startX, startScrollLeft, engTimeOutId ,arTimeOutId;

// btns -----------
const leftEngBtn = document.getElementById("engLeft");
const RightEngBtn = document.getElementById("engRight");
const leftArBtn = document.getElementById("arLeft");
const rightArBtn = document.getElementById("arRight");

const firstCartWidth = engBookSlider.querySelector(".box").offsetWidth;

// infinite && autoplay -------------
const engBookSliderChildrens = [...engBookSlider.children];
const arBookSliderChildrens = [...arBookSlider.children];

let boxPerView = Math.round(engBookSlider.offsetWidth / firstCartWidth )

engBookSliderChildrens.slice(-boxPerView).reverse().forEach(box => {
  engBookSlider.insertAdjacentHTML("afterbegin" , box.outerHTML);
});
engBookSliderChildrens.slice(0, boxPerView).forEach(box => {
  engBookSlider.insertAdjacentHTML("beforeend" , box.outerHTML);
});


arBookSliderChildrens.slice(-boxPerView).reverse().forEach(box => {
  arBookSlider.insertAdjacentHTML("afterbegin" , box.outerHTML);
});
arBookSliderChildrens.slice(0, boxPerView).forEach(box => {
  arBookSlider.insertAdjacentHTML("beforeend" , box.outerHTML);
});

const engInfiniteScroll = () => {
  if(engBookSlider.scrollLeft === 12) {
    engBookSlider.classList.add("no-transition");
    engBookSlider.scrollLeft = engBookSlider.scrollWidth - (2 * engBookSlider.offsetWidth);
    engBookSlider.classList.remove("no-transition");
  } 
  else if (Math.ceil(engBookSlider.scrollLeft) === engBookSlider.scrollWidth - engBookSlider.offsetWidth) {
    engBookSlider.classList.add("no-transition");
    engBookSlider.scrollLeft = engBookSlider.offsetWidth;
    engBookSlider.classList.remove("no-transition");
  }
  clearTimeout(engTimeOutId);
  if(!engBookSlider.matches(":hover")) engAutoPlay();
}
const arInfiniteScroll = () => {
  if(arBookSlider.scrollLeft === 12) {
    arBookSlider.classList.add("no-transition");
    arBookSlider.scrollLeft = arBookSlider.scrollWidth - (2 * arBookSlider.offsetWidth);
    arBookSlider.classList.remove("no-transition");
  } 
  else if (Math.ceil(arBookSlider.scrollLeft) === arBookSlider.scrollWidth - arBookSlider.offsetWidth) {
    arBookSlider.classList.add("no-transition");
    arBookSlider.scrollLeft = arBookSlider.offsetWidth;
    arBookSlider.classList.remove("no-transition");
  }
  clearTimeout(arTimeOutId);
  if(!arBookSlider.matches(":hover")) arAutoPlay();
}

const engAutoPlay = () => {
  if(window.innerWidth < 300) return;
  engTimeOutId = setTimeout(() => engBookSlider.scrollLeft += firstCartWidth , 2500)
}
engAutoPlay();

const arAutoPlay = () => {
  if(window.innerWidth < 300) return;
  arTimeOutId = setTimeout(() => arBookSlider.scrollLeft += firstCartWidth , 2500)
}
arAutoPlay();

// Dragging --------------

const engDragStart = (e) => {
  isDragging = true;
  engBookSlider.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = engBookSlider.scrollLeft;
}
const arDragStart = (e) => {
  isDragging = true;
  arBookSlider.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = arBookSlider.scrollLeft;
}


const engDragging = (e) => {
  if(!isDragging) return;
  engBookSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const arDragging = (e) => {
  if(!isDragging) return;
  arBookSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
}



const engDragStop = () => {
  isDragging = false;
  engBookSlider.classList.remove("dragging")
}
const arDragStop = () => {
  isDragging = false;
  arBookSlider.classList.remove("dragging")
}


// addEventListener for Sliding-----------
engBookSlider.addEventListener("mousedown", engDragStart);
engBookSlider.addEventListener("mousemove", engDragging);
document.addEventListener("mouseup", engDragStop);
arBookSlider.addEventListener("mousedown", arDragStart);
arBookSlider.addEventListener("mousemove", arDragging);
document.addEventListener("mouseup", arDragStop);


// addEventListener for btns-----------
leftEngBtn.addEventListener("click", ()=> {
  engBookSlider.scrollLeft += leftEngBtn ? (-firstCartWidth) : null
})
RightEngBtn.addEventListener("click", ()=> {
  engBookSlider.scrollLeft += RightEngBtn ? firstCartWidth : null
})
leftArBtn.addEventListener("click", ()=> {
  arBookSlider.scrollLeft += leftArBtn ? -firstCartWidth : null
})
rightArBtn.addEventListener("click", ()=> {
  arBookSlider.scrollLeft += rightArBtn ? firstCartWidth : null
})

// addEventListener for infiniteLoop && autoPlay-----------
engBookSlider.addEventListener("scroll", engInfiniteScroll)
engBookSlider.addEventListener("mouseenter", () => clearTimeout(engTimeOutId))
engBookSlider.addEventListener("mouseleave", engAutoPlay)
arBookSlider.addEventListener("scroll", arInfiniteScroll)
arBookSlider.addEventListener("mouseenter", () => clearTimeout(arTimeOutId))
arBookSlider.addEventListener("mouseleave", arAutoPlay)

  },
};

export default HomeScreen;


