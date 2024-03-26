let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
let anchor = document.querySelectorAll("a");

document.addEventListener("mousemove", function (dets) {
  (cursor.style.left = dets.x -10 + "px"),
    (cursor.style.top = dets.y - 10 + "px");
  (cursorBlur.style.left = dets.x - 250 + "px"),
    (cursorBlur.style.top = dets.y - 250 + "px");
});

anchor.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    cursor.style.transition = "all 0.3s ease";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0 solid #3ab034";
    cursor.style.backgroundColor = "#3ab034";
    cursor.style.transition = "all 0.3s ease";
  });
});
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// gsap for navigation and main section start
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡


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
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// gsap for navigation and main section End
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡



//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// gsap for about us section Start
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about-us",
    scroll: "body",
    start: "top 60%",
    end: "top 58%",
    scrub: 3
  }
})

gsap.from(".cards-container", {   // For Cards Section
  y: 50,
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".cards",
    scroll: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3
  }
})

gsap.from("#colon1", {
  y: 50,
  x: -90,
  // scale: 0.9,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon1",
    start: "top 50%",
    end: "top 47%%",
    scrub: 3
  }
})
gsap.from("#colon2", {
  y: 50,
  x: 90,
  // scale: 0.9,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon1",
    start: "top 60%",
    end: "top 58%",
    scrub: 3
  }
})