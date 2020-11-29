let check_btn=document.getElementById("check_button");
let answer=51.6;
let result_section=document.getElementById("result_section");
let input_box=document.getElementById("answer_box");

function check()
{
  let user_answer=parseFloat(input_box.value);
  if(user_answer<=answer+1 && user_answer>=answer-1)
  {
    input_box.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    result_section.innerHTML="That's Correct!<br>Congratulations...You earned a star<img src='../../res/star_gold.png' class='star'>";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
  }
  else
  {
    input_box.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
    result_section.innerHTML="Sorry! That's incorrect.<br> Try again or click on the hint or solution buttons";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
  }
}

check_btn.addEventListener("click",check);
