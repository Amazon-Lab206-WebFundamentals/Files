for(var i= 60; i >=0; i--){
    if(i>= 30){
        console.log(i+" more days filled waiting :(");
    }else if(i<30 && i>5){
        console.log("Excitement is at level", 30-i + "!!");
    }else if(i<5 && i>0){
        console.log("I CAN'T WAIT ONLY " + i,"DAYS LEFT");
    }else if( i === 0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
}