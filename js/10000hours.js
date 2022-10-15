// 1 - 계산되는 시간동안 보여줘야될 화면
const loadingTempl = `
<div class="time">
  <img src="https://paullab.co.kr/images/10000hours/loading.png" alt="시계" />
</div>
`;

// 2 - 계산완료 후 보여줘야 될 화면
const resultTempl = (resultText = "프로그래밍", time = 5) => `
<div class="result-contents">
  <h2 class="sr-only">결과 확인</h2>
  <div class="txt-wannabe-result-wrapper">
    <p class="txt-wannabe">
      당신은
      <strong class="wannabe-result">${resultText}</strong>
      전문가가 되기 위해서
    </p>
  </div>
  <p class="txt-time">
    대략
    <strong class="wannabe-result">${time}</strong>
    일 이상 훈련하셔야 합니다! :)
  </p>
  <div class="btn-result-wrapper">
    <button class="btn-go">훈련하러 가기 GO!GO!</button>
    <button class="btn-share">공유하기</button>
  </div>
</div>
`;

const $resultSection = document.querySelector(".cont-result");
const $btn = document.querySelector(".btn-exc");
const $contFooter = document.querySelector(".cont-footer");

const $wannabeInput = document.querySelector(".txt-wannabe > input");
const $timeInput = document.querySelector(".txt-time > input");

$btn.addEventListener("click", () => {
  const textValue = $wannabeInput.value;
  const timeValue = $timeInput.value;

  const day = Math.ceil(10000 / timeValue);
  $contFooter.style.cssText = "margin-top:130px;";
  $resultSection.children.length &&
    $resultSection.removeChild($resultSection.children[0]);
  $resultSection.insertAdjacentHTML("afterbegin", loadingTempl);

  // 2초 후에 게산되는 로직
  setTimeout(() => {
    $resultSection.removeChild($resultSection.children[0]);
    $resultSection.insertAdjacentHTML(
      "afterbegin",
      resultTempl(textValue, day)
    );
  }, 1500);
});
