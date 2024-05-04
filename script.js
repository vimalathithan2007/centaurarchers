function getMyOutput() {
    var myNumber = parseInt(document.querySelector("#myNumber").value)
    if (myNumber==undefined || myNumber == "" || myNumber==NaN || myNumber<1 || myNumber>9) {
        alert("Enter a number between 1 & 9 in MyNumber")
        return ;
    }
    var pickPlayersNo = parseInt(document.querySelector("#pickPlayersNo").value)
    if(pickPlayersNo == "" || pickPlayersNo == NaN || pickPlayers < 1 || pickPlayers > 11) {
        alert('Please enter a valid number between 1 & 11.')
        return ;
    }
    var divs  = document.querySelectorAll(".flex-2-col > div")
    var team1 = divs[0]
    var team2 = divs[1]
    var t1fc = team1.querySelectorAll(".form-control")
    var t2fc = team2.querySelectorAll(".form-control")
    const map = new Map()
    for(let fc of t1fc) {
        let name = fc.querySelector("input:first-child").value
        let out = fc.querySelector("label.out").innerHTML
        if (out.includes("(")) {
          out = out.split("(")[0]
        }
        if( name.trim()!="" && out.trim()!="" ) {
          map.set(name,parseInt(out))
        }  
    }
    for(let fc of t2fc) {
        let name = fc.querySelector("input:first-child").value
        let out = fc.querySelector("label.out").innerHTML
        if (out.includes("(")) {
          out = out.split("(")[0]
        }
        if( name.trim()!="" && out.trim()!="" ) {
          map.set(name,parseInt(out))
        }  
    }
    //console.log(map)
    let players = [...map.keys()];
    let playerCombination = pickPlayers(players,pickPlayersNo)

    let finalOut = []
    for(let pc of playerCombination) {
        let sum = 0
        for (let p of pc) {
            sum = sum + map.get(p)
        }
        if (myNumber ==calculate(sum)) {
            finalOut.push(pc.join(","))
        }
    }
    var finalEleven = document.querySelector("#final-eleven")
    finalEleven.innerHTML = ""
    for(let fo of finalOut) {
        finalEleven.innerHTML = finalEleven.innerHTML + `<div class='list'>${fo}</div>`
    }
    if(finalOut.length==0) {
        finalEleven.innerHTML = "<div class='list'>No output match</div>"
    }
}

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
function repeatedSum(value) {
    var x = parseInt(value)
    var y = 0 ,sum=0;
    while(x!=0) {
        y = x%10;
        x = Math.floor(x/10)
        sum = sum + y
    }
    return sum;
}
dates.forEach(date=>date.addEventListener('keyup',function(){
    var lbl = date.parentNode.querySelector(".out")
    var vv = date.value.trim()
    if (vv !="" && vv !=undefined) {
        lbl.innerHTML = calculate(vv) +"("+repeatedSum(vv)+")";
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

//const allPlayers = ['Player1', 'Player2', 'Player3'];
//const selectedPlayers = pickPlayers(allPlayers, 2);
//console.log(selectedPlayers);

function calculateCombination() {

    var team1WkBoxArr = getBoxByClass('.team1-wk-box input')
    var team1BmBoxArr = getBoxByClass('.team1-bm-box input')
    var team1ArBoxArr = getBoxByClass('.team1-ar-box input')
    var team1BoBoxArr = getBoxByClass('.team1-bo-box input')

    var team2WkBoxArr = getBoxByClass('.team2-wk-box input')
    var team2BmBoxArr = getBoxByClass('.team2-bm-box input')
    var team2ArBoxArr = getBoxByClass('.team2-ar-box input')
    var team2BoBoxArr = getBoxByClass('.team2-bo-box input')

    var t1wk = document.querySelector("#t1wk").value
    var t2wk = document.querySelector("#t2wk").value
    var t1bm = document.querySelector("#t1bm").value
    var t2bm = document.querySelector("#t2bm").value
    var t1ar = document.querySelector("#t1ar").value
    var t2ar = document.querySelector("#t2ar").value
    var t1bo = document.querySelector("#t1bo").value
    var t2bo = document.querySelector("#t2bo").value
    if (t1wk.trim()!="" && t1wk!= undefined) {
        t1wk = parseInt(t1wk)
    } 
    else {
        t1wk=0
    }
    if (t2wk.trim()!="" && t2wk!= undefined) {
        t2wk = parseInt(t2wk)
    }
    else {
        t2wk=0
    }
    if (t1bm.trim()!="" && t1bm!= undefined) {
        t1bm = parseInt(t1bm)
    }
    else {
        t1bm=0
    }
    if (t2bm.trim()!="" && t2bm!= undefined) {
        t2bm = parseInt(t2bm)
    }
    else {
        t2bm=0
    }
    if (t1ar.trim()!="" && t1ar!= undefined) {
        t1ar = parseInt(t1ar)
    }
    else {
        t1ar=0
    }
    if (t2ar.trim()!="" && t2ar!= undefined) {
        t2ar = parseInt(t2ar)
    }
    else {
        t2ar=0
    }
    if (t1bo.trim()!="" && t1bo!= undefined) {
        t1bo = parseInt(t1bo)
    }
    else {
        t1bo=0
    }
    if (t2bo.trim()!="" && t2bo!= undefined) {
        t2bo = parseInt(t2bo)
    }
    else {
        t2bo=0
    }
   
    var wkArr1 = pickPlayers(team1WkBoxArr, t1wk)
    var bmArr1 = pickPlayers(team1BmBoxArr, t1bm)
    var arArr1 = pickPlayers(team1ArBoxArr, t1ar)
    var boArr1 = pickPlayers(team1BoBoxArr, t1bo)

    var wkArr2 = pickPlayers(team2WkBoxArr, t2wk)
    var bmArr2 = pickPlayers(team2BmBoxArr, t2bm)
    var arArr2 = pickPlayers(team2ArBoxArr, t2ar)
    var boArr2 = pickPlayers(team2BoBoxArr, t2bo)

    var wkArr = []
    for(let a of wkArr1) {
      for (let b of wkArr2) {
        wkArr.push(a.concat(b))
      }
    }

    var bmArr = []
    for(let a of bmArr1) {
      for (let b of bmArr2) {
        bmArr.push(a.concat(b))
      }
    }

    var arArr = []
    for(let a of arArr1) {
      for (let b of arArr2) {
        arArr.push(a.concat(b))
      }
    }

    var boArr = []
    for(let a of boArr1) {
      for (let b of boArr2) {
        boArr.push(a.concat(b))
      }
    }

    
    let z = '<h2>Wicket Keeper</h2>'
    for (let x of wkArr) {
        let y = x.join(",")
        z = z + `<div class='list'>${y}</div>`
    }
    document.querySelector(".wk-list").innerHTML = z

    z = '<h2>Batsman</h2>'
    for (let x of bmArr) {
        let y = x.join(",")
        z = z + `<div class='list'>${y}</div>`
    }
    document.querySelector(".bm-list").innerHTML = z

    z = '<h2>All Rounder</h2>'
    for (let x of arArr) {
        let y = x.join(",")
        z = z + `<div class='list'>${y}</div>`
    }
    document.querySelector(".ar-list").innerHTML = z

    z = '<h2>Bowler</h2>'
    for (let x of boArr) {
        let y = x.join(",")
        z = z + `<div class='list'>${y}</div>`
    }
    document.querySelector(".bo-list").innerHTML = z



}

function getBoxByClass(clz) {
  var inputs = document.querySelectorAll(clz);
  var inputArr = [];
  inputs.forEach(input=> {
    if (input.value.trim()!="" && input.value!=undefined) {
        inputArr.push(input.value)
    }
  } )
  return inputArr;
}
