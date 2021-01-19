// create your App component here
import React, {Component} from 'react'

class App extends Component{
  state = {p:[]}

render(){
  return (
    <div>
      {this.state.p.map((per, id) => <h1 key={id}>{per.name}</h1>)}
    </div>
  )
}

componentDidMount(){
  fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json())
  .then(({people}) => this.setState({ peopleInSpace: people }))
}

}
export default App
