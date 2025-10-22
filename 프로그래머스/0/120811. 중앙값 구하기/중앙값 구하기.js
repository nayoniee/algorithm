function solution(array) {
    
    
    
            
    let arrayCnt = 0;
    let newArray=[];
    
    while(arrayCnt < array.length){   
        let minNumber = 1000;
        let cnt = 0;


        while(cnt<array.length){
            if(minNumber > array[cnt]){
                minNumber = array[cnt];
            }
            cnt = cnt+1
        }
        newArray.push(minNumber);

        let cnt2=0;
        while(cnt2<array.length){
            
            console.log("minNumber : ", minNumber );
            if(minNumber === array[cnt2]){
                array[cnt2]=1000;
                break;
            }
            cnt2 = cnt2+1;
            
        }

     arrayCnt = arrayCnt +1;
        
        
    }

	console.log("new Array: ", newArray);
    return newArray[Math.floor(array.length /2)];
    
}