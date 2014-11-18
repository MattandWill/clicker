var resources = {
    Timber:0,
    Pine:0,
    Oak:0,
    Steel:0,
    Aluminium:0,
    RustyGate:0,
    Granite:0,
    Marble:0,
    Limestone:0,
    Sandstone:0
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
    resources.Timber+=Math.round(Math.random(skills.gathering));
    changeHTML();
}

function addStuff2(){
    resources.Steel+=1;
    changeHTML();
}

function addStuff3(){
    resources.Aluminium+=1;
    changeHTML();
}

function addStuff4(){
    resources.Limestone+=1;
    changeHTML();
}

function addStuff5(){
    resources.Sandstone+=1;
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