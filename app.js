function myFunction() {
  var x = document.getElementById("myNavBar");

  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

var dataMap = new Map([
  [
    document.getElementById("aboutModalButton"),
    document.getElementById("aboutModal"),
  ],
  [document.getElementById("cake1"), document.getElementById("cakeModal1")],
  [document.getElementById("cake2"), document.getElementById("cakeModal2")],
  [document.getElementById("cake3"), document.getElementById("cakeModal3")],
  [document.getElementById("cake4"), document.getElementById("cakeModal4")],
  [document.getElementById("cake5"), document.getElementById("cakeModal5")],
  [document.getElementById("cake6"), document.getElementById("cakeModal6")],
  [document.getElementById("cake7"), document.getElementById("cakeModal7")],
  [document.getElementById("cake8"), document.getElementById("cakeModal8")],
  [document.getElementById("cake9"), document.getElementById("cakeModal9")],
  [document.getElementById("cake10"), document.getElementById("cakeModal10")],
  [document.getElementById("cake11"), document.getElementById("cakeModal11")],
  [document.getElementById("cake12"), document.getElementById("cakeModal12")],
  [document.getElementById("cake13"), document.getElementById("cakeModal13")],
  [document.getElementById("cake14"), document.getElementById("cakeModal14")],
  [document.getElementById("cake15"), document.getElementById("cakeModal15")],
  [document.getElementById("cake16"), document.getElementById("cakeModal16")],
  [document.getElementById("cake17"), document.getElementById("cakeModal17")],
  [document.getElementById("cake18"), document.getElementById("cakeModal18")],
  [document.getElementById("cake19"), document.getElementById("cakeModal19")],
  [document.getElementById("cake20"), document.getElementById("cakeModal20")],
  [document.getElementById("cake21"), document.getElementById("cakeModal21")],
  [document.getElementById("cake22"), document.getElementById("cakeModal22")],
  [document.getElementById("cake23"), document.getElementById("cakeModal23")],
  [document.getElementById("cake24"), document.getElementById("cakeModal24")],
  [document.getElementById("cake25"), document.getElementById("cakeModal25")],
  [document.getElementById("cake26"), document.getElementById("cakeModal26")],
]);

dataMap.forEach((value, key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });
  // anchor.addEventListener("onMouseOver", function (event) {
  //   popupbox.style.display = "block";
  // });

  span.addEventListener("click", function (event) {
    popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
      popupbox.style.display = "none";
    }
  });
}
