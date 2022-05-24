function changeBox1(parameter){
    var BoxOne = document.getElementById("BoxOne");
    
    var color ;
    if(parameter === 'bgColor'){
        color = prompt("Enter the Background Color");
        BoxOne.style.backgroundColor = color;
        console.log(color);
    }
    else  if(parameter === 'textColor')
    {
        color = prompt("Enter the Color of the Text");
        BoxOne.style.color = color;
        console.log(color)
    }
    

   
}
function actionOnImg(action){
var boxTwo = document.getElementById('BoxTwo');
// console.log(boxTwo.firstChild);
if(action ==='hide'){
    boxTwo.style.display = 'none';
}
else if(action ==='show')
{
    boxTwo.style.display = 'inline';
} 
else if(action === 'increaseSize')
{
    boxTwo.style.width = '500px ';
    boxTwo.style.height = '550px ';
}
else if(action === 'decreaseSize'){
    boxTwo.style.width = '250px ';
    boxTwo.style.height = '300px ';
}
else return;
}
function imageState(state , e)
{
        if(state =='on')
        {
            e.src = './images/bulbOn.png';
        }
        else {
            e.src = './images/bulboff.png'
        }
}

function paraColor(){
    var box4 = document.getElementById('BoxFour');
    var p = BoxFour.getElementsByTagName('p');
    var color;
    for(var i = 0 ; i <p.length; i++)
    {
color = prompt('Enter color name for the '+(i+1)+' paragraph');
p[i].style.color = color;
    }
   

}
function firstLastPara(){
var BoxFive = document.getElementById('BoxFive');

var firstPara = BoxFive.firstChild.nextSibling.firstChild;
var lastPara = BoxFive.firstChild.nextSibling.lastChild;
var clr ;
for(var i =1 ; i <= 2; i++)
{
    if(i == 1)
    {
        clr = prompt("Enter the color of the First Parargraph");
        firstPara.style.color = clr  
      }
      else
      {
        clr = prompt("Enter the color of the Last Parargraph")
          lastPara.style.color = clr;
      }
   
}
// console.log(firstPara);
// console.log(lastPara);

}