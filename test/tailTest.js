const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log("will always fail because assertEqual cannot compare arrays!");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 