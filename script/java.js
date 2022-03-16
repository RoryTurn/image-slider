

$.ajax({
    type: "GET",
    url: "./json/jase.json",
    success: 
    function (response){
        var slideNow = 0;
           
            console.log(slideNow);


        function addRight(){
    
            slideNow=slideNow+1;
            console.log(slideNow);
        
            if (slideNow > 10) {
                slideNow=slideNow-11;
                console.log(slideNow);
            };
            sliderClick();
            
        };
        function addLeft(){
            slideNow=slideNow-1;
            console.log(slideNow);
            if (slideNow < 0) {
                slideNow=slideNow+12;
                console.log(slideNow);
            };
            sliderClick();
        };
        
right.addEventListener("click", addRight);
left.addEventListener("click", addLeft);

function sliderClick(){

if(slideNow >= 0){
    $("#imagedata").empty().append(
        `
        <img src=" ${response.monsterData[slideNow].pic}" class="cent_img" alt="centre image"> </img>
        `
    );

    document.getElementById("namedata").innerHTML = `${response.monsterData[slideNow].text}`;
    document.getElementById("descdata").innerHTML = `${response.monsterData[slideNow].desc}`; 

    }             



};
sliderClick();

    }
    
});


  



