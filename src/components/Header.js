import React, {Component} from 'react';


class Header extends Component{
    //  클래스 내부는 반드시 render함수로 감싸야 한다
    // 클래스 내부의 멤버 함수는 function키워드를 사용해서는 안된다
    render(){
      // return의 값인 JSX는 태그가 하나일 때는 () 사용 X, 자식태그 포함할 때는 () 사용
      // 최상위 태그는 a모든 태그를 포함하는 하나뿐. 형제태그 사용 X
      // jsx는 태그 안쪽의 주석 입력 방식이 html과 다름
      return(
        <header>
          <h1>This is Header Area</h1>        
        </header>      
      );
    }  
}

export default Header;
