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
    } else {
        lbl.innerHTML = "";
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
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function addBox(clz) {
    
     var div= "<div class='center mb-5'><div><input type='text' class='auto-text'/>  <button class='sm-btn' onclick='removeBox(this)'>X</button></div></div>";
     var n = document.querySelector(clz);
     console.log()
     n.innerHTML = n.innerHTML + div


}
function removeBox(ele) {
    ele.parentNode.classList.add('hide');
}

function pickPlayers(players, k) {
    const result = [];
    
    function backtrack(start, currCombo) {
        if (currCombo.length === k) {
            result.push([...currCombo]);
            return;
        }
        
        for (let i = start; i < players.length; i++) {
            currCombo.push(players[i]);
            backtrack(i + 1, currCombo);
            currCombo.pop();
        }
    }
    
    backtrack(0, []);
    
    return result;
}

const allPlayers = ['Player1', 'Player2', 'Player3'];
const selectedPlayers = pickPlayers(allPlayers, 2);

console.log(selectedPlayers);
