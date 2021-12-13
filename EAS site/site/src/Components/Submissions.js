import React, {useState} from 'react';
import { UserContext } from "../Util/UserProvider";

const Submissions = ()=> {
const [ state, dispatch ] = React.useContext(UserContext)
const [print, setPrint] = useState(state)

console.log(print)
   return (
      <>
      <h1></h1>
      </>
   )
}

export default Submissions;