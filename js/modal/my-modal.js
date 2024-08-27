
// j쿼리 사용한  삭제모달창
$(document).ready(function() {
  const $modal = $('#my-Modal');

  // 회원탈퇴 모달 열기
  window.openDeleteModal = function() {
    $modal.css('display', 'block');
  };

  // 확인버튼 클릭시 메인페이지로 이동(회원탈퇴완료)
  window.goToPage = function() {
    // console.log("goToPage 함수 호출됨"); 진짜 멋있게 처리한 부분
    window.location.href = "../main/main.html";
  };

  // 회원 탈퇴 모달 닫기(페이지 이동 없음)
  window.closeDeleteModal = function() {
    $modal.css('display', 'none');
  };

  // 모달 외부 클릭 시 닫기
  $(window).on('click', function(event) {
    if ($(event.target).is($modal)) {
      closeDeleteModal();
    }
  });
});
