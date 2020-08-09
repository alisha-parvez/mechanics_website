let options=document.getElementsByClassName('option_button');
let check_btn=document.getElementById("check_button");
let answer="Ra + Rb = P";
let result_section=document.getElementById("result_section");

function unselect_All_Options()
{
    for(let i=0;i<options.length;i++)
    {
      options[i].classList.remove("selected");
      options[i].style.background="linear-gradient(90deg,#dedede,#bababa,#9e9e9e)";
    }
    result_section.style.display="none";
}

function select_Option(option)
{
    unselect_All_Options();
    option.classList.add("selected");
    option.style.background="linear-gradient(90deg,#f5cb42,#f7da48,#f7e648)";
}

//checks whether option is correct and displays the message

function check()
{
  let selected_option=document.getElementsByClassName("selected")[0];
  if(selected_option.textContent==answer)
  {
    selected_option.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
    result_section.innerHTML="That's Correct!<br>Congratulations...You earned a star<img src='../../res/star_gold.png' class='star'>";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#16c75d,#2ded47,#2ded63,#2ded7a)";
  }
  else
  {
    selected_option.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
    result_section.innerHTML="Sorry! That's incorrect.<br> Try again or click on the hint or solution buttons";
    result_section.style.display="grid";
    result_section.style.background="linear-gradient(90deg,#d60909,#e82020,#fc4242,#fc5656)";
  }
}

for(let i=0;i<options.length;i++)
{
  options[i].addEventListener("click",function(){select_Option(options[i]);});
}

check_btn.addEventListener("click",check);
