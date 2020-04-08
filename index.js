var button = document.querySelector("button");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var naira = document.getElementById("naira");
var dollar = document.getElementById("dollar");
var enlarge = document.getElementsByClassName("design2")[0];

function variablee(){
    var Nigeria;
    var Us;
    var result;

}


function convert() {
       //calculatinng for naira to dollar (1 dollar = 367)
       
       enlarge.style.width = "150px";
       variablee();
        Nigeria = (naira.value * 367);
        dollar.value = '$' + Nigeria + ' in naira';
      
    
}

button.addEventListener("click", convert);
button2.addEventListener("click", function(){
    variablee();
    enlarge.style.width = "250px";
    Us = (naira.value / 367);
    dollar.value = '#' + Us + ' in dollar';


});
button3.addEventListener("click", function (){
    naira.value = "";
    dollar.value = "";
    enlarge.style.width = "150px";
})