import React from 'react';
import './App.css';
import UserPage from './UserPage';
import RegisterNewUser from './RegisterNewUser';


class App extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={ userName:"", password:"", id:"", subscribed: false, newUser: false }
      this.onChange = this.onChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.logout = this.logout.bind(this);
      this.registerNewUser = this.registerNewUser.bind(this);
      
    }
    onChange = e => 
    {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin(e)
    {
      e.preventDefault()
      const logindata = new FormData(e.target);
      var loginUser = { username: logindata.get("userName"), password: logindata.get("password") }
      console.log(loginUser);
      fetch('http://localhost:3000/users',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginUser)
            }).then(response => 
            {
              response.json().then(data => {
              this.setState({id: data.id, subscribed: data.subscribed, userName: data.username});
              })
            })               
    }

    logout()
    {
      this.setState({id: null})
    }

    registerNewUser()
    {
      this.setState({newUser: !this.state.newUser})
    }
    render(){

      if(this.state.newUser)
      {
        return(
          <div>
        <RegisterNewUser />
        </div>
        )
      }
     
      if(this.state.id){
      return(
        <div> 
       <UserPage id={this.state.id} username={this.state.userName} subscribed={this.state.subscribed}/>
       <button onClick={this.logout}>Logout</button>
       </div>
       )
      }

      
      return(
       <div>
         <form onSubmit={this.handleLogin}>
         <input type="text" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="Username" required /><br /><br />
         <input type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br /><br />
         <input type="submit" value="Login" />
         </form>
         <button type="button" onClick={this.registerNewUser}>New user</button>
       </div>
      );
    }
}




export default App;
