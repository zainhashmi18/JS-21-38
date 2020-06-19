 // Chapter 20-25


// Task No 1
var fName=prompt("Enter First Name: ");
var lName=prompt("Enter Last Name: ");
var fullName=fName+" "+lName;
document.write("Welcome "+fullName);

// Task No 2
var favPhone=prompt("Enter Your Fav Phone Model: ");
var phoneLength=favPhone.length;
document.write("My Favourite Phone is: "+favPhone+"<br>Length of String is: "+phoneLength);

// Task No 3
var country="Pakistani";
var index=country.indexOf("n");
document.write("String "+country+"<br>index of 'n': "+index);

// Task No 4
var word="Hello World";
var ind=word.lastIndexOf("l");
document.write("String "+word+"<br>index of 'n': "+ind);

// Task No 5
var country="Pakistani";
var index=country.charAt(3);
document.write("String "+country+"<br>index of 3: "+index);


// Task No 6
var fName=prompt("Enter First Name: ");
var lName=prompt("Enter Last Name: ");
var fullName=fName.concat(" ",lName);
document.write("Welcome "+fullName);

// Task No 7
var city="Hyderabad";
var repCity=city.replace("Hyder","Islam");
document.write("City: "+city+"<br>After Replacement: "+repCity);

// Task No 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repAll=message.replaceAll("and","&");
document.write(repAll);

// Task No 9
var strNum="472";
var dType=typeof strNum;
var connum=Number(strNum);
var dType2=typeof connum;
document.write("Value: "+strNum+"<br>Type: "+dType+"<br>Value: "+connum+"<br>Type: "+dType2);

// Task No 10
var eat=prompt("Enter a Word: ");
var changeCase=eat.toUpperCase();
document.write("User Input: "+eat+"<br>Uppercase: "+changeCase)

// Task No 11
var eat=prompt("Enter a Word: ");
var changeCase0= eat.charAt(0);
var changeCase=changeCase0.toUpperCase();
var changeLower=eat.slice(1);
var changeLower0=changeLower.toLowerCase()
document.write("User Input: "+eat+"<br>Uppercase: "+changeCase+changeLower0);

// Task No 12
var varNum=35.36;
var contNum=varNum.toString();
var rem=contNum.replace(".","")
document.write("Number: "+varNum+"<br>Result: "+rem)

// Task No 13
var userName=prompt("Enter Username: ");
var reg= String.fromCharCode(33,44,46,64);
for(var i=0;i<=3;i++){
    var n=reg.charAt(i)
    var a=userName.includes(n);
if(a==true){
    document.write("Please enter a valid username ")
    break;
}
}
if(a!=true){
    document.write("All Fine")
}

// Task No 14
var arrA=["cake","apple pie","cookie","chips","patties"]
var usinp=prompt("search: ");
for(var i=0; i<=20;i++){
    if(usinp===arrA[i]){
        document.write(arrA[i]+ " is availbe at index "+i+" in our bakery<br>")
        break;
    }
}
if(usinp!=arrA[i]){
    document.write(" We are sorry."+usinp+" is not available in our bakery")
}

// Task No 15
var pass=prompt("Enter Password: ");
var rpass=pass.slice(0,1);
var lenPass=pass.length;
for(var i=0;i<=9;i++){
    if(rpass==i){
        document.write("Password can not begin with number.<br>")
        break;
    }
}
if(lenPass<6){
    document.write("Please Enter a valid Password")
}
else{
    document.write("Password Successfully Set")
}

// Task No 16
var university = "University of Karachi";
var newFunc=university.split("");
for(var i=0;i<=20;i++){
    document.write(newFunc[i]+"<br>");
}

// Task No 17
var usInput=prompt("input: ");
var res=usInput.substr(-1);
document.write("Userinput: "+usInput+"<br>Last Character of User Input "+res)

// Task No 18
var word="the quick brown fox jumps over the lazy dog"
document.write(word.match(/the/g).length)



// chapter 26-30

// Task No 1
var userInp=+prompt("Enter a Positive Number: ");
var round=Math.round(userInp)
var floor=Math.floor(userInp);
var ceil=Math.ceil(userInp);
if(userInp>0){
    document.write("Number: "+userInp+"<br>Round Off  Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value: "+ceil)
}
else{
    document.write("Please Enter a Positive Number.")
}

// Task No 2
var userInp=+prompt("Enter a Positive Number: ");
var round=Math.round(userInp)
var floor=Math.floor(userInp);
var ceil=Math.ceil(userInp);
if(userInp<0){
    document.write("Number: "+userInp+"<br>Round Off  Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value: "+ceil)
}
else{
    document.write("Please Enter a Negative Number.")
}

// Task No 3
var userInp1=+prompt("Enter a Number: ");
var obs=Math.abs(userInp1);
document.write("The absolute value of "+userInp1+" is "+obs);

// Task No 4
var dice=Math.floor((Math.random()*6)+1);
document.write("Random Dice value is: "+dice);

// Task No 5
var dice=Math.floor((Math.random()*2)+1);
if(dice===1){
    document.write(dice+"<br>Random Coin value is: Heads");
}
else{
    document.write(dice+"<br>Random Coin value is: Tails");
}


// Task No 6
var numram=Math.ceil((Math.random()*100));
document.write("Random number between 1and 100: "+numram)

// Task No 7
var userWeight=prompt("Enter Your Weight in Kilograms: ");
var brek=userWeight.slice(0,3);
var changeWeight=Number(brek);
document.write("The Weight of User is: "+changeWeight+" Kilograms")

// Task No 8
var numram=Math.ceil((Math.random()*10));
var useNum=+prompt("Enter a Number between 1and 10:");
if(useNum===numram){
    document.write("congratulations")
}
else{
    document.write("Better Luck Next Time")
}



// Chapter 31-34

// Task No 1
var datee=new Date();
document.write(datee);

// Task No 2
var monarr=['January','February','March','April','May','June','July','August','September','October','November','December'];
var month=new Date();
var curmonth=month.getMonth();
var monthWord=monarr[curmonth];
document.write("Current Month: "+monthWord);

// Task No 3
var d=new Date();
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var curday=d.getDay();
var dayName=dayArr[curday]
var today=dayName.slice(0,3)
document.write("Today is: "+today);

// Task No 4
var d=new Date();
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var curday=d.getDay();
var dayName=dayArr[curday]
if(dayName=="Sunday"|| dayName=="Saturday"){
    document.write("Its a Fun Day");
}
else{
    document.write("Its Not a Fun Day")
}

// Task No 5
var d=new Date();
var day=d.getDate();
if(day<16){
    document.write(day+"<br>First fifteen days of the month")
}
else{
    document.write(day+"<br>Last days of the month")
}

//Task No 6
var d=new Date();
var milli1970=d.getTime();
var min1970=(milli1970/1000)/60;
document.write("Current Date: "+d+"<br>Elapsed Miliseconds Since January 1,1970: "+milli1970+"<br>Elapsed Minutes Since January 1,1970: "+min1970);

// Task no 7
var d=new Date();
var day=d.getHours();
if(day<12){
    document.write("Its AM")
}
else{
    document.write("Its PM")
}

// Task no 8
var d=new Date();
d.setMonth(11);
d.setDate(31);
document.write("Later Date: "+d);

// Task no 9
var a=new Date();
a.getDate()
var d=new Date();
d.setMonth(5);
d.setDate(18);
document.write(d.getDate()-a.getDate()+" Days Have Passed Since 1st Ramadan 2020");

// Task no 10
var a=new Date()
var d=new Date("January 1, 2020 12:00:00 GMT+00:00");
var n=a.getTime()-d.getTime();
document.write("Our refference Date "+a+",<br>"+n/1000+" Seconds Has Passed Since Beginning of 2020");

// Task No 11
var a=new Date();
var d=new Date();
d.setHours(d.getHours()+1)
document.write("Current Date: "+a+"<br>1 Hour Ago, it was "+d);

// Task No 12
var a=new Date();
var d=new Date();
d.setFullYear(d.getFullYear()-100)
document.write("Current Date: "+a+"<br>100 Year Back, it was "+d);

// Task No 13
var dob=+prompt("Enter Year Of Birth: ");
var currDate=new Date();
currDate=currDate.getFullYear();
var res=currDate-dob;
document.write("Your Age is: "+res+"<br>Your Dob is: "+dob);

// Task No 14
var cusName=prompt("Enter Your Name: ");
var curMonth=prompt("Current Month: ");
var numUnit=+prompt("Number Of Units: ");
var unitCharge=+prompt("Unit Cost: ");
var amountDue=unitCharge*numUnit;
unitCharge=unitCharge.toFixed(2);
numUnit=numUnit.toFixed(2);
var lateCharge=350;
document.write("<h1><b>K Electric Bill</b></h1><br>Customer Name: "+cusName+"<br>Month: "+curMonth+"<br>Number Of Units: "+numUnit+"<br>Charges Per Unit: "+unitCharge+"<br><br>Net Amount Payable (within Due Date): "+amountDue.toFixed(2)+"<br> Late Payment Surcharge: "+lateCharge+"<br>Gross Amount Payable (after Due Date): "+(amountDue+lateCharge).toFixed(2))



// Chapter 35-38

// Task No 1
function display(){
    document.write(new Date());
}
display();

// Task No 2
function greeting(fname,lname){
    document.write("Welcome "+fname+" "+lname)
}
greeting(prompt("Enter First Name: "),prompt("Enter Last Name: "));

// Task No 3
function Addition(num1,num2){
   return num1+num2;
}
var n=Addition(+prompt("Enter num 1: "),+prompt("Enter num 2: "));
document.write(n);

// Task No 4
function calc(num1,op,num2){
   if(op==="+"){
       return num1+num2;
   }
   else if(op==="-"){
    return num1-num2;
}
else if(op==="*"){
    return num1*num2;
}
else if(op==="/"){
    return num1/num2;
}
}
var n=calc(+prompt("Enter num 1: "),prompt("Enter Operator: "),+prompt("Enter num 2: "));
document.write(n);

// Task No 5
function sqr(num){
    return Math.pow(num,2);
}
var n=sqr(+prompt("Enter a Number and get square: "));
document.write(n);

// Task No 6
function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
document.write(factorial(5));

// Task No 7
function count(strNum,endNum){
    if(strNum>endNum){
        for(var i=strNum;i>=endNum;i--){
            document.write(i+"<br>")
        }
    }
    else{
        for(var i=strNum;i<=endNum;i++){
            document.write(i+"<br>")
        }
    }
}
count(+prompt("Starting Number: "),+prompt("Ending Number: "));

// Task No 8
function calculateHypotenuse(){

    function calculateSquare(base,prep){
        return Math.sqrt(Math.pow(base,2)+Math.pow(prep,2));
    }
    var n= calculateSquare(+prompt("Enter Base: "),+prompt("Enter Prependicular: "));
    document.write(n);
}
calculateHypotenuse();

// Task No 9
function rectangle(width,hegiht){
    var a =width*hegiht;
    document.write(a);
}
rectangle(7,5);

// Task no 10
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  alert(palindrome("mom"));

// Task No 11
function string(a) {  
    a = a.split(' ');
    for(var i = 0; i < a.length; i++){
      a[i] = a[i].split('');
      a[i][0] = a[i][0].toUpperCase(); 
      a[i] = a[i].join('');
    }
    return a.join(' ');
  }
  alert(string("the quick brown fox"));

// Task No 12
function long(str){
    var strg=str.split(" ")
        if(strg[0].length>strg[1].length && strg[0].length>strg[2].length){
            return strg[0];
        }
        else if(strg[1].length>strg[0].length && strg[1].length>strg[2].length){
            return strg[1];
        }
        else if(strg[2].length>strg[0].length && strg[2].length>strg[1].length){
            return strg[2];
        } 
}
alert(long("Web Development Tutorial"));

// Task No 13
function count(string, letter) 
{
 var letterCount = 0;
 for (var i = 0; i < string.length; i++) 
 {
    if (string.charAt(i) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
alert(count('zainhashmi', 's'));

// Task No 14
function calcCircumference(radius){
    return (2 * Math.PI *radius);
}
var n=calcCircumference(5);
document.write(n);

// Part 2

function calcArea(radius){
    return (Math.PI *Math.pow(radius,2));
}
var n=calcArea(5);
document.write(n);