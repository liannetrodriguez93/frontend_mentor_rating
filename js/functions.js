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
}

const submit = () => {
  let currentRate = localStorage.getItem("currentRate");
  console.log("submit");
  window.location = `./pages/result-page.html?${currentRate}`;
  console.log(window.location)
};
