




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




