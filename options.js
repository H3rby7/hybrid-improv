(function() {
  const prj = document.querySelector("#projection");
  let prjSide = 'right';

  function changeProjectionSide(val) {
    prj.classList.remove("left", "right");
    prjSide = val;
    prj.classList.add(val);
    changeProjectionAngle(document.querySelector("#prjDeg").value);

    const hint = document.querySelector("#prjLocHint");
    if (isRight()) {
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

  document.querySelector("#prjDeg").addEventListener('input', ({target: {value: val}}) => {
    changeProjectionAngle(val);
  }) 
  function changeProjectionAngle(val) {
    const orientation = isRight() ? "-" : ""
    prj.style.transform = `rotateX(-90deg) rotateY(${orientation}${val}deg)`;
  }
  changeProjectionAngle(document.querySelector("#prjDeg").value);

  function isRight() {
    return prjSide === 'right';
  }
})()
