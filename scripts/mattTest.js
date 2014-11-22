var timber = new item("Wood",1);
var pine = new item("Wood",10);
var oak = new item("Wood",20);
var mahogany = new item("Wood",30);
var lahcenium = new item("Wood",50);

var flint = new item("Stone",1);
var limestone = new item("Stone",10);
var marble = new item("Stone",20);
var grannit = new item("Stone",30);
var devlinese = new item("Stone",50);

var steel = new item("metal",1);
var alluminiunum = new item("metal",10);
var silver = new item("metal",20);
var gold = new item("metal",30);
var marconium = new item("metal",50);

var sapphire = new item("jewel",1);
var ememrald = new item("jewel",10);
var ruby = new item("jewel",20);
var diamond = new item("jewel",30);
var gilliesion = new item("jewel",50);

var acrylic = new item("plastic",1);
var pvc = new item("plastic",10);
var polystyrene = new item("plastic",20);
var polytetrafluoroethylene = new item("plastic",30);
var katanium = new item("plastic",50);

var mysticCow = new item("cookie",100);
var fieniumBrinkious = new item("cookie",100);

function item (type, requiredlvl) {
    this.type = type;
    this.requiredlvl = requiredlvl;
    this.number = 0;
    this.getInfo = function() {
        return this.type + " " + this.requiredlvl;
    }
}

//var wood = {
//    timber:0,
//    pine:0,
//    oak:0 ,
//    mahogamy:0,
//    lahcenium:0
//}
//var stone = {
//    flint:0,
//    limestone:0,
//    marble:0,
//    grannit:0,
//    devlinese:0
//}
//var metal = {
//    steel:0,
//    allumiunum:0,
//    silver:0,
//    gold:0,
//    marconium:0 
//}
//var jewel = {
//    saphire:0,
//    ememrald:0,
//    ruby:0,
//    diamond:0,
//    gilliesion:0
//}
//var platics = {
//    acrylic:0,
//    pvc:0,
//    polystyrene:0,
//    polytetrafluoroethylene:0,
//    katanium:0
//}
//var cookies = {
//    mysticCow:0,
//    fieniumBrinkious:0
//}

var skills ={
    gathering:1,
    exploration:1,
    luck:1,
    //
    metalWork:1,
    woodWork:1,
    leatherWork:1,
    stoneWork:1,
    jewllery:1
}

function changeHTML(){
    document.getElementById("TimberNo").innerHTML="Timber: "+resources.Timber;
    document.getElementById("PineNo").innerHTML="Pine: "+resources.Pine;
    document.getElementById("OakNo").innerHTML="Oak: "+resources.Oak;
    document.getElementById("SteelNo").innerHTML="Steel: "+resources.Steel;
    document.getElementById("AlNo").innerHTML="Aluminium: "+resources.Aluminium;
    document.getElementById("RGNo").innerHTML="Rusty Gate: "+resources.RustyGate;
    document.getElementById("GraniteNo").innerHTML="Granite: "+resources.Granite;
    document.getElementById("MarbleNo").innerHTML="Marble: "+resources.Marble;
    document.getElementById("LimestoneNo").innerHTML="Limestone: "+resources.Limestone;
    document.getElementById("SandstoneNo").innerHTML="Sandstone: "+resources.Sandstone;
}

function addStuff(){
    var number = Math.round(Math.random()*skills.gathering);
    resources.Timber+=number;
    changeHTML();
}

function addStuff2(){
    var number = Math.round(Math.random()*skills.gathering-(skills.exploration*2));
    resources.Steel+=number;
    changeHTML();
}

function addStuff3(){
    var number = Math.round(Math.random()*skills.gathering-(skills.exploration*3));
    resources.Aluminium+=number;
    changeHTML();
}

function addStuff4(){
    var number = Math.round(Math.random()*skills.gathering-(skills.exploration*4));
    resources.Limestone+=number;
    changeHTML();
}

function addStuff5(){
    var number = Math.round(Math.random()*skills.gathering-(skills.exploration*5));
    resources.Sandstone+=number;
    changeHTML();
}

function checkSkillLvl(lvlRequired, func){
    if(skills.exploration>=lvlRequired){
        func();
    }
}

function addNumber(item)
{
	var number2=Math.round(Math.random()*10);
	number+=number2;
	document.getElementById("numbers").innerHTML = item+": " + number+" Start number: " + number2;
}