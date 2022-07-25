import React, {useState} from 'react'

function LoginForm({Login, error}) {
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
                {/* <label htmlFor='username'>Username:</label> */}
                <input type='text' name='username' placeholder='Username' id='Username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
            </div>
            <div className='form-group'>
              {/* <label htmlFor='password'>Password:</label> */}
              <input type='password' name='password' id='password' placeholder='Password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            {(error != "") ? (<div className='error'>{error}</div>) : ""}
            <input type= 'submit' value = 'Log In'/>
        </div>
    </form>
  )
}

export default LoginForm