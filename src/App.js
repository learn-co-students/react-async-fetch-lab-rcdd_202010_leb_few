// create your App component here
import React from 'react';

 export default class App extends React.Component{
   
   state = {
     peopleIn :[]
   }
   
   componentDidMount(){
     fetch('http://api.open-notify.org/astros.json')
     .then(res => res.json())
     .then(data =>{this.setState({
       peopleIn:data.people
     })
     })
   }
   
   render(){
    return(
       <div>
                {this.state.peopleIn.map(person => person.name )}
            </div>
      )


  }
} 
 