// Add BandInput component
import React, { Component } from 'react'
// import {connect} from 'react-redux'

class BandInput extends Component {

  state = {name: ''}

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
          type='text' 
          onChange={e => this.handleChange(e)}>
          </input>
        </form>
      </div>
    )
  }
}

// export default connect({addBand})(BandInput)
export default BandInput
