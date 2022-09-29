var main_person = 0;
var person_in_meeting = [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false];
var current_people_num = 6;
var current_pos = [0,1,2,3,4,5]
var pin_mode = true;

var UpdateScreen = function(){
    var main = document.getElementById("main");
    if(pin_mode === true){

    }
    if(pin_mode === false){

    }
}

var CancelPin = function(){
    if(pin_mode === false){
        return;
    }
    pin_mode = false;
    main_person = -1;
    UpdateScreen();
    return;
}

var SetPin = function(id) {
    if(pin_mode === true){
        return;
    }
    pin_mode = true;
    main_person = id;
    UpdateScreen();
    return;
}