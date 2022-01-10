const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber(){
  return Math.floor(Math.random()*hex.length);
}
let count=0;
let value=document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
          let hexvar="#";
          for(let i=0;i<6;i++){
            hexvar+=hex[getRandomNumber()];
            value.style.color = hexvar;
             }
          count--;}
         else if (styles.contains("increase")) {
               let hexvar="#";
                for(let i=0;i<6;i++){
              hexvar+=hex[getRandomNumber()];
              value.style.color = hexvar;
               }  
               count++;
          } else {
            count = 0;
          }
          if (count === 0) {
            value.style.color = "#000";
          }

          value.textContent = count;
    });
});