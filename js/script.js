$(document).ready(function(){
    $("form#first").submit(function(e){

            const name = $("input#name").val();
            const drink = $("input#Drink").val();
            const food = $("input#Food").val();
            const car = $("input#Car").val();
            const word = $("input#Word").val();
            const fruit = $("input#Fruit").val();
            

            let Array = [name, drink, food, car, word, fruit,];

               let firstElement = Array[1];
               let secondElement = Array[2];
               let thirdElement = Array[3];
          
            let newArr = ["Your favorite things are:"]
                newArr.push(firstElement);
                newArr.push(secondElement);
                newArr.push(thirdElement);
            
                let Elements = "";
                newArr.forEach(function(newArr){
                    Elements += "<li>" + newArr +"</li>";
                });
            
          $("#list").html(Elements);
        e.preventDefault();
    });


});