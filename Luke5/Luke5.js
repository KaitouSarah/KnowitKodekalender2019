const wishlist = 'tMlsioaplnKlflgiruKanliaebeLlkslikkpnerikTasatamkDpsdakeraBeIdaegptnuaKtmteorpuTaTtbtsesOHXxonibmksekaaoaKtrssegnveinRedlkkkroeekVtkekymmlooLnanoKtlstoepHrpeutdynfSneloietbol';
let wishlistAfterStep1 = '';
let wishlistAfterStep2 = '';
let wishlistAfterStep3 = '';
let tempStringArray;

//Step 1 -> undo step 3
tempStringArray = wishlist.match(/.{1,3}/g).map(String);
for (let i = 0; i < tempStringArray.length/2; i++) {
    let tempData = tempStringArray[i];
    tempStringArray[i] = tempStringArray[tempStringArray.length-1-i];
    tempStringArray[tempStringArray.length-1-i] = tempData;
}
tempStringArray.forEach(substring => wishlistAfterStep1 += substring);

// Step 2 -> undo step 2
tempStringArray = wishlistAfterStep1.split('');
for (let i = 0; i < tempStringArray.length; i+=2) {
    let tempData = tempStringArray[i];
    tempStringArray[i] = tempStringArray[i+1];
    tempStringArray[i+1] = tempData;
}
tempStringArray.forEach(substring => wishlistAfterStep2 += substring);

// Step 3 -> undo step 1
wishlistAfterStep3 = "".concat(wishlistAfterStep2.substring(wishlistAfterStep2.length/2),
    wishlistAfterStep2.substring(0, wishlistAfterStep2.length/2));

console.log("Ønskelisten var opprinnelig ", wishlistAfterStep3);