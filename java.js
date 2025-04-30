var count = 0 ;
function increment(){
    count = count + 1 ;
    if (count>20) 
        count = count + 1 ;
       if (count>30 )
        count = count + 0.5 ;

document.getElementById("count").innerHTML=count ;
}
 var count= 0 ;
function decrement(){
    if (count>0)
    count = count - 1;
if (count<=40 && count>=30)
    count= count -1.5;
if (count<=30 && count>=10)
    count= count-1

   
    


document.getElementById("count").innerHTML=count ;
}

var count = 0 ;
function reset(){
    count = 0 ;

document.getElementById("count").innerHTML=count ;
}
