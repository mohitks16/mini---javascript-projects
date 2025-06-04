let boxes = document.querySelectorAll(".box");
        let resetBtn = document.querySelector("#reset-btn");
        
        const winPatterns = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8],
     ];
        let turnO = true;
     boxes.forEach((box)=>{
        box.addEventListener('click',() =>{
            if(turnO == true){             
                box.innerText = 'O';
                turnO = false; 
            }else{
                box.innerText = 'X';
                turnO = true ;
            }
          box.disabled = true ; 
          checkWinner();
        });
     });
     const checkWinner = ()=>{
        for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != ""&& pos2Val != "" && pos3Val != "" ){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                  document.querySelector("#msg").innerHTML = document.querySelector("#msg").innerHTML = `<h2 style="color: gold; font-size: 28px; font-weight: bold; text-align: center; background: black; padding: 10px; border-radius: 8px;">🎉 Winner is ${pos1Val}! 🎉</h2>`;
                  return ;
                }
            }
        }
     }
    resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""; 
        box.disabled = false;
        
    });
    document.querySelector("#msg").innerText = "" ;
});