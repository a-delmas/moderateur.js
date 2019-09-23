// var smiley = [":)", ":)", ":D"];
// var btn = document.getElementsByClassName("btn")[0];
// var result = document.getElementById("result");
// var textarea = document.getElementById("text");
// var i = 0;

// btn.addEventListener("click", function() {
//     getElementById("textarea").value;

// });

var textarea = document.getElementById("text");
var result = document.getElementById("result");
var btn = document.getElementsByClassName("btn")[0];
var smiley = [":')", ":)", ":D"];
i = 0;

btn.addEventListener("click", function(){
    var text = textarea.value;
    
for (var i = 0; i < smiley.length ; i++) {
    while(text.indexOf(smiley[i]) != -1) 
    text = text.replace(smiley[i], "--")
};
    
    // if (document.getElementById(text) == smiley[i]) {
    //     result.innerHTML == textarea.value.replace(smiley, "--");
    // }
    
    
    result.innerHTML = text;

});
    // }
    // i++;
    // }



// textarea=textarea.replace(smiley,'--')
// console.log(textare);


//  for (i == smiley.length) {
//     if (textarea.value == smiley) {
//         console.log(smiley[i], "plop");
    


// }
// i++;
// }



// btn.addEventListener("click", function(){
//     result.value = "rest";
// });