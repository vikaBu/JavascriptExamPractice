document.getElementById('btn-left').onclick = leftClick;


document.getElementById('btn-right').onclick = rightClick;


function moveright() {
    const div = document.getElementById('box');
    div.style.left = Number(div.style.left.slice(0, -2)) + 10 + 'px';
  }
function moveright() {
    const div = document.getElementById('box');
    div.style.left = Number(div.style.left.slice(0, -2)) + 10 + 'px';
  }