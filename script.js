console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://ww.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;
