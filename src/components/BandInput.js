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
    // clear the input area for uncontrolled forms:
    // this.myFormRef.reset()
  }

  render() {
    return(
      <div>
        <form 
        onSubmit={e => this.handleSubmit(e)}
        // this is for uncontroller forms only:
        // ref={(el) => this.myFormRef = el}
        >
          <input 
          type='text' 
          // you have to put value here or the input field won't clear:
          value={this.state.name}
          onChange={e => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// export default connect({addBand})(BandInput)
export default BandInput
