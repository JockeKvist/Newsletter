import React from 'react';
import './App.css';
import UserPage from './UserPage';

class App extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={ userName:"", password:"" }
      this.onChange = this.onChange.bind(this);
    }
    onChange = e => 
    {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin(e)
    {
      const data = new FormData(e.target);
      var loginUser = { username: data.get("userName"), password: data.get("password") }
      fetch('http://localhost:3000/users',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginUser)
            }).then(response => 
            {
              if (response.username == login.username)
              {
                return(
                <UserPage response/>
                )
              }
              else
              {<App />}
            }
              )
    }
    render(){
      return(
       <div>
         <form onSubmit={this.handleLogin}>
         <input type="text" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="Username" required /><br /><br />
         <input type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br /><br />
         <input type="submit" value="Login" />
         </form>
       </div>
      );
    }
}




export default App;
