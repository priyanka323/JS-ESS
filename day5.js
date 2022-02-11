//innerText - to change textual content
//console.log(document.getElementById("one").innerText);



//document.getElementById("one").innerText="hey guys";

//inner html- change html content

//document.getElementById("one").innerHTML="<h1>Heyya</h1>"

//event handling

 //   function dosomething()
 //   {
     //   console.log("hello friends");
   // }

var colors=["blue","green","red","orange","yellow"];
var i = 0;


function doSomething()
{
    document.getElementById("one").style.backgroundColour="colors[i]";
    i++;
    
    if(i>3)
    {
        i=0;
    }
  //  document.getElementById("one").style.height="500px";
  //  document.getElementById("one").innerHTML="<form></form>"
}


function changeImage()
{
    document.getElementById("image").src="img2.jpg"
}

function getValue()
{
    var data =document.getElementById("inp").value;
    console.log(data);
}

//var name=prompt("enter some data");
//console.log(name);