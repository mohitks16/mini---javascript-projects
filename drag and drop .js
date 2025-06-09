let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
  // here lists is an array like object , which have index rather than keys storing all those divs having same class name list
    // we can convert any array like object to an ordinary array by this way --> arrayNew = [...lists]
    // now after converting an array like object to array we can use methods like .map() , .forEach() , .filter()
for(list of lists){ 
    list.addEventListener("dragstart",function(e){ 
        let selected = e.target;

        rightBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        }); 
        rightBox.addEventListener("drop" , function(e){
            rightBox.appendChild(selected);
            selected = null ; 
        })

        leftBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        }); 
        leftBox.addEventListener("drop" , function(e){
            leftBox.appendChild(selected);
            selected = null ; 
        })
    })
}

