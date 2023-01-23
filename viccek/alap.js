var tomb=
[
"Józsi két ebédet evett, Zsolti egyet sem, tehát ettek egy-egy ebédet átlagban.",
"- Mi az, apró kis fény a falon? -Szúnyog hegesztővel.",
"Az van a kapunkra írva, hogy: Kérlek ne csapd be , de könyörgöm, ki az, aki egy kaput akar átverni?",
"Miről lehet felismerni a mérgeskígyót? Ráncolja a homlokát.",
"vicc5"
]
var kepek=
[
"0.png",
"1.png",
"2.png",
"3.png",
"4.jpg"
]


function vicc()
{
//alert("hello")    

var veletlen=Math.floor(Math.random() * tomb.length);
console.log(veletlen)

document.getElementById("vicchelye").innerHTML=tomb[veletlen]
document.getElementById("vicckepe").src=kepek[veletlen]
}
vicc()