 let nameError = document.querySelector(".nameError")
    let tbody=document.querySelector("tbody")

    let test = document.querySelector(".test")

    let displayData = () => {
        let localData = JSON.parse(localStorage.getItem("wsb-164")) || []
        
        tbody.innerHTML ="" ;
        localData.forEach( (v,i)=>{
            tbody.innerHTML+=`
                <tr>
                    <td> ${i+1} </td>
                    <td>${v.name}</td>
                    <td>${v.email}</td>
                    <td>${v.number}</td>
                    <td>${v.password}</td>
                    <td> <button onclick = "deleteRow(${i})"> Delete </button> </td>
                </tr>
            `
        } )
    }
    displayData();
   


    let userForm = (event) => {
        event.preventDefault() ///stop page refresh

        let userObj = {
            "name": event.target.Uname.value,
            "email": event.target.Uemail.value,
            "number": event.target.Unumber.value,
            "password": event.target.Upassword.value,

        }


        let oldData = JSON.parse(localStorage.getItem("wsb-164")) || []

        let allData = [...oldData, userObj]

        localStorage.setItem("wsb-164", JSON.stringify(allData))

        // if(userObj.name==""){
        //    return alert("please enter name input")
        // }

        // if(userObj.email==""){
        //    return alert("please enter email input")
        // }

        // if(userObj.number==""){
        //    return alert("please enter number input")
        // }


        // if(userObj.number.length<10){
        //     return alert("please enter Correct Number Formate")
        // }

        // if(userObj.password==""){
        //    return alert("please enter password input")
        // }

        /////////////////////////////////////////////////////////////

        // if(userObj.name=="" || userObj.number=="" || userObj.password=="" || userObj.email=="" ){
        //     alert("please full fill the the inputs")
        // }

        ////////////////////////////////////////////////////////

        // if(userObj.name==""){
        //     nameError.innerHTML="Please Enter The Value"
        // }

         displayData()


    }

    // delete row

    let deleteRow = (id)=>{
           let localData = JSON.parse(localStorage.getItem("wsb-164")) || []


        let filterData = localData.filter((value,index)=>{
            if(index != id){
                return value ; 
            }
        })
        localStorage.setItem("wsb-164",JSON.stringify(filterData))

        alert("this row was deleted ")
        displayData()
        console.log(id)
    }


 
        console.log(localData)
