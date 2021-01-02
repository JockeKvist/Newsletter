import React from 'react';

export default class RegisterNewUser extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={ userName:"", password:"", email:"", subscribed: false}
    }

    onChange = e => 
    {
      this.setState({ [e.target.name]: e.target.value })
    }

    registerNewUser(e)
    {
      const data = new FormData(e.target);
      var newUser = { username: data.get("userName"), password: data.get("password"), email: data.get("email"), subscribed: data.get("subscribed"), id: 1 }
      fetch('http://localhost:3000/registerNewUser',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
    }
    render(){
      return(
       <div>
         <form onSubmit={this.registerNewUser}>
         <input type="text" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="Username" required /><br /><br />
         <input type="text" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required /><br /><br />
         <input type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required /><br /><br />
         <input type="checkbox" name="subscribed" value={this.state.subscribed} onChange={this.onChange} required /> <label>Newsletter</label> <br /><br />
         <input type="submit" value="Register" />
         </form>
       </div>
      );
    }
}
