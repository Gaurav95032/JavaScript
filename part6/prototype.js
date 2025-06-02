let computer = {
    "RAM": "6 GB",
    "ROM": "1 TB",
    "CPU" : "12 Threads"
}

let Lenvo = {
    "Screen": "UHD",
    __proto__ : computer
}

let Nvidia = {
    "Chipset": "Nvidia 4000",
    __proto__ : Lenvo
}

console.log(computer)
console.log(computer.__proto__)

console.log("lenvo ",Lenvo);
console.log("lenvo ", Lenvo.__proto__)

console.log("nvidia ", Nvidia);
console.log("nvidia ",Nvidia.__proto__)