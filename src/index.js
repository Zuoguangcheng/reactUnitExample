import React, { PureComponent } from 'react'

class Index extends PureComponent {

  handleClick = () => {
    console.log(2222222222);
  }

  render() {
    return (
      <div className="test div" onClick={this.handleClick}>
        1
      </div>
    )
  }
}

export default Index


