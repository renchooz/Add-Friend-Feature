var istatus = document.querySelector("h5")
var addfrnd = document.querySelector("#add")
var num = 0


addfrnd.addEventListener("click",function(){
    if(num==0){  
        istatus.innerHTML = "FRIEND"
        istatus.style.color = "green"
        addfrnd.innerHTML = "Remove Friend"
        addfrnd.style.background = "red"
        num = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addfrnd.innerHTML= "Add Friend"
        addfrnd.style.background = "Green"
        num = 0

    }
})
