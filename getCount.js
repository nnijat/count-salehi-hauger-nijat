"use strict"

let submitBtn = document.getElementById('submit');

submitBtn.onclick = function getCount() {
    let string = document.getElementById('input').value;
    //  new Array------//to Lower----//Take special char out---//take space out---//convert to array---//sort array
    let arr = String(string).toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '').split('').sort();
    let count = [];
    let character;
    for (var i = 0; i < arr.length; i++) {
        character = arr[i];
        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }
    return document.getElementById('result').innerText = count; // having issue to returning "count" value
};