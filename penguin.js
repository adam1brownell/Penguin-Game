var shuffle = function (myArray) {
    "use strict";
    var currentIndex = myArray.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

    // And swap it with the current element.
        temporaryValue = myArray[currentIndex];
        myArray[currentIndex] = myArray[randomIndex];
        myArray[randomIndex] = temporaryValue;
    }

    return myArray;
};


$(document).ready(function () {
    //If Yeti is clicked RIP
    "use strict";
    $(".yeti").mousedown(function () {
        alert("Yaaaarrrr!");
    });
    //Hide game + playagain before game starts
    $(".thePenguins").hide();
    $("#playAgain").hide();
    
    //Click to Play
    $("#play").click(function () {
        
        //Hide Button
        $("#playSpace").hide();
        
        //Shuffle and add id
        $(".thePenguins").fadeToggle(function () {
            
            /***** 
            
            Function Doesn't work just yet- come back to it:
            
            
            var i, pengArray = shuffle(["one", "two", "three", "four", "five", "six", "seven", "eight", "yeti"]);
            //$(".penguin").removeAttr("id");
            for (i = 0; i < pengArray.length; i += 1) {
                $(".thePenguins div:nth-child(i)").removeAttr("id");
            }
            *******/
        });
        //$(".penguin").removeAttr("id");
    });
    
    
});