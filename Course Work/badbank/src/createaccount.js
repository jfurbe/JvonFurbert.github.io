import React from 'react';
import Card, {UserContext} from './context';


function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [ctx, setCtx] = React.useContext(UserContext);  
  
  console.log(ctx)
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (label=='password' && field.length<9){
        setStatus('Error: Password Too short');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    setCtx(oldctx=> ({...oldctx, users : [...oldctx.users, {name,email,password,balance:100}]}))
    setShow(false);
  }    
  console.log(ctx)
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <div className="d-flex justify-content-center">
              {name.length<3 ?
              <button disabled type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              :
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              }            
              </div>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div className="d-flex justify-content-center">
              
              <button  type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </div>
              </>
            )}
    />
  )
}

export default CreateAccount;