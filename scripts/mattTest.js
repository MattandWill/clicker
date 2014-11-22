var wood = {
    timber:0,
    pine:0,
    oak:0 ,
    mahogamy:0,
    lahcenium:0
}
var stone = {
    flint:0,
    limestone:0,
    marble:0,
    grannit:0,
    devlinese:0
}
var metal = {
    steel:0,
    allumiunum:0,
    silver:0,
    gold:0,
    marocnium:0 
}
var jewel = {
    saphire:0,
    ememrald:0,
    ruby:0,
    diamond:0,
    gilliesion:0
}
var platics = {
    acrylic:0,
    pvc:0,
    polystyrene:0,
    polytetrafluoroethylene:0,
    katanium:0
}
var cookies = {
    mysticCow:0,
    fieniumBrinkious:0
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