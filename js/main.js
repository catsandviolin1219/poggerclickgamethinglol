let poggerpoints = 0;
let inventory = [0, 0]

function openShop() {
    document.getElementById("shop").style.display = "inline";
}

function closeShop() {
    document.getElementById("shop").style.display = "none";
}

function updateUI() {
    document.getElementById("poggerPointsText").innerHTML = "You have " + poggerpoints.toString() + " Pogger Points";
    document.getElementById("poggersAmount").innerHTML = "You have: " + inventory[0].toString();
    document.getElementById("potionsAmount").innerHTML = "You have: " + inventory[1].toString();
}

function getPogger(amountToReward) {
    poggerpoints += amountToReward;
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

