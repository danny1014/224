const items = document.querySelectorAll('#main-slider-list li');
const itemsPerPage = 4; // 한 번에 보여줄 항목 수
let currentIndex = 0;

function showItems(startIndex) {
    items.forEach((item, i) => {
        if (i >= startIndex && i < startIndex + itemsPerPage) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function nextItem() {
    currentIndex += itemsPerPage;
    if (currentIndex >= items.length) {
        currentIndex = 0; // 다시 처음으로 돌아감
    }
    showItems(currentIndex);
}

function prevItem() {
    currentIndex -= itemsPerPage;
    if (currentIndex < 0) {
        currentIndex = items.length - itemsPerPage; // 마지막 세트로 이동
    }
    showItems(currentIndex);
}

// 초기 항목을 보여줍니다.
showItems(currentIndex);



// 슬라이드 배너부분 js
// 객체를 생성하는 개념과 비슷하다
document.addEventListener('DOMContentLoaded', () => {
  // DOM이 완전히 로드되면 코드를 실행한다
  const banner = document.querySelector('ul.keen-slider');
  // 슬라이더 컨테이너를 선택한다
  const slides = document.querySelectorAll('.keen-slider__slide');
  // 모든 배너를 선택한다
  const firstSlideClone = slides[0].cloneNode(true);
  // 첫번째 슬라이더를 복재한다
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);
  // 마지막 슬라이더를 복제한다
  const prev = document.querySelector('div.prev');
  const next = document.querySelector('div.next');
  const dots = document.querySelectorAll('div.dot');
  // 모든 점을 선택한다
  let count = 1;
  // 현재 슬라이드의 인덱스 초기값은 1이다
  let autoSlideInterval;
  // 자동슬라이드 제어하는 간격 타이머

  //  첫번째슬라이드복재본을 맨뒤에 추가하고 마지막슬라이드 복제본을 맨 앞에 추가
  banner.appendChild(firstSlideClone);
  banner.insertBefore(lastSlideClone, slides[0]);

  // translateX를 이용해 2번째 슬라이드부터 보이게한다
  banner.style.transform = `translateX(${-700 * count}px)`;

  //  4초마다 슬라이드 실행
  autoSlideInterval = setInterval(autoSlide, 4000);

  // dot의 배경색을 변경하는 js
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.style.background = i + 1 === count ? '#313131' : 'none';
    });
  }
  // handleDotClick이 함수로 dot을 클릭할수있게해준다 클릭하면 해당 인덱스로 슬라이드를 이동시키고 자동슬라이드 재설정
  function handleDotClick(dot, index) {
    dot.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      count = index + 1;
      banner.style.transform = `translateX(${-700 * count}px)`;
      banner.style.transition = 'transform 0.7s';
      updateDots();
      autoSlideInterval = setInterval(autoSlide, 2000);
    });
  }
  // dot에 클릭을 할 수 있게 만들어주는 함수
  dots.forEach((dot, i) => handleDotClick(dot, i));

  // 이전 버튼을 클릭할수있게해주는 함수 이전버튼을 클릭하면  하나 이전으로 이동시키고 슬라이드 초기화
  prev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === 1 ? slides.length : count - 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });
  // 다음 버튼을 클릭할수있게해주는 함수 다음버튼을 클릭하면  하나 다음으로 이동시키고 슬라이드 초기화
  next.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
    autoSlideInterval = setInterval(autoSlide, 2000);
  });

  // 자동 슬라이드함수 슬라이드를 하나씩 이동시키고 마지막에가면 첫번째 슬라이드로 이동함
  function autoSlide() {
    count = count === slides.length ? 1 : count + 1;
    banner.style.transform = `translateX(${-700 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    updateDots();
  }
});

//핫플콕콕
const contents = document.querySelectorAll('#main-hot li');
const contentsPerPage = 4; // 한 번에 보여줄 항목 수
let currentPage = 0;

function showContents(startContent) {
  contents.forEach((content, n) => {
        if (n >= startContent && n < startContent + contentsPerPage) {
          content.style.display = 'flex';
        } else {
          content.style.display = 'none';
        }
    });
}

function nextContent() {
    currentPage += contentsPerPage;
    if (currentPage >= contents.length) {
      currentPage = 0; // 다시 처음으로 돌아감
    }
    showContents(currentPage);
}

function prevContent() {
    currentPage -= contentsPerPage;
    if (currentPage < 0) {
      currentPage = contents.length - contentsPerPage; // 마지막 세트로 이동
    }
    showContents(currentPage);
}

// 초기 항목을 보여줍니다.
showContents(currentPage);

//
const boxes = document.querySelectorAll('#main-hot-two li');
const boxesPerPage = 4; // 한 번에 보여줄 항목 수
let currentBox = 0;

function showBoxes(startBox) {
  boxes.forEach((box, m) => {
        if (m >= startBox && m < startBox + boxesPerPage) {
          box.style.display = 'flex';
        } else {
          box.style.display = 'none';
        }
    });
}

function nextBox() {
  currentBox += boxesPerPage;
    if (currentBox >= boxes.length) {
      currentBox = 0; // 다시 처음으로 돌아감
    }
    showBoxes(currentBox);
}

function prevBox() {
  currentBox -= boxesPerPage;
    if (currentBox < 0) {
      currentBox = boxes.length - boxesPerPage; // 마지막 세트로 이동
    }
    showBoxes(currentBox);
}

// 초기 항목을 보여줍니다.
showBoxes(currentBox);
