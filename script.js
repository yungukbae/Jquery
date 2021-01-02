




//기본 함수 정의문 
/*
function 함수명() {
    코드;
}
*/

//함수 호출
//함수명();


//실습1


/*
var count = 0;

myFnc();

function myFnc(){

    count++;
    document.write("hello" + count,"<br>");

}

myFnc();

var theFnc = function(){

    count++;
    document.write("bye" + count,"<br>");

}

theFnc();
*/


//실습2

/*
var color = ["white","yellow","aqua","purple"];
var i = 0;
function changeColor(){

    i++;
    if( i >= color.length){
        i = 0;
    }

    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = color[i];

}*/


//매개변수가 있는 함수 정의문
/*function 함수명{(매개변수 1, 매개변수 2,... 매개변수 3)

    코드;
}

함수명(데이터1, 데이터2, 데이터3);
*/


//실습3


/*
function myFnc(name, area){

    document.write("안녕하세요. " + name + "입니다.","<br>");
    document.write("사는 곳은" + area + "입니다.","<br>");

}

myFnc("홍당무","서울");
myFnc("깍두기","부산");
*/


//실습4
/*
var rightid = "korea";
var rightpw = "1234";

function login(id,pw){

    if(id==rightid){
        if(pw==rightpw){


            document.write(id + "님의 방문을 환영합니다");

        }else{

            alert("잘못된 비밀번호입니다.");

        }
    }else{

        alert("존제하지 않는 아이디입니다.");

    }

}

var userid = prompt("아이디를 입력하세요","");
var userpw = prompt("패스워드를 입력하세요","");

login(userid,userpw);
*/


//실습5
/*
function testAvg(arrData){

    var sum = 0;
    for (var i = 0; i < arrData.length; i++){

        sum += Number(prompt(arrData[i] + "점수는?","0"));

    }

    var avg = sum / arrData.length;
    return avg;

}

var arrSubject = ["국어","수학"];
var result = testAvg(arrSubject);

document.write("평균 점수는 "+ result + " 입니다.");
*/

//실습6
/*
var num = 1;
function gallery(direct){

    if(direct){
        if(num == 8) return;
        num++;
    }else{
        if(num == 1) return;
        num--;
    }


    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src","images/pic_"+num+".jpg");

}

*/

//재귀 함수 호출

/*
function myFnc(){

    코드;
    myFnc();

}

myFnc();
*/


//실습7

/*

var num = 0;
function testFnc(){

    num++;
    document.write(num,"<br>");
    if(num == 10) return;
    testFnc();
}

testFnc(); 
<<<<<<< HEAD

*/
=======
*/

>>>>>>> 6f865f75fd412ed49198ce70383f5db8d46e4c80
//함수 스코프
//

//전역변수와 지역변수의 개념과 차이

//var 변수명;    //전역변수
/*
function 함수명(){
    var 변수명;  //지역변수
}*/


//전역함수와 지역함수의 차이
/*
    //전역함수
    function 함수명1(){
        자바스크립트 코드;
    }

    function 함수명2(){
        //지역함수
        function 함수명3(){
            자바스크립트 코드;
        }
    }
*/


//전역과 지역을 나누는 이유 예제
/*
var num = 100;

function menu(){

    num +=100;
    alert(num);

}

menu();

function menu(){
    alert(num);
}
*/

//실습9
/*
(function(){
    var num = 100;
    function menu(){
        num += 100;
        alert(num);
    }
    menu();
}());

(function(){

    var num = 100;
    function menu(){
        alert(num);
    }
}());
*/


//객체 생성자 함수
/*function 함수명( 매개변수1, 매개변수2, ...매개변수n){
    this.속성명 = 새 값;
    this.함수명 = function(){
        자바스크립트 코드;
    }
}

var 참조 변수(인스턴스 네임) = new 함수명();

var 참조 변수 = { 속성 : 새값, 함수명: function() {...}}
*/

//실습10
/*
function checkweight(name, height, weight){

    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;

    this.getinfo = function(){
        var str = ""
        str += "name: " + this.userName + ",";
        str += "height: " + this.userHeight + ",";
        str += "weight: " + this.userWeight + ",";
        return str;
    }

    this.getResult = function(){

        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userWeight - 100) * 0.9 + 5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight){
            return "normal weight";
        }else if(this.userWeight < this.minWeight){
            return "less then normal";
        }else{
            return "over";
        }

    }


}

var jang = new checkweight("jang",164,70);
var park = new checkweight("park",180,58);
console.log(jang);
console.log(park);
document.write(park.getinfo());
document.write(park.getResult());
*/


//메모리 절약을 위한 프로토타입 사용하기
/*
function 함수명(매개변수1, 매개변수2, ...매개변수n){

    this.속성명 = 새값;

}


함수명.prototype.함수명 = function(){

    코드;

}
var 참조 변수(인스턴스 네임) = new 함수명();
*/
/*
function checkweight(name, height, weight){

    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;

    checkweight.prototype.getinfo = function(){
        var str = ""
        str += "name: " + this.userName + ",";
        str += "height: " + this.userHeight + ",";
        str += "weight: " + this.userWeight + ",";
        return str;
    }

    checkweight.prototype.getResult = function(){

        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userWeight - 100) * 0.9 + 5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight){
            return "normal weight";
        }else if(this.userWeight < this.minWeight){
            return "less then normal";
        }else{
            return "over";
        }

    }


}

var jang = new checkweight("jang",164,70);
var park = new checkweight("park",180,58);
console.log(jang);
console.log(park);
document.write(park.getinfo(),"<br>");
document.write(park.getResult(),"<br>");

document.write(jang.getResult === park.getResult);   //true 라는 뜻은 두객체가 같은 함수를 사용하고 있다는 의미 입니다.

*/


//mission 1
/*
function  randomc(){
var arrColor = ["#ff0","#6c0","#fcf","#cf0","#39f"];
var arrNum = Math.floor(Math.random() * arrColor.length);
var bodyTag = document.getElementById("theBody");
bodyTag.style.backgroundColor = arrColor[arrNum];
}
*/


// function TestScore(name, kor, eng){
//     this.userName = name;
//     this.korNum = kor;
//     this.engNum = eng;

//     TestScore.prototype.getTestInfo = function(){
//         document.write("이름: " + this.userName,"<br>");
//         document.write("국어: " + this.korNum,"<br>");
//         document.write("영어: " + this.engNum,"<br>");
//     }
//     TestScore.prototype.getAvg = function(){
//         return (this.korNum + this.engNum) / 2;
//     }

// }

// var kingun = new TestScore("김군",80,90);
// var ohgun = new TestScore("오군",100,80);

// kingun.getTestInfo();
// document.write("avg:" + kingun.getAvg(),"<br><br>");

// ohgun.getTestInfo();
// document.write("avg:" + ohgun.getAvg(),"<br><br>");


//Ajax Method


