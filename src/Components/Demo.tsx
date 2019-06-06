import React, { Component } from 'react';

interface IDemoProps {
  // prop1: number;
  // [propName: string]: any
}

interface IDemoState {
  stateProp1: number;
  // [propName: string]: any;
}

export default class Demo extends Component<IDemoProps, IDemoState> {
  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     stateProp1: 0,
  //     another: 'hello'
  //   };
  // }

  state: IDemoState = {
    stateProp1: 0
  };

  render() {
    return (
      <div>
        <h3>Hello from Demo component...</h3>
      </div>
    );
  }
}
