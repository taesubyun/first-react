import React, { Component } from "react";

class DogHealth extends Component {
  render() {
    return (
      <>
        <div>이 강아지의 건강상태는 {this.props.title}입니다!</div>
      </>
    );
  }
}
export default DogHealth;
