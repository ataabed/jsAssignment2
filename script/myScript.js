
var array_qoute=[];
array_qoute.push({owner:"― Oscar Wilde",qoute:'Be yourself; everyone else is already taken.'});
array_qoute.push({owner:"― Marilyn Monroe",qoute:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best"});
array_qoute.push({owner:"― Albert Einstein",qoute:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."});
array_qoute.push({owner:"― Frank Zappa",qoute:"So many books, so little time."});
array_qoute.push({owner:"― Marcus Tullius Cicero",qoute:"A room without books is like a body without a soul."});

array_qoute.push({owner:"― Bernard M. Baruch"
,qoute:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."});


array_qoute.push({owner:"― William W. Purkey"
,qoute:`You've gotta dance like there's nobody watching,Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth`});

array_qoute.push({owner:"― Dr. Seuss"
,qoute:`You know you're in love when you can't fall asleep because reality is finally better than your dreams.`});

array_qoute.push({owner:"― Mae West"
,qoute:`You only live once, but if you do it right, once is enough.`});
array_qoute.push({owner:"― Mahatma Gandhi"
,qoute:`Be the change that you wish to see in the world.`});
array_qoute.push({owner:"― Robert Frost"
,qoute:`In three words I can sum up everything I've learned about life: it goes on.`});

var qouteOwner=document.getElementById("qouteOwner");
var qouteText=document.getElementById('qouteText');
qouteOwner.innerHTML="";
qouteText.innerHTML="";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var min_index=0;
var max_index=array_qoute.length-1;

var current_index;
function getQoute()
{
    
var i =getRndInteger(min_index,max_index);    

function change_qoute(i)
{
    current_index=i;
    qouteOwner.innerHTML=array_qoute[i].owner;
 qouteText.innerHTML=array_qoute[i].qoute;
}
//alert("i=" +i +"  current index= "+current_index)
if(isNaN(current_index)==true || current_index==undefined)
{
/*    current_index=i;
   qouteOwner.innerHTML=array_qoute[i].owner;
qouteText.innerHTML=array_qoute[i].qoute; */
change_qoute(i);
return 0;
}
 if(current_index==i)
{
    i =getRndInteger(min_index,max_index); 
 /*    current_index=i; 
    qouteOwner.innerHTML=array_qoute[i].owner;
    qouteText.innerHTML=array_qoute[i].qoute; */
    change_qoute(i);
    return 0;
}
else
{
   /*  current_index=i;
    qouteOwner.innerHTML=array_qoute[i].owner;
 qouteText.innerHTML=array_qoute[i].qoute; */
 change_qoute(i);
 return 0;
}



}