var dates = document.querySelectorAll(".date");
function calculate(value) {
    var x = parseInt(value);
    var y=0,sum=0;
    while(x!=0||sum>9) {
        if  (x ==0) {
            x =sum;
            sum = 0;
        }   
        y = x%10; 
        x= Math.floor(x/10); 
        sum= sum+y;         
    }
    return sum;
}
dates.forEach(date=>date.addEventListener('keyup',function(){
    var lbl = date.parentNode.querySelector(".out")
    var vv = date.value.trim()
    if (vv !="" && vv !=undefined) {
        lbl.innerHTML = calculate(vv);
    }
}))

//console.log('OUT:'+calculate(123))

function showHidePlayer() {
    var playersTxt = document.querySelectorAll(".form-control input:first-child");
    playersTxt.forEach(pt => pt.classList.toggle("hide"))
}

function showHideDob() {
    var playersTxt = document.querySelectorAll(".form-control input:nth-child(2)");
    playersTxt.forEach(pt => pt.classList.toggle("hide"))
}

function compare() {
    var div = document.querySelector(".flex-2-col");
    div.classList.toggle("compare");
}