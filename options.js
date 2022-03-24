(function() {
  function changeProjectionLocation(val) {
    const prj = document.querySelector("#projection");
    prj.classList.remove("left", "right");
    prj.classList.add(val);

    const hint = document.querySelector("#prjLocHint");
    if (val === 'right') {
      hint.innerHTML = "place your own camera left of this screen<br>&smt;---------"
    } else {
      hint.innerHTML = "place your own camera right of this screen<br>---------&gt;"
    }
  }
  document.querySelector("#prjLR").addEventListener('input', ({target: {value: val}}) => {
    changeProjectionLocation(val);
  })
  changeProjectionLocation(document.querySelector("#prjLR").value);
})()
