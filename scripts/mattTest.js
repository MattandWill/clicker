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
    resources.Timber+=1;
    changeHTML();
}

function addStuff2(){
    resources.Timber+=1;
    changeHTML();
}

function addStuff3(){
    resources.Timber+=1;
    changeHTML();
}

function addStuff4(){
    resources.Timber+=1;
    changeHTML();
}

function addStuff5(){
    resources.Timber+=1;
    changeHTML();
}

function checkSkillLvl(){
    
}