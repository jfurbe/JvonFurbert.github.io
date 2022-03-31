const { updateLanguageServiceSourceFile } = require("typescript");



const CreateArena = (x,y)=> {
  var arena = Array(y);
  var run = 0;

  const inner = ()=> {
    const build = ()=> {
      run+=1;
      for (let i=0;i<x;i++){
        arena[i] = [];
        for (let j=0;j<y;j++){
           arena[i].push([i,j]);
        } 
    }
    }
    
    const update = (arena)=> {
      var n = 0;
      const addOne = (x,y)=> {
        return [x+1,y]
      }

      const addy = ()=> {
      arena.map((r,i)=> r.forEach((c,j)=>

        c==0 && (()=> {
          //console.log(i,j)
          arena[i][j] = [i,j]
          let a = addOne(i,j)
          //arena[a[0]][a[1]] = 0;
          console.log(a[0])  
        }
        )()
        ))
      }

      const innerF = ()=> {
        
        arena[n+0][3]=0
        n+=1;
      }
      
      return innerF;
      }
    const uppy = update(arena);
    run < 2 ?
      build():
      uppy(); 
    
    return arena;
  }
  return inner;
}

const Arena = CreateArena(3,5);
console.log(Arena())
console.log(Arena());
console.log(Arena());
console.log(Arena());