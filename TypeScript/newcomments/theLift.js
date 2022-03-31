var theLift = function(queues, capacity) {
  
  //Elevator 
  const Elevator = {
    directionUp: true,
    queueLimit: capacity,
    queue: [],
    currentLocation: [0],
    get isFull() {return this.queueLimit == this.queue.length},
    get direction() {return this.directionUp},
    pickUp : function() {
      if (this.direction) {
        console.log(detUpQueue(queues), 'Up')
        detUpQueue(queues).forEach((x,i)=> {
          if (!(this.queue.filter(x=> x<= i).length>0)) {
          x && x.forEach((y,j)=> {
            this.currentLocation.slice(-1)!=i && this.currentLocation.push(i);
            if (!this.isFull){
              this.queue.push(y)
              leftTheFloor(i,y);
            }
          });
        }
        
      });
      } else {
        console.log(detDownQueue(queues), 'Down');
        detDownQueue(queues).forEach((x,i)=> {
          let floor = queues.length-i-1;
          if (!this.queue.filter(x=> x>= floor).length > 0) {
            x && x.forEach((y,j)=> {
            
            console.log(floor);
            this.currentLocation.slice(-1)!=floor && this.currentLocation.push(floor);
            if (!this.isFull) {
              this.queue.push(y)
              leftTheFloor(floor,y);
            }
          });
        }});
      }
    },
    dropOff: function() {
      let queue2 = this.directionUp ? [...this.queue.sort((a,b)=> a-b)] : [...this.queue.sort((a,b)=> b-a)];
      console.log(queue2, 'dropoff');
      
      queue2.forEach((x,i)=> {
        //set Current Floor
        this.currentLocation.slice(-1) != x && this.currentLocation.push(x);
        //OffLoad
        //this.queue.splice(this.queue.indexOf(x),1);
        removeFromQueue(x)

        //Check if someone gets on ? 

      })
    },
    detDirection: function() {
      let floor = this.currentLocation.slice(-1)[0];
      let flat = (arr)=> arr.reduce((acc, val) => acc.concat(val), []);

      if (this.directionUp) {
         if (flat(queues.map((x,i)=> x.filter((y,j)=> i>=floor && y>i))).length > 0){ 
          console.log(flat(queues.map((x,i)=> x.filter((y,j)=> i>=floor && y>i))), 'drecti')
           return true;
         } else {
          return false;
         }
         
        } else {
          if(flat(queues.map((x,i)=> x.filter((y,j)=> i<=floor && y<i))).length > 0){
            //console.log(flat(queues.filter((x,i)=> i<=floor)).filter(x=> x< floor), floor)
            return false;
          } else {
            return true;
          }
         }
         
    }
  }
  function removeFromQueue(x) {
    let q = Elevator.queue;
    q.shift(x);
  }
  //Floor Queue
  function leftTheFloor(floor,person){
    queues[floor].splice(queues[floor].indexOf(person),1);
  }
  function floorsAreEmpty(queues) {
    return queues.filter(x=> x.length>0).length==0;
  }
  //destintion queue
  function detDownQueue(queues) {
    dQ = queues.map((x,i)=> queues[queues.length-i-1]);
   return dQ.map((x,i)=> x.filter(y=> y<(dQ.length-i)));
  }

  function detUpQueue(queues) {
    return queues.map((x,i)=> x.filter(y=> y>i));
  }

  while (!floorsAreEmpty(queues)) {
 //   console.log(Elevator.queue);
    console.log(Elevator.currentLocation, 'location');
  //  console.log(queues, capacity);
  Elevator.pickUp(queues);
  Elevator.dropOff();
  console.log(Elevator.directionUp = Elevator.detDirection(), 'direction ups');
  }
  Elevator.currentLocation.slice(-1)!=0 && Elevator.currentLocation.push(0);
  return Elevator.currentLocation;

}





    var queues = [ [ 15, 17, 13, 13 ],
    [ 17, 5 ],
    [ 10, 15, 10 ],
    [ 13, 15 ],
    [ 10, 10, 1 ],
    [ 11, 18 ],
    [ 0, 11, 11 ],
    [ 1, 13, 0, 18 ],
    [ 0 ],
    [ 14, 8, 2 ],
    [ 12, 13, 0, 18 ],
    [ 9, 4, 19 ],
    [ 4, 6, 2 ],
    [],
    [ 2 ],
    [ 12, 4, 17, 3 ],
    [],
    [ 13, 13, 4, 7 ],
    [ 9, 16, 16 ],
    [ 7, 1 ] ];
    var result = theLift(queues,1);
    console.log(result, [ 0, 1, 2, 3, 1, 2, 3, 2, 3, 0 ]);
   
  /*
  it("down", function() {
    var queues = 
    var result = theLift(queues,5);
    Test.assertSimilar(result, );
  });  
};
*/