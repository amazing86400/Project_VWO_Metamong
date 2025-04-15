document.addEventListener("DOMContentLoaded", function () {
  // CTA 버튼 이벤트
  document.getElementById("hero-cta").addEventListener("click", function () {
    console.log("Hero CTA Clicked");
  });

  // 모든 구매 버튼에 이벤트 추가
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productName = this.parentElement.querySelector("h3").textContent;
      console.log("Product Purchased:", productName);
    });
  });

  // 구독 버튼 이벤트
  document
    .getElementById("subscribe-btn")
    .addEventListener("click", function () {
      const email = document.getElementById("email-input").value;
      console.log("Subscribed with email:", email);
    });
});
