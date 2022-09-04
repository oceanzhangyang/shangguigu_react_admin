import React, { Component } from 'react'

export default class Test extends Component {

  state = {isHot:true}

  changeWeather = ()=>{
    // console.log(this)
    const {isHot} = this.state
    this.setState({isHot:!isHot})
  }

  render() {
    const { isHot} = this.state
    return (
      <div>
        <h2 onClick={this.changeWeather}>今天天气很{isHot?'炎热':'凉爽'}</h2>
      </div>
    )
  }
}
