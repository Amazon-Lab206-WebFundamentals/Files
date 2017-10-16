function printRange(start,end,skip){
    for(var i = start; i <= end; i += skip){
        if( i === end){
            break;
        }else{
        console.log(i);
        }
    }
}
printRange(-16,10,2);