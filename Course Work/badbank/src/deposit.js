import Card, {UserContext} from './context';
import React, {useContext, useState} from 'react';


function Deposit(){
  const [ctx, setCtx] = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  const user = ctx.currentUser!='' ? ctx.users[ctx.currentUser] : ctx.users[0];
  const [status, setStatus] = useState('');

  function validate(field, label){
    if (field.match(/[A-Za-z]/)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  const handleDeposit = ()=> {
    user.balance = parseInt(user.balance) + parseInt(amount);
  }

  function clearForm(){
    if (!validate(amount,     'Enter Dollar Amount')) {
      return;
    } else{
      handleDeposit()
      setAmount(0);
    }
  }

  return (
    
    <Card
      bgcolor="dark"
      header="Deposit"
      status={status}
      body={(  
              <>
              Balance<br/>
              <input type="input" className="form-control" id="balance" value={user.balance}  /><br/>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
              <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit</button>
              </div>
              </>
      )
  }
  />
)}

export default Deposit;