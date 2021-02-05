import React, { Component } from "react";
import DogHealth from "./DogHealth";

class Dog extends Component {
  render() {
    return (
      <>
        <div>안녕하세요</div>
        <div>이 강이지의 이름은 {this.props.name}입니다.</div>
        <div>이 강아지의 견종은 {this.props.gyeonjong}입니다.</div>
        <div>
          <DogHealth title={this.props.title}></DogHealth>
        </div>
      </>
    );
  }
}
export default Dog;
