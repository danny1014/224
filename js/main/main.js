document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.main-slide');
  let currentIndex = 0;
  let autoSlideInterval;

  // 슬라이드를 이동시키는 함수
  function goToSlide(index) {
    const slider = document.querySelector('.main-slider');
    slider.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
  }

  // 다음 슬라이드로 자동 이동
  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  // 자동 슬라이드 기능 시작
  function startAutoSlide() {
    autoSlideInterval = setInterval(goToNextSlide, 3000); // 3초마다 슬라이드 이동
  }

  // 초기화
  goToSlide(currentIndex);
  startAutoSlide();
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
    currentPage += 1;
    if (currentPage >= (contents.length - 3)) {
      currentPage = 0; // 다시 처음으로 돌아감
    }
    showContents(currentPage);
}

function prevContent() {
    currentPage -= 1;
    if (currentPage < 0) {
      currentPage = contents.length - contentsPerPage; // 마지막 세트로 이동
    }
    showContents(currentPage);
}

// 초기 항목을 보여줍니다.
showContents(currentPage);

//커뮤톡톡
const items = document.querySelectorAll('#main-comu-list');
const itemsPerPage = 2; // 한 번에 보여줄 항목 수
let crtPage = 0;

function showItems(startItem) {
  items.forEach((item, m) => {
        if (m >= startItem && m < startItem + itemsPerPage) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
    });
}

function nextItem() {
  crtPage += 1;
    if (crtPage >= (items.length - 1)) {
      crtPage = 0; // 다시 처음으로 돌아감
    }
    showItems(crtPage);
}

function prevItem() {
  crtPage -= 1;
    if (crtPage < 0) {
      crtPage = items.length - itemsPerPage; // 마지막 세트로 이동
    }
    showItems(crtPage);
}

// 초기 항목을 보여줍니다.
showItems(crtPage);