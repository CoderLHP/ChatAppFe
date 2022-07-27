import React, {useState} from 'react'

function showPassword() {
  var password = document.getElementById('password');
  if(password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}

function Login({Login, error}) {
  const [details, setDetails] = useState({username: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            <div className='form-group'>
              <input 
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                size='24'
                required
                autoFocus
                onChange={e => setDetails({...details, username: e.target.value})}
                value={details.username}
              />
            </div>
            <div className='form-group'>
              <input 
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                size = '24'
                required
                onChange={e => setDetails({...details, password: e.target.value})}
                value={details.password}
              />
            </div>
            <div className='form-group'>
              <input 
                type='checkbox'
                name='showPassword'
                id='checkbox'
                onClick={e => showPassword()}/>
              Show Password
            </div>
            
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <input type= 'submit' value = 'Log In'/>
        </div>
    </form>
  )
}

export default Login