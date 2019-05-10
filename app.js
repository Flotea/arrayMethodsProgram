window.onload = function(){
    var text = document.getElementById("addOn");
var submit = document.getElementById("submit");
var fin = document.getElementById("fin");
var list=[];
var visList = document.getElementById("list");
console.log(list);
visList.innerHTML = list;

var score = 0;



submit.addEventListener("click", function(){
    var add = text.value;
    list.push(add);
    console.log(list);
    var listA = document.createElement("LI");
    var addOn = document.createTextNode(text.value);
    listA.appendChild(addOn);
    visList.appendChild(listA);

    //visList.innerHTML = list;

});

fin.addEventListener("click", function(){
    list.shift();
    console.log(list);
    visList.removeChild(visList.childNodes[0]); 
    score ++;
    document.getElementById("score").innerHTML = "Things Done: " + score;


});


}
