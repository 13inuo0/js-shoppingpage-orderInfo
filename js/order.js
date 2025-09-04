window.addEventListener("load", function () {
  const check = this.document.querySelector("#shippingInfo");
  const submit = this.document.querySelector(".order");
  check.addEventListener("change", function () {
    if (check.checked) {
      //   console.log("체크 확인");
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAdress").value =
        document.querySelector("#billingAdress").value;
    }
  });
  // name으로 접근 (중단)
  //   console.log(document.ship.shippingName);
  //   console.log(document.order.shippingName.value);

  submit.addEventListener("click", function (e) {
    // 잠깐 입력되고 사라지면 매개변수 작성하고 e.preventDefault()를 작성하면 정상작동한다.
    e.preventDefault();
    console.log("제출");
    // 체크박스 상태에 따라 배송 정보 업데이트
    if (check.checked) {
      //   console.log("체크 확인");
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAdress").value =
        document.querySelector("#billingAdress").value;
    }
    // 확인 정보 문자를 생성
    const billingName = document.querySelector("#billingName").value;
    // console.log(billingName);
    const billingTel = document.querySelector("#billingTel").value;
    // console.log(billingTel);
    const billingAdress = document.querySelector("#billingAdress").value;
    // console.log(billingAdress);
    const shippingName = document.querySelector("#shippingName").value;
    // console.log(shippingName);
    const shippingTel = document.querySelector("#shippingTel").value;
    // console.log(shippingTel);
    const shippingAdress = document.querySelector("#shippingAdress").value;
    // console.log(shippingAdress);
    let confirmMessage = `
    주문정보 :
    이름: ${billingName}
    연락처: ${billingTel}
    주소: ${billingAdress}
    배송정보 :
    이름: ${shippingName}
    연락처: ${shippingTel}
    주소: ${shippingAdress}
    이 정보가 정확합니까? 
    `;
    // 사용자에게 정보 확인 대화상자 표시
    let userConfirmed = confirm(confirmMessage);
    console.log(userConfirmed);
    if (userConfirmed) {
      alert("입력완료! 결제가 완료되었습니다.");
      document.querySelector("billingName").value = "";
      document.querySelector("billingTel").value = "";
      document.querySelector("billingAdress").value = "";
      document.querySelector("shippingName").value = "";
      document.querySelector("shippingTel").value = "";
      document.querySelector("shippingAdress").value = "";
      check.checked = false;
    } else {
      alert("정보를 다시 확인해주세요.");
    }
  });
});
