function footToMeters(){
    let foot = parseFloat(prompt("Enter foot to convert: "));
    let result1 = 0.305 * foot
    document.getElementById("result").innerText= foot + " foot conver to meter is " + result1;
}
function metersToFoot(){
    let meters = parseFloat(prompt("Enter meters to convert: "));
    let result2 = 3.279 * meters
    document.getElementById("result").innerText= meters + " foot conver to meter is " + result2;
}