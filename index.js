// Code your solution in this file!
const headQ = 42;
const feet = 264;
function distanceFromHqInBlocks (pickup){
    if (pickup > 42){
    return pickup - headQ;
    }else if (pickup < 42){
        return headQ - pickup;
    }
}
function distanceFromHqInFeet (pickup){
    return distanceFromHqInBlocks(pickup) * feet;
}
function distanceTravelledInFeet (headquarters, num2){
    if (num2 > headquarters){
        return (num2 - headquarters)*feet;
    }else{
    return (headquarters - num2)*feet;
    }
}

function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination)
    let cost
    if (totalDistance <= 400) {
        return 0
    } else if ((totalDistance >= 400) && (totalDistance <= 2000)) {
        return cost = (totalDistance - 400) * .02
    } else if (totalDistance > 2500) {
        return 'cannot travel that far'
    } else if (totalDistance > 2000) {
        return 25
    } 
}