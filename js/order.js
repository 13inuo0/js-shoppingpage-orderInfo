window.addEventListener("load", function () {
  const check = this.document.querySelector("#shippingInfo");
  const submit = this.document.querySelector(".order");
  check.addEventListener("change", function () {
    if (check.checked) {
      // console.log("체크 확인");
      //   document.querySelector("#shippingName").value =
      //     document.querySelector("#billingName").value;
      //   document.querySelector("#shippingTel").value =
      //     document.querySelector("#billingTel").value;
      //   document.querySelector("#shippingAdress").value =
      //     document.querySelector("#billingAdress").value;

      // name으로 접근
      console.log(this.document.ship);
    }
  });
});
