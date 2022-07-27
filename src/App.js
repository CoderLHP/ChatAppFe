import React, {useState} from 'react';
import LoginForm from './components/Login'

function App () {
    const testUser = {
      username: 'test',
      password: 'test'
    }

    const [user, setUser] = useState({username: ""});
    const [error, setError] = useState("");

    const Login = details => {
      console.log(details);

      if(details.username == testUser.username && details.password == testUser.password) {
        console.log("Logged in!");
        setUser({
          username : details.username
        });
        setError("");
      } else {
        setError("Invalid username or password!");
      }
    }

    const Logout = () => {
      setUser({username: ""});
    }

    return (
      <div className='App'>
        {(user.username != "") ? (
          <div className='ChatRoom'>
              <h2>Chuyen huong sang Chat Room, {user.username}</h2>
              <button onClick={Logout}>Log Out</button>
          </div>
        ) : (
          <LoginForm Login = {Login} error = {error}/>
        )}
      </div>
    )
}

export default App;
