import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

// function Greeting(){
//   // jsx : 2가지 방법으로
//   // - class형태 
//   // - 함수형태
//   // component에서 상속받은 greeting
//   // render함수의 내부에 return값은 반드시 하나의 태그로 감싸져야 함!
//   // render(){
//     return(
//       <div>
//         <p>Hello Again React</p>
//       </div>
//     );
//   // }
// }



function App() {
  return (
    <div className="App">
      <Header />     
      <Section />
      <Footer />      
    </div>

  );
}

export default App;
// 함수에서의 return과 같은 역할. export default로 끝내줘야.