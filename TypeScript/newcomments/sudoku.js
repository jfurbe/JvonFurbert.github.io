function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  let master = Array.from(Array(9).keys()).map(x=>x+1);
  //Search rows
  function loadRow(arr,i) {
    return arr[i];
  }
  //Search columns
  function loadCol(arr, i) {
    let col =[];
    arr.forEach(x=> {
      col.push(x[i]);
    })
    return col;
  }
  //Search sections
  function loadSection(arr, i) {
    let row = Math.floor(i/3.01) ;
    let col = Math.ceil(i%3.01)-1;
    let section = [];
   // console.log(i);
    row = Array.from(Array(3).keys()).map(x=>(row*3)+x);
    col = Array.from(Array(3).keys()).map(x=>(col*3)+x);
   
    row.forEach((r,i)=> {
      col.forEach((c,j)=> {
        section.push([arr[r][c],r,c])
      })
    })
    return section;
  }
  

  //console.log(puzzle);
  master.forEach(m=> {
  
    //console.log(m);
   let section = loadSection(puzzle,m);

    section.forEach(s=> {
      if (s[0] == 0){
      let row = loadRow(puzzle, s[1]);
      let col = loadCol(puzzle, s[2]);
      let sec = section.map(s=> s[0]);
        
      s[1]== 6 && s[2] == 8 && console.log(123)
      if (master.filter(x=> [...row, ...col, ...sec].includes(x)).length == 8) {
        puzzle[s[1]][s[2]] = master.filter(x=> ![...row, ...col, ...sec].includes(x))[0];
        sudoku(puzzle);
      }
    }
  })
  })
  
  return puzzle;
}

var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];


console.log(sudoku(puzzle));