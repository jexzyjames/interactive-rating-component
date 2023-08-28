var submit = document.querySelector(".submit");
var thanks = document.querySelector(".thanks");
// var num = document.querySelector(".num");
var click = document.querySelector("#click");
var wrapper = document.querySelector(".wrapper");
var back = document.querySelector("#back");
var number = document.querySelectorAll("#num");

submit.onclick = function(){
    // show();


    if(true){
        wrapper.style.display = 'none';
    thanks.style.display = "block";
    thanks.style.transform = 'scale(1)';

    }
    else{
        return false;
    }
    
}
back.onclick = ()=>{
    wrapper.style.display = 'block';
    thanks.style.display ='none';
}


   
        number.forEach((num)=>{
            num.addEventListener('click', function (e) {

                const update = e.target;
                const open = update.innerText;
                click.innerHTML = open;

                    console.log(open);
                    // alert('hello')




                });
        });
    
    