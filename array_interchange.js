let data1 = [0,1,2,3,4,5,6,7];
let position = 4;
let data2 = [];

for(let i=position; i<data1.length;i++){
     
      data2.push(data1[i]) ;  
    }   
      for(let j=0; j<position;j++){
         data2.push(data1[j])
     
}

console.log(data2)

