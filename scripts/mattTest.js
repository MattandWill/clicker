var timber = new item("Wood",1);
var pine = new item("Wood",10);
var oak = new item("Wood",20);
var mahogany = new item("Wood",30);
var lahcenium = new item("Wood",50);

var flint = new item("Stone",1);
var limestone = new item("Stone",10);
var marble = new item("Stone",20);
var granite = new item("Stone",30);
var devlinese = new item("Stone",50);

var steel = new item("metal",1);
var aluminium = new item("metal",10);
var silver = new item("metal",20);
var gold = new item("metal",30);
var marconium = new item("metal",50);

var sapphire = new item("jewel",1);
var emerald = new item("jewel",10);
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
    document.getElementById("TimberNo").innerHTML="Timber: "+timber.number;
    document.getElementById("PineNo").innerHTML="Pine: "+pine.number;
    document.getElementById("OakNo").innerHTML="Oak: "+oak.number;
    document.getElementById("MahoganyNo").innerHTML="Mahogany: "+mahogany.number;
    document.getElementById("LahceniumNo").innerHTML="Lahcenium: "+lahcenium.number;
    document.getElementById("FlintNo").innerHTML="Flint: "+flint.number;
    document.getElementById("LimestoneNo").innerHTML="Limestone: "+limestone.number;
    document.getElementById("MarbleNo").innerHTML="Marble: "+marble.number;
    document.getElementById("GraniteNo").innerHTML="Granite: "+granite.number;
    document.getElementById("DevlineseNo").innerHTML="Devlinese: "+devlinese.number;
    document.getElementById("SteelNo").innerHTML="Steel: "+steel.number;
    document.getElementById("AluminiumNo").innerHTML="Aluminium: "+aluminium.number;
    document.getElementById("SilverNo").innerHTML="Silver: "+silver.number;
    document.getElementById("GoldNo").innerHTML="Gold: "+gold.number;
    document.getElementById("MarconiumNo").innerHTML="Marconium: "+marconium.number;
    document.getElementById("SapphireNo").innerHTML="Sapphire: "+sapphire.number;
    document.getElementById("EmeraldNo").innerHTML="Emerald: "+emerald.number;
    document.getElementById("RubyNo").innerHTML="Ruby: "+ruby.number;
    document.getElementById("DiamondNo").innerHTML="Diamond: "+diamond.number;
    document.getElementById("Gilliesion").innerHTML="Gilliesion: "+gilliesion.number;
    document.getElementById("AcrylicNo").innerHTML="Acrylic: "+acrylic.number;
    document.getElementById("PvcNo").innerHTML="PVC: "+pvc.number;
    document.getElementById("PolystyreneNo").innerHTML="Polystyrene: "+polystyrene.number;
    document.getElementById("PolytetrafluorethyleneNo").innerHTML="Polytetrafluorethylene: "+polytetrafluoroethylene.number;
    document.getElementById("KataniumNo").innerHTML="Katanium: "+katanium.number;
}

function addStuff(){
    var number = Math.round(Math.random()*skills.gathering);
    timber.number+=number;
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

function checkSkillLvl(lvlRequired,func){
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