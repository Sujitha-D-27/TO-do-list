const inputbox = document.getElementById("input-box");
const lister = document.getElementById("list");
function addtask(){
    if(inputbox.value===''){
        alert("please write some task!!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;//adding
        lister.appendChild(li);//displaying the text in container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}

lister.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
//after refresh or go backto remain the same//
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();
