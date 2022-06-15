var card = document.getElementById('idCard');


function changeBgImage(){
    
    document.getElementById("idCard").style.backgroundImage = "url('./img/backgroundCard.jpg')";  
}


function changeBgColor(){
     document.getElementById("idCard").style.backgroundColor = "#000";
}
 

card.addEventListener("mouseover", () =>{

    changeBgImage();
});
 


card.addEventListener("mouseout", () => {
       
    document.getElementById("idCard").style.backgroundImage = "none";

    changeBgColor();
})