let check_btn=document.getElementById("check_button");
let answer_1="0";
let answer_2="6";
let answer_3="-9";
let result_section=document.getElementById("result_section");
let input_box_1=document.getElementById("answer_box_1");
let input_box_2=document.getElementById("answer_box_2");
let input_box_3=document.getElementById("answer_box_3");

function check()
{
  let user_answer_1=input_box_1.value;
  let user_answer_2=input_box_2.value;
  let user_answer_3=input_box_3.value;

  if(user_answer_1===answer_1 && user_answer_2===answer_2 && user_answer_3===answer_3)
  {
    input_box_1.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    input_box_2.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    input_box_3.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    result_section.innerHTML="That's Correct!<br>Congratulations...You earned a star<img src='../../res/star_gold.png' class='star'>";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
  }
  else
  {
    input_box_1.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
    input_box_2.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
    input_box_3.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
    result_section.innerHTML="Sorry! That's incorrect.<br> Try again or click on the hint or solution buttons";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
  }
}

check_btn.addEventListener("click",check);
