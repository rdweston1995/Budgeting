/**
 * This file is to calculate the interest gained from this month from the current debt and APR
*/

function calcInterest(APR, currentDebt){
    console.log("APR: " + APR);
    console.log("current debt: " + currentDebt);
    let monthlyAPR = (APR / 100) / 12.0;
    console.log("Monthly APR: " + monthlyAPR);

    return currentDebt + (currentDebt * monthlyAPR);
}

module.exports = calcInterest;