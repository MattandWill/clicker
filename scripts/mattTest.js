var player = {
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

function changeHTML(){
    document.getElementById("TimberNo").innerHTML="Timber: "+player.Timber;
    document.getElementById("PineNo").innerHTML="Pine: "+player.Pine;
    document.getElementById("OakNo").innerHTML="Oak: "+player.Oak;
}

function addStuff(){
    player.Timber+=1;
    changeHTML();
}