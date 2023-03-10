const getRate = () => {
  let currentRate = localStorage.getItem("currentRate");
  if (!!currentRate) {
    localStorage.clear();
    var element = document.getElementById("badget");
    element.textContent = `You selected ${currentRate} out of 5`;
  } else {
    window.location.href = '/frontend_mentor_rating/'
  }
};
