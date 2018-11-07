import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Interface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      meaning: []

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit (event) {
      $.ajax({
        type: 'POST',
        url: '/word',
        data: {
          word: this.state.word,
          meaning: this.state.meaning
        },
        success: (data) => {
          this.setState({bakeries: data})
          console.log('success', data)
        },
        error: (err) => {
          console.log(data)
          console.log('err', err)
        }
      })
      event.preventDefault()
    }

    handleChange(event) {
      this.setState({word: event.target.value});
    }


  render (){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
              <label>
                Word:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
             
            </form>
      <br />
      {this.state.meaning.map(function(item,i){
        console.log(item)
      })}
      </div>
    )
  }
}

export default Interface
