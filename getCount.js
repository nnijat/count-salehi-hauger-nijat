"use strict"

function getCount(string) {
    let newStr = String(string).toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
    let freq = [];
    let character = [];
    for (var i=0; i<newStr.length;i++) {
        character = newStr.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};