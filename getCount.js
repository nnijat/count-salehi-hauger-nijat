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
    console.log("This is: " + convertObjKeysToItems(count));
    return document.getElementById('result').innerText = convertObjKeysToItems(count);
};

// This is the halper method to convert obj to array which HTML takes 
function convertObjKeysToItems(obj) {
    var itemArray = [];
    Object.keys(obj).forEach(function (key) {
        var item = [];
        item.push(key);
        item.push(obj[key]);
        itemArray.push("[" + item + "]");
    });
    return itemArray;
}