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
  });
});
