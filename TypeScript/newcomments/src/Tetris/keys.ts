
    //init object globally
export const keys = ()=> {

const inner = {
    getKeyAndMove : function getKeyAndMove(e: any) {

        var key_code = e.code;
        var arr = <[number,number]>[0,0];
        switch (key_code) {
            case 'ArrowLeft': //left arrow key
                arr = [-1,0];
                break;
          /*  case 'ArrowUp': //Up arrow key
                arr = [0,-5];
                break;*/
            case 'ArrowRight': //right arrow key
                arr = [1,0];
                break;
            case 'ArrowDown': //down arrow key
                arr = [0,1];
                break; 
        }
        return arr;
    },

  }
  return inner;
  }