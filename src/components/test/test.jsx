import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props){
    super(props)

    this.state = {isHot:true}
  }

  render() {
    const { isHot} = this.state
    return (
      <div>
        <h2>今天天气很{isHot?'炎热':'凉爽'}</h2>
      </div>
    )
  }
}
