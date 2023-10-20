function displayQuiz(){
    const disp = document.getElementById('quiz');
    const strt = document.getElementById('home');
    n=60;
    strt.style.display ='none';
    disp.style.display ='flex';
}
//scoring function

function result(){
    var score=0;
    for(let i=1; i<=5; i++){
        var val = document.getElementById("correct"+i).value;
        if (document.getElementById("correct"+i).checked)
        {
            score++;
            document.getElementById("ans"+i).innerHTML="Answer is correct!!!";
            document.getElementById("ans"+i).style.color="green";
            document.getElementById("ans"+i).style.fontSize="20px";
        }
        else{
            document.getElementById("ans"+i).innerHTML=`Answer is incorrect!!! <br/><span>Correct Answer is: ${val}</span>`;
            document.getElementById("ans"+i).style.color="red";
            document.getElementById("ans"+i).style.fontSize="20px";
        }
    }
    document.getElementById("scores").innerHTML = "Your Score is "+score;
    document.getElementById("scores").style.fontSize="20px";
    document.getElementById("scores").style.fontWeight="bolder";
    
}
//Timer function

const Time=setInterval(Timer,1000);
let n=60;
function Timer(){
    if (n>=0){
    document.getElementById("num").innerHTML= n;
    document.getElementById("num").style.color="Black";
    document.getElementById("num").style.fontSize="50px";
    document.getElementById("num").style.fontWeight="bolder";
    n--;
    }
    else{
        btn.style.display = 'none'; 
        result();
    }
}
//Reset function

function reset(){
    location.reload();
}
//disappearing button
const btn = document.getElementById('stop');
btn.addEventListener('click', () => {
  btn.style.display = 'none';
  num.style.display = 'none';
});
