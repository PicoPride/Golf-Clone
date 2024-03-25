let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
let anchor = document.querySelectorAll("a");

document.addEventListener("mousemove", function (dets) {
  (cursor.style.left = dets.x - 10 + "px"),
    (cursor.style.top = dets.y - 10 + "px");
  (cursorBlur.style.left = dets.x - 250 + "px"),
    (cursorBlur.style.top = dets.y - 250 + "px");
});

anchor.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    cursor.style.scale = 2;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    cursor.style.transition = "all 0.3s ease"
  });
  elem.addEventListener("mouseleave", function(){
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#3ab034";
    cursor.style.transition = "all 0.3s ease"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
