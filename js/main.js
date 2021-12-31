let poggerpoints = 0;
let inventory = [0, 0];
let repeatedLoopIID = 0; // interval id
let poggerMultiplyScale = 1; // for double money
let defaultPoggerMultiplyScale = 1;
let doubleMoneyCost = 250;
function openShop() {
    document.getElementById("shop").style.display = "inline";
}

function closeShop() {
    document.getElementById("shop").style.display = "none";
}

function updateUI() {
    document.getElementById("doubleCost").innerHTML = "Cost: " + doubleMoneyCost + " Pogger Points"
    document.getElementById("poggerPointsText").innerHTML = "You have " + poggerpoints.toString() + " Pogger Points (&Oslash;)";
    document.getElementById("poggersAmount").innerHTML = "You have: " + inventory[0].toString();
    document.getElementById("potionsAmount").innerHTML = "You have: " + inventory[1].toString();
    document.getElementById("debug-inventory").innerHTML = inventory.toString();
    document.getElementById("debug-interval-id").innerHTML = repeatedLoopIID.toString();
    if (poggerMultiplyScale != 1) {
        document.getElementById("doubleMoneyActive").innerHTML = "Currently Active (multiplier x" + poggerMultiplyScale.toString() + ")";
    }
    else {
        document.getElementById("doubleMoneyActive").innerHTML = "Currently Inactive";
    }
}

function getPogger(amountToReward) {
    poggerpoints += amountToReward * poggerMultiplyScale;
    updateUI();
}

function clickPogger() {
    getPogger(1);
}

// Item IDs:
// pogger = 0
// pogger poition = 1

function buyItem(cost, itemId) {
    if (cost > poggerpoints) {
        alert("You do not have enough money1!!!1!!111")
    }
    else {
        poggerpoints += -cost;
        inventory[itemId] += 1;
        updateUI();
    }
}

function activateDoubleMoney() {
    if (doubleMoneyCost > poggerpoints) {
        alert("NO T ENO UG H MON EY >:(");
    }
    else {
        poggerpoints -= doubleMoneyCost;
        poggerMultiplyScale = poggerMultiplyScale * 2
        doubleMoneyCost = 250 * poggerMultiplyScale;
        updateUI();
        setTimeout(function () {
            poggerMultiplyScale = poggerMultiplyScale / 2
            doubleMoneyCost = 250 * poggerMultiplyScale;
            updateUI();
        }, 30000)
    }
}

function repeatedLoop() {
    getPogger(
        (inventory[0] * 1) +
        (inventory[1] * 5)
    );
    updateUI();  
}

function main() {
    updateUI();
    repeatedLoopIID = setInterval("repeatedLoop()", 1000);
    document.getElementById("debug-inventory").innerHTML = inventory.toString();
    document.getElementById("debug-interval-id").innerHTML = repeatedLoopIID.toString();
}