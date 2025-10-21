function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denom = denom1*denom2;
    const numer = denom1*numer2 + denom2*numer1;
    
    let minNumber;
    if(denom < numer){
       minNumber = denom;
       
     }else{
        minNumber = numer;
        
    }
      
    while(true){
        if(numer % minNumber === 0){
            if(denom % minNumber === 0){
                    return [numer/minNumber, denom/minNumber];
            }
        }
        minNumber = minNumber - 1;
     }


}