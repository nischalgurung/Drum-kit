// const tom1 = document.querySelector("#tom1");
// const tom2 = document.querySelector("#tom2");
// const tom3 = document.querySelector("#tom3");
// const tom4 = document.querySelector("#tom4");
// const crash = document.querySelector("#crash");
// const snare = document.querySelector("#snare");
// const kick = document.querySelector("#kick");

// tom1.addEventListener("click", () => {
//   let audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
//   tom1.classList.add("active");
//   setTimeout(() => {
//     tom1.classList.remove("active");
//   }, 100);
// });
// tom2.addEventListener("click", () => {
//   let audio = new Audio("./sounds/tom-2.mp3");
//   audio.play();
//   tom2.classList.add("active");
//   setTimeout(() => {
//     tom2.classList.remove("active");
//   }, 100);
// });
// tom3.addEventListener("click", () => {
//   let audio = new Audio("./sounds/tom-3.mp3");
//   audio.play();
//   tom3.classList.add("active");
//   setTimeout(() => {
//     tom3.classList.remove("active");
//   }, 100);
// });
// tom4.addEventListener("click", () => {
//   let audio = new Audio("./sounds/tom-4.mp3");
//   audio.play();
//   tom4.classList.add("active");
//   setTimeout(() => {
//     tom4.classList.remove("active");
//   }, 100);
// });
// crash.addEventListener("click", () => {
//   let audio = new Audio("./sounds/crash.mp3");
//   audio.play();
//   crash.classList.add("active");
//   setTimeout(() => {
//     crash.classList.remove("active");
//   }, 100);
// });
// kick.addEventListener("click", () => {
//   let audio = new Audio("./sounds/kick-bass.mp3");
//   audio.play();
//   kick.classList.add("active");
//   setTimeout(() => {
//     kick.classList.remove("active");
//   }, 100);
// });
// snare.addEventListener("click", () => {
//   let audio = new Audio("./sounds/snare.mp3");
//   audio.play();
//   snare.classList.add("active");
//   setTimeout(() => {
//     snare.classList.remove("active");
//   }, 100);
// });

// window.addEventListener("keypress", (event) => {
//   switch (event.key) {
//     case "w":
//       let tom1s = new Audio("./sounds/tom-1.mp3");
//       tom1s.play();
//       tom1.classList.add("active");
//       setTimeout(() => {
//         tom1.classList.remove("active");
//       }, 100);
//       break;
//     case "a":
//       let tom2s = new Audio("./sounds/tom-2.mp3");
//       tom2s.play();
//       tom2.classList.add("active");
//       setTimeout(() => {
//         tom2.classList.remove("active");
//       }, 100);
//       break;
//     case "s":
//       let tom3s = new Audio("./sounds/tom-3.mp3");
//       tom3s.play();
//       tom3.classList.add("active");
//       setTimeout(() => {
//         tom3.classList.remove("active");
//       }, 100);
//       break;

//     case "d":
//       let tom4s = new Audio("./sounds/tom-4.mp3");
//       tom4s.play();
//       tom4.classList.add("active");
//       setTimeout(() => {
//         tom4.classList.remove("active");
//       }, 100);
//       break;
//     case "j":
//       let snares = new Audio("./sounds/snare.mp3");
//       snares.play();
//       snare.classList.add("active");
//       setTimeout(() => {
//         snare.classList.remove("active");
//       }, 100);
//       break;
//     case "k":
//       let kicks = new Audio("./sounds/kick-bass.mp3");
//       kicks.play();
//       kick.classList.add("active");
//       setTimeout(() => {
//         kick.classList.remove("active");
//       }, 100);
//       break;
//     case "l":
//       let crashs = new Audio("./sounds/crash.mp3");
//       crashs.play();
//       crash.classList.add("active");
//       setTimeout(() => {
//         crash.classList.remove("active");
//       }, 100);
//       break;
//     default:
//       break;
//   }
// });
// ######### THE ABOVE ONE IS A VERY LONG CODE BUT COMPARATIVELY EASIER TO UNDERSTAND IN MY OPINION :)##########

// ##################################################################

// ************ BELOW IS A SHORTER ALTERNATIVE ************
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    let audio = new Audio(`./sounds/${box.accessKey}.mp3`);
    audio.play();

    box.classList.add("active");
    setTimeout(() => {
      box.classList.remove("active");
    }, 100);
  });
});

window.addEventListener("keypress", (event) => {
  boxes.forEach((box) => {
    if (event.key === box.textContent) {
      let audio = new Audio(`./sounds/${box.accessKey}.mp3`);
      audio.play();
      box.classList.add("active");
      setTimeout(() => {
        box.classList.remove("active");
      }, 100);
    }
  });
});
