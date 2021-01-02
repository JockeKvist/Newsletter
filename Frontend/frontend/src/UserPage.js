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
      this.setState({subscribed: !this.state.subscribed})
      fetch('http://localhost:3000/changesub/' + this.state.id,
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(subChange)
            })
              
    }

    render(){
      console.log(this.state.id);
        return(
            <div>
              <label>Välkommen {this.state.username}</label><br />
              <label>Premumenerar: {this.state.subscribed}</label><br />
              <button onClick={this.handleSub}>Change subscription</button>
            </div>
        )
    }
}

export default UserPage;