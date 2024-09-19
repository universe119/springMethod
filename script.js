/* 미션 changeText 함수 패키징
// 전체 문자열에서 특정 문자값을 기준으로 분리해서 배열로 반환
// const span_text = document.querySelector("span").innerText;
// console.log(span_text); // 2024-09-19

// const text_arr = span_text.split("-");
// console.log(text_arr); // > (3) ['2024','09','19']; 나눠짐

// 배열값은 특정 문자열로 이어서 하나의 문자열로 반환하는 함수
// const new_text = text_arr.join(".");
// console.log(new_text); // 2024.09.19

// 위의 split과 join을 한번에 연산처리
const h2_text = document.querySelector("h2").innerText;
console.log(h2_text.split(" ")); // > (3) ['2024' '09' '20']
const new_h2 = h2_text.split(" ").join("/");
console.log(new_h2);

// 미션 - 위의 구문을 다음과 같은 형태의 함수로 패키징
// changeText("h2"," ","/") 3시 25분까지 완성
// 내 소스
// function changeText(elem, b, j) {
// 	const el_text = document.querySelector(elem).innerText;
// 	const new_text = el_text.split(b).join(j);
// 	console.log(new_text);
// }

// changeText("h2", " ", "_");
// 강사님 소스
*/
function changeText(elem, spc1, spc2) {
	const el = document.querySelector(elem);
	//문자열.trim() : 문자열 앞뒤의 빈칸을 제거해서 정리
	const el_text = el.innerText.trim();
	el.innerText = el_text.split(spc1).join(spc2);
}

changeText("h1", "-", ".");
changeText("h2", " ", "/");
changeText("h3", "_", "+");

// 하다가 안되셔서 지우심
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
// 	changeText("input[name=date]", "-", ".");
// });

/* if문 미션 및 3항연산자 내용 
console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://ww.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

// console.dir(h2);

const h3 = document.querySelector("h3");
console.log(h3.innerText.length); // 문자 확인
const h3_text = h3.innerText;
// h3문자열을 0위치에서 부터 50번째 위치까지 짜른뒤
// 짜른 문자열을 다시 h3.innderText 프로퍼티에 대입해서 적용
// h3.innerText = h3_text.substring(0, 50);
*/
// 미션 - 조건문을 활용해서 h3에 들어가는 문자값이 50글자가 안되면 해당문자를 그대로 출력하고 50글자가 넘어가면 50글자까지 자른뒤 그 뒤에 ... 말줌임표 추가

// if (h3_text.length < 50) h3.innerText = h3_text;

// if (h3_text.length >= 50) h3.innerText = h3_text.substring(0, 50) + "...";

/* 강사님 코드
if (h3_text.length > 30) {
    h3.innerText = h3_text.substring(0, 30) + "...";
} else {
    h3.innerText = h3_text;
}

// 다른 방법
if (h3_text.length > 30) h3.innerText = h3.innerText.substring(0, 30) + "..."; else h3.innerText = h3_text;
*/

// h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;

// 미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
/* 내가 소스
// shortenText("h3", 30)
// function shortenText(el, len) {
// 	const elt = document.querySelector(el);
// 	el_text = elt.innerText;

// 	elt.innerText =
// 		el_text.length > 50 ? el_text.substring(0, len) + "..." : el_text;
// }
// shortenText("h3", 95);
*/

/* // 강사님 소스

shortenText("h1", 5); // 왜 호출을 위에서 하셨을까
shortenText("h2", 5);
shortenText("h3", 50);

function shortenText(elem, len) {
	// 첫 번째 인수로 받은 문자값으로 DOM요소 선택
	const el = document.querySelector(elem);
	// 해당 요소의 문자갑 변수에 할당
	const el_text = el.innerText;

	// 해당 돔요소에 innerText 프로퍼티에 대입되는 우항을 3항연산자로 연산 처리 후 대입
	el.innerText =
		el_text.length > len ? el_text.substring(0, len) + "..." : el_text;
}
*/
