//event listner
    // apps icon mean-->linkdin,insta,faceebook,github icons
    const appicons=document.querySelector("#social-icons")
    const div=appicons.querySelector("div")
    const i=div.querySelector("i")
    console.log(i)

     //syntax
    //addEventListner(event,function,usecapture)
    const dosomething = ()=>
    {
        alert("dosomething");
    }

    i.addEventListener("click",dosomething)

    i.removeEventListener("click",dosomething)


    // click alert show
    i.addEventListener("click", (event) => {
        console.log(event.target);
        alert("");
    });


    // jQuery animation try
      
             $(document).ready(function(){
                $("#contact").click(function(){
                    $("#contact").fadeIn(3000);
                })
            } )