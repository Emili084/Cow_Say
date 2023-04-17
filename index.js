const myInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Salut je m'appelle  ${myInfo.name} et je suis du ${myInfo.campus} `,
    e : "oO",
    T : "U "
}));