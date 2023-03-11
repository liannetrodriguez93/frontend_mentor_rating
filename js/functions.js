function rate(context) {
  let currentRate = localStorage.getItem("currentRate");
  if (!!currentRate) {
    var element = document.getElementById(currentRate);
    element.className = "";
  }
  context.className = currentRate !== context.id ? "active" : "";
  if (currentRate !== context.id) {
    localStorage.setItem("currentRate", context.id);
  } else {
    localStorage.clear();
  }
}

function initRate() {
  let currentRate = localStorage.getItem("currentRate");
  if (!!currentRate) {
    var element = document.getElementById(currentRate);
    element.className = "active";
  }
  // document.getElementById("rating-section").style.display = "flex";
  // document.getElementById("thankyou-section").style.display = "none";
}

const submit = () => {
  let currentRate = localStorage.getItem("currentRate");
  document.getElementById("rating-section").style.display = "none";
  document.getElementById("thank-you-section").style.display = "flex"; 
  if (!!currentRate) {
    localStorage.clear();
    var element = document.getElementById("badget");
    element.textContent = `You selected ${currentRate} out of 5`;
  }
};
