import React, { Component } from "react";
import Dog from "./Who/Dog";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [
        { name: "아롱", breed: "siba", from: "uk" },
        { name: "해피", breed: "jindo", from: "korea" },
        { name: "누룽이", breed: "bulldog", from: "uk" },
        { name: "뚱이", breed: "french", from: "france" },
      ],
      dog: { title: "아주 좋은 상태" },
    };
  }
  render() {
    return (
      <div>
        <div>
          {this.state.dogs.map(({ name, breed, from }) => {
            return (
              <Dog
                name={name}
                gyeonjong={breed}
                from={from}
                desc="Hello~"
              ></Dog>
            );
          })}
          <div>
            <Dog title={this.state.dog.title}></Dog>;
          </div>
        </div>
      </div>
    );
  }
}
export default App;
