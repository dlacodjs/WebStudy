html 등장 이후 웹을 아름답고 보기편하게 만들고자 css가 등장하였다.  
  
html과 css는 다른 개념이므로 html언어로 style 태그를 이용해야함.  

===============================================================

font 글자 꾸미기 태그  
style CSS시작태그  
  
  
+ /<CSS>
ex)
![CSS](http://drive.google.com/uc?export=view&id=1F4ipyravnzD8xhOskCswvQSAzXMSiUYp)  
a {  
color:red;  
}  
  
a는 선택자(selector)   
color:red; 는 효과,선언(declaration)  
해석 : 모든 a태그에게 color:red;라는 효과를 적용해준다  
  
style 태그는 html의 속성이고 css의 효과를 담는다  
  
+ 선택자  
.class  
#id  
( 선택자 우선순위 tag<class<id )  
  
화면 전체 할당=block level element  
자기 크기만큼 할당=inline element  
  
+ css box model  
css활용 border  
        padding  
        margin  
        width 등등  
  
+ grid  
부모 태그로 감싸서 고차원적 디자인 : <div>,<span>  
display:grid;  
grid-template-...  
  
+ 미디어 쿼리  
@media  
min-width  
max-width  
