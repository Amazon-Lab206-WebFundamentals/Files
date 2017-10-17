    var i = 30;
    while( i > 0){  
        var x = Math.ceil(Math.random()*100);
        var y = Math.ceil(Math.random()*100); 
        var winnings = Math.ceil(Math.random()*50)+50;     
        if(x == y){
            console.log(x,y,i,winnings);
            console.log(i += winnings);
            break;
        }else{
            console.log(i,x,y,winnings);
            i --;
        }
    } 
