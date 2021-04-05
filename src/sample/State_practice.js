import React from 'react';

class App extends React.Component{

  //요소 중에서 고정되어 있지만 향후 변경되는 요소의 경우, 먼저 state로 상태를 지정
  // 이후 특정한 조건이 진행됨에 따라 상태가 변경되면 setState로 변경
  // state는 객체 형태로 지정

  // html내에서는 button onClick="plus()"이렇게 썼으나, jsx안에서는 {this.plus}이런 식으로 입력 
  state = {
    count:0,
  };
  // plus(){
    // console.log('plus');
    // this.state.count=1;
  // }
  // 일반 함수의 경우 클래스 범위의 this 데이터가 바인딩(같은 함수라는 것을 연결) X
  // so, 부모클래스의 this를 함수 안에서 사용해야 할 경우 화살표 함수 사용해야. 
  plus = () =>{
    // this.state.count=1; -- setState 사용해줘야.
    this.setState({count:this.state.count +1});
  }
  
  // minus(){
  //   console.log('minus');
  // }

  minus= () =>{
    this.setState({count:this.state.count -1});
   
  }
  render(){
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        
        <button onClick={this.plus}>+ Plus</button>
        <button onClick={this.minus}>- Minus</button>
      </div>
    );
  }
}



export default App;