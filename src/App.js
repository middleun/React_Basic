import React, {Component} from 'react';

class Greeting extends Component{
  // component에서 상속받은 greeting
  // render함수의 내부에 return값은 반드시 하나의 태그로 감싸져야 함!
  render(){
    return(
      <div>
        <p>Hello Again React</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      <Greeting/>
      
    </div>
  );
}

export default App;
