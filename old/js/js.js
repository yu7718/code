//創建一個部落格
var title=document.getElementById('title');
var content=document.getElementById('content');
var bb=document.getElementById('bb');
var list=document.getElementById('list');

bb.addEventListener('click',function(){
    list.innerHTML=list.innerHTML+`
    <div class='article'>
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>
    `;
    title.value="";
    content.value="";

})

document.write("<h1>早安</h1>");

//資料型態(字串、數字、布林)
var my_name="xin"
var age=22
var is_male=false
document.write(my_name)

//字串用法
var phrase="hello";
document.write(phrase.length);//長度(從一開始)
document.write("<br>");
document.write(phrase.toUpperCase());//大寫
document.write("<br>");
document.write(phrase.toLowerCase());//小寫
document.write("<br>");
document.write(phrase.charAt(1));//第幾位(從零開始)
document.write("<br>");
document.write(phrase.indexOf("e"));//某數在第幾位
document.write("<br>");
document.write(phrase.substring(2,4),phrase.indexOf("h"), phrase.length);//某段，也可以多個連載一起

//數字用法
document.write(6+7);
document.write("<br>");
document.write(6+5*2);
document.write("<br>");
document.write(6+(7-5));
document.write("<br>");
document.write(9%7);
document.write("<br>");

var num=-6
document.write(Math.abs(num));//絕對值
document.write("<br>");
document.write(Math.max(num));//最大值
document.write("<br>");
document.write(Math.min(num));//最小值
document.write("<br>");
document.write(Math.round(3.6));//四捨五入
document.write("<br>");
document.write(Math.pow(2,3));//次方
document.write("<br>");
document.write(Math.sqrt(36));//開跟
document.write("<br>");
document.write(Math.random());//隨機0~1
document.write("<br>");
document.write(Math.round(Math.random()*10));
document.write("<br>");

//計算簡易計算機
// document.write("計算簡易計算機");
// document.write("<br>");
// var num1=prompt("輸入數字1");
// var num2=prompt("輸入數字2");
// num1=parseFloat(num1);
// num2=parseInt(num2);
// document.write(num1+num2);

document.write("<br>");
//陣列array(可以不用定義多個變數var)
var score=[23,40,50,35,37,47,24];
var friend=['小湖','小名','小如'];
score[1]=20
document.write(score[1]);
document.write("<br>");
document.write(score.length);
document.write("<br>");
document.write(friend[2]);

document.write("<br>");
//函式fuction
function hello(name,age){
    document.write('hi'+name+'你今年'+age+'years');
}
hello('哈哈',44)

document.write("<br>");
function add(num1,num2){
    return num1+num2;//用return會比較好,一般來說還會再回傳回去做其他運算
}
document.write(add(2,3));


document.write("<br>");
//if判斷句
var score=100;
var rainy=true;
if(score=100 && !rainy){ //且是&& 不是:!(驚嘆號)
    document.write("我給你一百塊")
}
else{
    document.write("你給我一百")
}

document.write("<br>");

var score=70;
var rainy=true
if(score==100&&rainy){
    document.write('分數等於一百and下雨')
}
else if(score>=80&&rainy){
    document.write('分數大於八時and下雨')
}
else{
    document.write('分數小於八十')
}

document.write("<br>");
//物件objet可放多個key&value
var person={
    name:"小白",
    age:30,
    is_male:true
}
document.write(person);//不能只提到person，需補充key直
document.write(person.age,person.name);//補充key值

document.write("<br>");

var person={
    actor:[
        {
            name:"小白",
            age:30,
            is_male:true
        }
        ,
        {
            name:"小b",
            age:32,
            is_male:true
        }
    ],
    print_name:function(){
        document.write(this.actor[1].name);//也可以用fuction定義
    }
}
person.print_name();

document.write("<br>");
//while迴圈
//while條件放上面(條件不成立就直接離開)
var i=5;//會顯示567
while(i<=7){
    document.write(i);
    document.write("<br>");
    i++
}
var i=9;//會無結果因為9>7
while(i<=7){
    document.write(i);
    document.write("<br>");
    i++
}
//while條件放下面(前面內容會先跑)
var i=5;
do{
    document.write(i);
    document.write("<br>");
    i++
}
while(i<=7);
var i=9;//還是會顯示出9
do{
    document.write(i);
    document.write("<br>");
    i++
}
while(i<=7);
document.write("<br>");

//密碼檢驗程式
// var password=12345;
// var input;
// var entry_count=0;
// var entry_limt=3;
// var out_of_limit=false;
// while(password!=input&&!out_of_limit){
//       entry_count++;
//       if(entry_count<=entry_limt){
//       input=prompt('請輸入密碼');
//     }
//       else{
//       out_of_limit=true;
//     }
// }
// if(out_of_limit){
//     alert('超出輸入次數');
//     }
// else{
//     alert('成功ㄌ');
//     }
// document.write("<br>");

//for迴圈(比while簡潔一點)
// for(var i=0;i<10;i++){
//     document.write(i)
//     document.write("<br>");
// }
// document.write("<br>");

// var friend=['小黃',"小黑",'小白'];//也可用於陣列
// for(var i=0;i<friend.length;i++){
//     document.write(friend[i]);//用於陣列須注意用中括號[]
//     document.write("<br/>");
// }

// document.write("<br/>");
// var question=[
//     {
//         prompt:'香蕉顏色?\n(a)red\n(b)yellow\n(c)balck',//陣列中用逗號隔開
//         answer:'B'//要怎麼讓大小寫都算正確答案
//     }
// ];
// var score=0;
// for(var i=0;i<question.length;i++){
//     var input=prompt(question[i].prompt);//把input代輸入值
//     if(input==question[i].answer){
//         score++;
//         alert('答對了');
//     }
//     else{
//         alert('答錯了');
//     }
// alert('你答對了'+score+'題!');
// }

document.write("<br/>");
//二微陣列,巢狀陣列
var num=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
for(var i=0;i<num.length;i++){
    for(var j=0;j<num[i].length;j++){
        document.write(num[i][j]);
    }
}
var num=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];
for(var i=0;i<num.length;i++){
    for(var j=0;j<num[i].length;j++){
        document.write('i:'+i+',j:'+j);
        document.write("<br/>");
    }
}

document.write("<br/>");
//class模板
class Phone{//通常模板名會用大寫
    constructor(num,year,is_waterproof){
        this.num=num;
        this.year=year;
        this.is_waterproof=is_waterproof;
    }
    phone_age(){//中間不是用點隔開
        return 2021-this.year;
    }
}
var p1=new Phone('123',2020,false);
var p2=new Phone('245',2019,true);
document.write(p2.phone_age());
document.write("<br/>");
document.write(p2.num);

document.write("<br/>");
//取的html元素
var h1=document.getElementById('header');
h1.innerText='小黑',
h1.style.backgroundColor='red';
var link=document.getElementById('link');
link.href='https://www.youtube.com/watch?v=yZwlW5INhgk';

//event listener監聽

var btn=document.getElementById('btn');
btn.addEventListener("click",function(){
    this.innerText=('案啥');
    this.style.color='red';
    
})//按鈕文字換1

function handle_click(element){
    // alert("別案");
    element.innerText=":0";
    element.style.color='red';
}//按鈕文字換2

var img=document.getElementById('img')
img.addEventListener("mouseover",function(){
    this.src="南山部長3.png";
})
img.addEventListener('mouseout',function(){
    this.src='南山部長.png';
})//更換圖片


