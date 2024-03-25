let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  (cursor.style.left = dets.x - 10 + "px"),
    (cursor.style.top = dets.y - 10 + "px");
  (cursorBlur.style.left = dets.x - 250 + "px"),
    (cursorBlur.style.top = dets.y - 250 + "px");
});

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
