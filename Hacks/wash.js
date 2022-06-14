function waterfallStreams(array, source) {
  let streamA = waterStream(source, 100);
  let count=0;
  while(streamA.isValid()) {
    streamA.moveStream();
    streamA.postToMatrix();
    streamA.poss;
    //console.log(count);
    console.log(array)
    count+=1;
  }
  

  
  function waterStream(start, str){
    let pos = [0,start]
    let strength = str
    let direction = [[1,0], [0,-1], [0,1]]
    let currDirection = x = 0;

   let stream = {
      poss : console.log(pos),
      strength: strength,
     moveStream: function(){
        pos = [pos[0]+direction[x][0]
        , pos[1]+direction[x][1]]
        console.log(pos)
     } ,
     changeDirection: function(direct) { console.log(pos)
       x = (direct == 'left' ?
                                              1 : direct == 'right' ?
                                              2 : 0)},
     validMove: (array[pos[0]+direction[x][0]][pos[1]+direction[x][1]] == 0),
     postToMatrix: ()=> (array[pos[0]][pos[1]] = strength),
     isValid: ()=>(pos[0] >=0 && pos[1] < array.length && pos[1] >=0 && pos[1]<= array[0].length)
     
    }
    
    return stream
  }
  
}

// Do not edit the line below.
waterfallStreams([
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0]
],3)
