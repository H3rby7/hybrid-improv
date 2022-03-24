(function() {
  const prj = document.querySelector("#projection");
  function changeProjectionSide(val) {
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
    changeProjectionSide(val);
  })
  changeProjectionSide(document.querySelector("#prjLR").value);

  document.querySelector("#prjDist").addEventListener('input', ({target: {value: val}}) => {
    changeProjectionDistance(val);
  }) 
  function changeProjectionDistance(val) {
    prj.style.top = val + "px";
  }
  changeProjectionDistance(document.querySelector("#prjDist").value);
})()
