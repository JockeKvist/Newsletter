import React from 'react';
import App from './App';


class UserPage extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={ id:this.props.id, subscribed:this.props.subscribed  }
    }
    
    handleSub()
    {
      
      var subChange = { id: id, subscribed: !subscribed }
      fetch('http://localhost:3000/changesub/' + this.state.id,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subChange)
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
                <form onSubmit={this.handleSub}>
                    <input type="submit" value="Change subscription" />
                </form>
            </div>
        )
    }
}

export default UserPage;