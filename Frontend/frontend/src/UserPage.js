import React from 'react';



class UserPage extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={ id:this.props.id,
        username:this.props.username,
        subscribed:this.props.subscribed  }
      this.handleSub = this.handleSub.bind(this);
      
    }
    


    handleSub()
    {
      
      var subChange = { id: this.state.id, subscribed: !this.state.subscribed }
      this.setState( prevState => ({subscribed: !prevState.subscribed}));
    
      fetch('http://localhost:3000/changesub/' + this.state.id,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subChange)
            })
              

    }

    render(){
      console.log(this.state.username)
      console.log(this.state.subscribed)
      console.log(this.state.id);
        return(
            <div>
              <label>Välkommen {this.state.username}</label><br />
              {this.state.subscribed ? <label>Du prenumererar på newsletter</label> : <label>Du prenumererar inte på newsletter</label>}
              <button onClick={this.handleSub}>Change subscription</button>
            </div>
        )
    }
}

export default UserPage;