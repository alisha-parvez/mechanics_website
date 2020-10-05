let check_btn=document.getElementById("check_button");
let result_section=document.getElementById("result_section");

//checks whether option is correct and displays the message

function check()
{
  selected_option=document.getElementById('ans_1').parentNode;
  if(document.getElementById('ans_1').checked===true)
  {

    selected_option.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    result_section.innerHTML="That's Correct!<br>Congratulations...You earned a star<img src='../../res/star_gold.png' class='star'>";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
  }
  else
  {
    result_section.innerHTML="Sorry! That's incorrect.<br> Try again or click on the hint or solution buttons";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
  }
}

check_btn.addEventListener("click",check);
