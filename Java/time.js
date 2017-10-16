var hour = 7;
var minute = 25;
var period = "pm";

if(minute < 30){
    if(period =="AM"){
        console.log("it's just after " + hour, "in the morning")
    }else{
        console.log("it's just after " + hour, "in the evening")
    }
}else{
    if(period =="AM"){
        console.log("It's almost " + hour, " in the morning")
    }else{
        console.log("It's almost " + hour, " in the evening")
    }
}