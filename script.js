var result = document.getElementById("result");
var showR = document.getElementById("show");
var info = document.getElementById("par");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var nagitoScore = 0;
var chiakiScore = 0;
var byakuyaScore = 0;
var tokoScore = 0;
var kyokoScore = 0;
var koichiScore = 0;
var monokumaScore = 0;
var questionCount = 0;


q1a1.addEventListener("click", nagito);
q1a2.addEventListener("click", koichi);
q1a3.addEventListener("click", toko);
q1a4.addEventListener("click", monokuma);

q2a1.addEventListener("click", nagito);
q2a2.addEventListener("click", koichi);
q2a3.addEventListener("click", byakuya);
q2a4.addEventListener("click", chiaki);

q3a1.addEventListener("click", kyoko);
q3a2.addEventListener("click", toko);
q3a3.addEventListener("click", byakuya);
q3a4.addEventListener("click", chiaki);

q4a1.addEventListener("click", monokuma);
q4a2.addEventListener("click", kyoko);
q4a3.addEventListener("click", toko);
q4a4.addEventListener("click", nagito);

q5a1.addEventListener("click", koichi);
q5a2.addEventListener("click", chiaki);
q5a3.addEventListener("click", monokuma);
q5a4.addEventListener("click", byakuya);

q6a1.addEventListener("click", koichi);
q6a2.addEventListener("click", byakuya);
q6a3.addEventListener("click", chiaki);
q6a4.addEventListener("click", nagito);

q7a1.addEventListener("click", kyoko);
q7a2.addEventListener("click", koichi);
q7a3.addEventListener("click", monokuma);
q7a4.addEventListener("click", chiaki);

q8a1.addEventListener("click", nagito);
q8a2.addEventListener("click", toko);
q8a3.addEventListener("click", byakuya);
q8a4.addEventListener("click", monokuma);

q9a1.addEventListener("click", kyoko);
q9a2.addEventListener("click", noScore);
q9a3.addEventListener("click", kyoko);
q9a4.addEventListener("click", toko);



/*
q1a1.addEventListener("click", changeq1a1);
q1a2.addEventListener("click", changeq1a2);
q1a3.addEventListener("click", changeq1a3);
q1a4.addEventListener("click", changeq1a4);

q2a1.addEventListener("click", changeq2a1);
q2a2.addEventListener("click", changeq2a2);
q2a3.addEventListener("click", changeq2a3);
q2a4.addEventListener("click", changeq2a4);

q3a1.addEventListener("click", changeq3a1);
q3a2.addEventListener("click", changeq3a2);
q3a3.addEventListener("click", changeq3a3);
q3a4.addEventListener("click", changeq3a4);

q4a1.addEventListener("click", changeq4a1);
q4a2.addEventListener("click", changeq4a2);
q4a3.addEventListener("click", changeq4a3);
q4a4.addEventListener("click", changeq4a4);

q5a1.addEventListener("click", changeq5a1);
q5a2.addEventListener("click", changeq5a2);
q5a3.addEventListener("click", changeq5a3);
q5a4.addEventListener("click", changeq5a4);

q6a1.addEventListener("click", changeq6a1);
q6a2.addEventListener("click", changeq6a2);
q6a3.addEventListener("click", changeq6a3);
q6a4.addEventListener("click", changeq6a4);

q7a1.addEventListener("click", changeq7a1);
q7a2.addEventListener("click", changeq7a2);
q7a3.addEventListener("click", changeq7a3);
q7a4.addEventListener("click", changeq7a4);

q8a1.addEventListener("click", changeq8a1);
q8a2.addEventListener("click", changeq8a2);
q8a3.addEventListener("click", changeq8a3);
q8a4.addEventListener("click", changeq8a4);

q9a1.addEventListener("click", changeq9a1);
q9a2.addEventListener("click", changeq9a2);
q9a3.addEventListener("click", changeq9a3);
q9a4.addEventListener("click", changeq9a4);


function changeq1a1()
{
  q1a1.style.backgroundColor = 'lightblue';
  nagito();
}
function changeq1a2()
{
  q1a2.style.backgroundColor = 'lightblue';
}
function changeq1a3()
{
  q1a3.style.backgroundColor = 'lightblue';
}
function changeq1a4()
{
  q1a4.style.backgroundColor = 'lightblue';
}

function changeq2a1()
{
  q2a1.style.backgroundColor = 'lightblue';
}
function changeq2a2()
{
  q2a2.style.backgroundColor = 'lightblue';
}
function changeq2a3()
{
  q2a3.style.backgroundColor = 'lightblue';
}
function changeq2a4()
{
  q2a4.style.backgroundColor = 'lightblue';
}

function changeq3a1()
{
  q3a1.style.backgroundColor = 'lightblue';
}
function changeq3a2()
{
  q3a2.style.backgroundColor = 'lightblue';
}
function changeq3a3()
{
  q3a3.style.backgroundColor = 'lightblue';
}
function changeq3a4()
{
  q3a4.style.backgroundColor = 'lightblue';
}

function changeq4a1()
{
  q4a1.style.backgroundColor = 'lightblue';
}
function changeq4a2()
{
  q4a2.style.backgroundColor = 'lightblue';
}
function changeq4a3()
{
  q4a3.style.backgroundColor = 'lightblue';
}
function changeq4a4()
{
  q4a4.style.backgroundColor = 'lightblue';
}

function changeq5a1()
{
  q5a1.style.backgroundColor = 'lightblue';
}
function changeq5a2()
{
  q5a2.style.backgroundColor = 'lightblue';
}
function changeq5a3()
{
  q5a3.style.backgroundColor = 'lightblue';
}
function changeq5a4()
{
  q5a4.style.backgroundColor = 'lightblue';
}


function changeq6a1()
{
  q6a1.style.backgroundColor = 'lightblue';
}
function changeq6a2()
{
  q6a2.style.backgroundColor = 'lightblue';
}
function changeq6a3()
{
  q6a3.style.backgroundColor = 'lightblue';
}
function changeq6a4()
{
  q6a4.style.backgroundColor = 'lightblue';
}

function changeq7a1()
{
  q7a1.style.backgroundColor = 'lightblue';
}
function changeq6a2()
{
  q7a2.style.backgroundColor = 'lightblue';
}
function changeq6a3()
{
  q7a3.style.backgroundColor = 'lightblue';
}
function changeq6a4()
{
  q7a4.style.backgroundColor = 'lightblue';
}

function changeq8a1()
{
  q8a1.style.backgroundColor = 'lightblue';
}
function changeq8a2()
{
  q8a2.style.backgroundColor = 'lightblue';
}
function changeq8a3()
{
  q8a3.style.backgroundColor = 'lightblue';
}
function changeq8a4()
{
  q8a4.style.backgroundColor = 'lightblue';
}


function changeq9a1()
{
  q9a1.style.backgroundColor = 'lightblue';
}
function changeq9a2()
{
  q9a2.style.backgroundColor = 'lightblue';
}
function changeq9a3()
{
  q9a3.style.backgroundColor = 'lightblue';
}
function changeq9a4()
{
  q9a4.style.backgroundColor = 'lightblue';
}*/
  






function nagito ()
{
  nagitoScore = nagitoScore + 1;
  questionCount = questionCount + 1;
  console.log("nagito : " + nagitoScore + "   question : " + questionCount)

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function chiaki ()
{
  chiakiScore = chiakiScore + 1;
  questionCount = questionCount + 1;
  console.log("chiaki : " + chiakiScore + "   question : " + questionCount)
  
  if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function toko ()
{
  tokoScore = tokoScore + 1;
  questionCount = questionCount + 1;
  console.log("toko : " + tokoScore + "   question : " + questionCount)

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function monokuma ()
{
  monokumaScore = monokumaScore + 1;
  questionCount = questionCount + 1;
  console.log("monokuma : " + monokumaScore + "   question : " + questionCount)

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function kyoko ()
{
  kyokoScore = kyokoScore + 1;
  questionCount = questionCount + 1;
  console.log("kyoko : " + kyokoScore + "   question : " + questionCount)

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function koichi()
{
    koichiScore = koichiScore + 1;
    questionCount = questionCount + 1;
    console.log("koichi : " + koichiScore + "   question : " + questionCount)

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function byakuya ()
{
  byakuyaScore = byakuyaScore + 1;
  questionCount = questionCount + 1;
  console.log("byakuya : " + byakuyaScore + "   question : " + questionCount);

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function noScore ()
{
  questionCount = questionCount + 1;
  console.log("no score");

    if (questionCount == 9)
  {
    console.log("The quiz is done!")
      end();
  }
}

function end()
  {
    showR.addEventListener("click", end2);
  }

function end2()
{
      if (nagitoScore > byakuyaScore && nagitoScore > koichiScore && nagitoScore >  monokumaScore && nagitoScore > chiakiScore && nagitoScore> kyokoScore && nagitoScore > tokoScore)
        {
          result.innerHTML = "You are Nagito Komaeda!";
          info.innerHTML = "Description : You're a carefree yet strange person. You don't have a high self-esteem, but you love to see the people around you enjoying themselves even if you're not. You love to encourage people to do their best, and even though you see the worst in every situation, you still try and find the good in those situations."; 
          console.log ("You are Nagito!");
          console.log ("well done");

          
        } else if 
          (byakuyaScore > nagitoScore && byakuyaScore > koichiScore && byakuyaScore > monokumaScore && byakuyaScore > chiakiScore && byakuyaScore > kyokoScore && byakuyaScore > tokoScore)
        {
          result.innerHTML = "You are Byakuya Togami!";
          info.innerHTML = "Description : You're a charismatic, confident, and arrogant person who sees themselves as superior. You have a cold/blunt way of talking to people in an attempt to manipulate them.";
          console.log ("You are Byakuya!");
          console.log ("well done");
 
        } else if 
          (koichiScore > nagitoScore && koichiScore > byakuyaScore && koichiScore > monokumaScore && koichiScore > chiakiScore && koichiScore > kyokoScore && koichiScore > tokoScore)
        {
           result.innerHTML = "You are Koichi Ouma!";
           info.innerHTML = "Description : Does a compulsive liar sound familiar to you? Based on your results, your a manipulative liar who says whatever you're feeling whenever you want, even if it hurts the people around them.";
          console.log ("You are Koichi!");
          console.log ("well done");

        } else if (monokumaScore > byakuyaScore && monokumaScore > koichiScore && monokumaScore >  nagitoScore && monokumaScore > chiakiScore && monokumaScore > kyokoScore && monokumaScore > tokoScore) 
        {
          result.innerHTML = "You are Monokuma!";
          info.innerHTML = "Description : Your cheerful and kind at first glance, but you're sinister underneath. You say and do whatever you want whenever you want without the fear that someone will stop you. And if they try to stop you, you have something coming for them. On top of that, you're a narcissistic sociopath. How fun.";
          console.log("You are Monokuma");
          console.log ("well done");
          
        }
        
        else if 
          (chiakiScore > nagitoScore && chiakiScore > byakuyaScore && chiakiScore > monokumaScore && chiakiScore > koichiScore && chiakiScore > kyokoScore && chiakiScore > tokoScore)
        {
          result.innerHTML = "You are Chiaki Nanami!";
          info.innerHTML = "Description : You're a quiet and shy person when people first meet you, but as you get comfortable with them you open up. You have a love for games and enjoy learning new things. On top of that, you would rather stay at home in your bed than go outside. ";
          console.log ("You are Chiaki!");
          console.log ("well done");
          
        } else if (kyokoScore > nagitoScore && kyokoScore > byakuyaScore && kyokoScore > monokumaScore && kyokoScore > koichiScore && kyokoScore > chiakiScore && kyokoScore > tokoScore)
        {
          result.innerHTML = "You are Kyoko Kirigiri!";
          info.innerHTML = "Description : A smart and mysterious being you are. You tend to hide your feelings as you see no point in people knowing them, and you are unfazed--at least that's how you seem--by extreme events.";
          console.log ("You are Kyoko!");
          console.log ("well done");

          
        } else if (tokoScore > nagitoScore && tokoScore > byakuyaScore && tokoScore > monokumaScore && tokoScore > koichiScore && tokoScore > chiakiScore && tokoScore > kyokoScore)
        {
          result.innerHTML = "You are Toko Fukawa!";
          info.innerHTML = "Description : You're socially anxious and don't like meeting new people. You are what people see as an 'outcast' as you try and keep your distance from people. However, underneath all that, you're a smart individual.";
          console.log ("You are Toko!");
          console.log ("well done");
          
        } else 
        {
          result.innerHTML = "You are Hajime Hinata!";
          info.innerHTML = "Description : You're seen as a doubtful person, but in reality you're just a realistic. You're skeptical and tend to worry more than others, but your worries are usually understandable.";
          console.log ("You are Hajime!");
          console.log ("well done"); 
        }
}

restart.addEventListener("click", restartquiz);

function restartquiz()
{
  result.innerHTML = "You are...";
  info.innerHTML = "Description :";
  nagitoScore = 0;
  chiakiScore = 0;
  byakuyaScore = 0;
  tokoScore = 0;
  kyokoScore = 0;
  koichiScore = 0;
  monokumaScore = 0;
  questionCount = 0;
  enable();
  console.log(nagitoScore);
}

q1a1.addEventListener("click", disabledq1);
q1a2.addEventListener("click", disabledq1);
q1a3.addEventListener("click", disabledq1);
q1a4.addEventListener("click", disabledq1);

q2a1.addEventListener("click", disabledq2);
q2a2.addEventListener("click", disabledq2);
q2a3.addEventListener("click", disabledq2);
q2a4.addEventListener("click", disabledq2);

q3a1.addEventListener("click", disabledq3);
q3a2.addEventListener("click", disabledq3);
q3a3.addEventListener("click", disabledq3);
q3a4.addEventListener("click", disabledq3);

q4a1.addEventListener("click", disabledq4);
q4a2.addEventListener("click", disabledq4);
q4a3.addEventListener("click", disabledq4);
q4a4.addEventListener("click", disabledq4);

q5a1.addEventListener("click", disabledq5);
q5a2.addEventListener("click", disabledq5);
q5a3.addEventListener("click", disabledq5);
q5a4.addEventListener("click", disabledq5);

q6a1.addEventListener("click", disabledq6);
q6a2.addEventListener("click", disabledq6);
q6a3.addEventListener("click", disabledq6);
q6a4.addEventListener("click", disabledq6);

q7a1.addEventListener("click", disabledq7);
q7a2.addEventListener("click", disabledq7);
q7a3.addEventListener("click", disabledq7);
q7a4.addEventListener("click", disabledq7);

q8a1.addEventListener("click", disabledq8);
q8a2.addEventListener("click", disabledq8);
q8a3.addEventListener("click", disabledq8);
q8a4.addEventListener("click", disabledq8);

q9a1.addEventListener("click", disabledq9);
q9a2.addEventListener("click", disabledq9);
q9a3.addEventListener("click", disabledq9);
q9a4.addEventListener("click", disabledq9);

function disabledq1()
{
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disabledq2()
{
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disabledq3()
{
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disabledq4()
{
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

function disabledq6()
{
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
}

function disabledq5()
{
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function disabledq7()
{
  q7a1.disabled = true;
  q7a2.disabled = true;
  q7a3.disabled = true;
  q7a4.disabled = true;
}

function disabledq8()
{
  q8a1.disabled = true;
  q8a2.disabled = true;
  q8a3.disabled = true;
  q8a4.disabled = true;
}

function disabledq9()
{
  q9a1.disabled = true;
  q9a2.disabled = true;
  q9a3.disabled = true;
  q9a4.disabled = true;
}

function enable()
{
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;

  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;

  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;

  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
  q7a4.disabled = false;

  q8a1.disabled = false;
  q8a2.disabled = false;
  q8a3.disabled = false;
  q8a4.disabled = false;

  q9a1.disabled = false;
  q9a2.disabled = false;
  q9a3.disabled = false;
  q9a4.disabled = false;
}
