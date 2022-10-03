var main_person = 1;
var person_in_meeting = [true,true,true,true,true,true,true];
var current_people_num = 6;
var pin_mode = true;

const no_pin_mode_width = [0,"98%","49%","49%","49%","32%","32%"];
const no_pin_mode_height = [0,"98%","98%","49%","49%","49%","49%"];

const person_name = [0,"張佑亘","陳元彬","連奕維","陳若瑜","林昀禾","吳秉勳"];

var mic = false;
var cam = false;

var AddContent = function(id){
    var x='<div class="person" id='+ id +'>';
    if(id != 1){
        x += '<div class="delete" onclick="DeleteMember('+ id +')"><span class="material-symbols-outlined" style="font-size: 7px; color: white;">remove</span></div>';
    }
    x += '<img class="head_pic" src="src/head0'+ id +'.jpg">';
    x += '<div class="volume"><span class="material-symbols-outlined">mic_off</span></div>';
    x += '<div class="head"><div class="head_func"><div class="head_func_button" onclick="TouchPin(' + id + ')"><span class="material-symbols-outlined">push_pin</span></div><div class="head_func_button"><span class="material-symbols-outlined"">mic_off</span></div><div class="head_func_button"><span class="material-symbols-outlined">do_not_disturb_on</span></div></div></div>';
    x += '<div class="name">'+ person_name[id] +'</div>';
    return x;
}

var changecolor1 = function(){
    var button = document.getElementById("microphone");
    if (mic === false){
        button.style.backgroundColor = "#44474a";
        button.innerHTML = '<span class="material-symbols-outlined" onclick="changecolor1()">mic</span>';
        mic = true;
    }
    else{
        button.style.backgroundColor = "#ea5044";
        button.innerHTML = '<span class="material-symbols-outlined" onclick="changecolor1()">mic_off</span>'
        mic = false;
    }
    return;
}

var changecolor2 = function(){
    var button = document.getElementById("camera");
    if(cam === false){
        button.style.backgroundColor = "#44474a";
        button.innerHTML = "<span class=\"material-symbols-outlined\" onclick=\"changecolor1()\">videocam</span>"
        cam = true;
    }
    else{
        button.style.backgroundColor = "#ea5044";
        button.innerHTML = "<span class=\"material-symbols-outlined\" onclick=\"changecolor1()\">videocam_off</span>"
        cam = false;
    }
    return;
}

var UpdateScreen = function(){
    var bd = document.getElementById("bd");
    if(pin_mode === true){
        bd.innerHTML = '<div id="main">';
        bd.innerHTML += '<div id="side">';
        var main = document.getElementById("main");
        main.innerHTML = '';
        if(current_people_num === 1){
            main.style.width = "100%";
        }
        else if(current_people_num >= 2 && current_people_num <= 3){
            main.style.width = "calc(100% - 200px)";
        }
        else{
            main.style.width = "calc(100% - 400px)";
        }
        main.innerHTML = AddContent(main_person);
        var side = document.getElementById("side");
        if(current_people_num === 1){
            side.style.width = "0px";
        }
        else if(current_people_num >= 2 && current_people_num <= 3){
            side.style.width = "200px";
        }
        else{
            side.style.width = "400px";
        }
        side.innerHTML = '';
        var counter = 0;
        for(var it = 1; it <= 6; it++){
            if(it != main_person && person_in_meeting[it] === true){
                side.innerHTML += AddContent(it);
                counter++;
                if((counter === 3||counter === 5) && counter === current_people_num - 1){
                    var wider_person = document.getElementById(it);
                    wider_person.style.width = "250px";
                }
            }
        }
        return;
    }
    if(pin_mode === false){
        bd.innerHTML = '<div id="screen">';
        var screen = document.getElementById("screen");
        screen.innerHTML = '';
        var counter = 0;
        for(var it = 1; it <= 6; it++){
            if(person_in_meeting[it] === true){
                screen.innerHTML += AddContent(it);
                var current = document.getElementById(it);
                current.style.height = no_pin_mode_height[current_people_num];
                counter++;
                if (current_people_num === 3 && counter === 3){
                    current.style.width = "59%";
                }
                else if (current_people_num === 5 && (counter === 4 || counter === 5)){
                    current.style.width = "38%";
                }
                else{
                    current.style.width = no_pin_mode_width[current_people_num];
                }
            }
        }
        return;
    }
}

var DeleteMember = function(id){
    person_in_meeting[id] = false;
    if(pin_mode === true && main_person === id){
        pin_mode = false;
        main_person = 0;
    }
    current_people_num = current_people_num - 1;
    var button = document.getElementById("add_button");
    button.style.opacity = 1;
    UpdateScreen();
    return;
}

var TouchPin = function(id){
    if(pin_mode === false){
        pin_mode = true;
        main_person = id;
        UpdateScreen();
        return;
    } 
    else{
        if(id === main_person){
            pin_mode = false;
            main_person = 0;
            UpdateScreen();
            return;
        }
        else{
            main_person = id;
            UpdateScreen();
            return;
        }
    }
}

var AddPerson = function(){
    for(var i=2; i<=6; i++){
        if(person_in_meeting[i] === false){
            person_in_meeting[i] = true;
            current_people_num++;
            UpdateScreen();
            if(current_people_num === 6){
                var button = document.getElementById("add_button");
                button.style.opacity = 0;
            }
            return;
        }
    }
}