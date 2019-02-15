let $buttonMenu = document.querySelector(".button-toggle");

$buttonMenu.addEventListener("", function(){
    if($buttonMenu.contains == "X"){
        $buttonMenu.innerHTML = "&quiv;"
    }else{
        $buttonMenu.innerHTML = "X";
    }
});