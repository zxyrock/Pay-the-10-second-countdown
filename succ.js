window.onload = function () {
  let time = 10
  setInterval(() => {
    time--;
    document.getElementById('jumpTo').innerText = time;
    if (time == 0) {
      location.href = "./index.html"
    }
  }, 1000);

  document.getElementsByTagName('button')[0].onclick = function(){
    location.href = "./index.html"
  }
}