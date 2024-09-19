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

h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;

// 미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
// 내가한 소스
// shortenText("h3", 30)
// function shortenText(el, len) {
// 	const elt = document.querySelector(el);
// 	el_text = elt.innerText;

// 	elt.innerText =
// 		el_text.length > 50 ? el_text.substring(0, len) + "..." : el_text;
// }
// shortenText("h3", 95);

/* // 강사님 소스
 */
function shortenText(elem, len) {
	// 첫 번째 인수로 받은 문자값으로 DOM요소 선택
	const el = document.querySelector(elem);
	// 해당 요소의 문자갑 변수에 할당
	const el_text = el.innerText;

	// 해당 돔요소에 innerText프로퍼티에 대입ㅎ되는 우항을 3항연산자로 연산 처리 후 대입
	el.innerText =
		el_text.length > len ? el_text.substring(0, len) + "..." : el_text;
}
shortenText("h1", 5);
shortenText("h2", 5);
shortenText("h3", 50);
