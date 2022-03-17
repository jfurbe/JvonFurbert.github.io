import React, {useState, useContext} from 'react';
import Card, {UserContext} from './context';

function Login(){
  const [ctx, setCtx] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const users = ctx.users;
  const [status, setStatus] = useState('');

  function validate(email, password, label){
    if (users.filter(x=> x.email==email && x.password == password).length != 1) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  const handleLogin = ()=> {
    users.forEach((x,i)=> email==x.email && (ctx.currentUser = i))
    setStatus('Login Successful')
    console.log(ctx);
  }

  function clearForm(){
    if (!validate(email, password,     'Username/Password Combination Not Found')) {
      return;
    } else{
      handleLogin()
      setEmail('');
      setPass('');
    }
  }

  return (
    
    <Card
      bgcolor="dark"
      header="Login"
      status={status}
      body={(  
              <>
              Email<br/>
              <input type="input" className="form-control" id="user" placeholder="Enter UserName" value={email}  onChange={e => setEmail(e.currentTarget.value)}/><br/>
              PassWord<br/>
              <input type="password" className="form-control" id="pass" placeholder="Enter PassWord" value={password} onChange={e => setPass(e.currentTarget.value)}/><br/>
              <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-light" onClick={clearForm}>Login</button>
              </div>
              </>
      )
  }
  />
)}

export default Login;