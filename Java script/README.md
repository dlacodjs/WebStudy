+ @이벤트  
  
경고 : alert  
  
\<아래가 이벤트>  
onclick : 실행되었을 때 (사건, 이벤트가 일어났을 때 동작)  
onchange : 변했을 때  
onkeydown : 키입력시  
  
이러한 이벤트를 이용해서 사용자와 상호작용할 수 있는 웹페이지를 만들 수 있다.  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @콘솔  
  
페이지 내에서 자바스크립트 실행가능.  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @데이터타입  
  
데이터를 잘 처리하기 위해 데이터를 구분하는게 필요 >> 데이터 타입.  
자바스크립트에는 6개의 데이터 타입과 객체가 있음  
콘솔 창에서 바로 코드 작성할 수 있음  
  
이상연산자 중 산술연산자 (+, -, *, /)  
문자열 '~', "~"  
- .length - 문자열의 길이  
- .toUpperCase() - 대문자로 바꿔줌  
- .indexOf('~') - ~가 몇 번째에 있는가  
- .trim() 공백 지움  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @변수와 대입연산자  
x = 2;  
x는 변수  
=은 대입연산자  
2는 상수(constant)  
var : 변수작성시 사용 (variable의 약자)  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @프로그램, 프로그래밍, 프로그래머  
프로그램 = 순서  
순서를 만드는 행위 = 프로그래밍  
순서를 만드는 사람 = 프로그래머  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @조건문  
\<형식>  
if(~){  
내용  
} else {  
내용  
}  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @리팩토링  
리팩토링이란 비효율적인 코드를 효율적으로 개선하는 것  
document.queruySelector(#night_day) 라는 태그는 id="night_day" 와 의미가 같다.  
해당 코드를 this 바꾸면 효율적임  
변수를 활용해 중복을 크게 제거 할 수 있다.  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @배열  
데이터를 정리해서 담아두는 수납상자  

ex)  
var coworkers = ["~", "~", "~"];  
~에 있는 배열을 만들어서 coworkers 변수에 담음  
  
coworkers[i];  
인덱스  
  
coworkers.push('~');  
배열 맨 뒤에 ~를 추가  
  
coworkers.length;  
배열의 개수  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @반복문  
while(*){  
~  
};  
* 에는 boolean이 들어오고,  
true일 때 ~를 실행하고 false가 되었을 때 멈춤  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @배열과 반복문  
반복문에서 i를 배열의 인덱스로 활용하면서 좋은 시너지가 남  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @함수  
함수를 정의하기  
function @@@(){  
@@@@;  
}  
  
Parameter(매개변수) argument(인자)를 사용해 입력값에 따른 다른 결과를 출력 가능  
  
function sum(a, b){  
document.write(a + b);  
}  
sum(c, d);  
  
a, b = parameter(매개변수).  
c,d = argument(인자).  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @객체  
객체는 함수라는 기반 위에 존재  
함수와 같이 정리정돈의 도구  
  
객체가 갖고 있는 여러 특성 중 하나 "정리 정돈의 수단"  
코드가 아주 길어면, 정리하기 위해 객체를 쓴다.  
함수의 이름을 지정할때 set을 붙여서 많이 쓴다.  
  
document.querySelector()  
document 가 객체.  
querySelector() 가 함수.  
객체에서 함수(querySelector)를 메소드(method)라 부름  
////////////////////////////////////////////////////////////////////////////////////////////////////////
+ @ui api  
ui = 유저 인터페이스  
api = 애플리케이션 프로그래밍 인터페이스  
  
![JavaScript](http://drive.google.com/uc?export=view&id=1VfbT6VjS9zO21roOkXG7LYTBtoWiIbEL)  
![JavaScript](http://drive.google.com/uc?export=view&id=1oXzEYrQ7uBOPdRAhW9lllAc1WDuZqXhn)  
위 사진은 Java script/1.html 실행 결과입니다.
