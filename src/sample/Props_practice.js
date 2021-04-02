// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
// PropTypes : react에서 타입 체크를 위해 사용되는 라이브러리

// 함수형일 때는 바로 return
function Movie({title, ranking, picture}){
  // console.log(typeof ranking);
  return(
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>ranking : {ranking}</p>
      <img src={picture} alt={title}/>
    </div>
  );

}

const arr=['a','b','c','d'];
// arr.map(function(elm){
//   console.log(elm);
//   return 0;
// });
// arr.map((elm)=>{
//   console.log(elm);
//   return 0;
// });

// json 객체 생성
const myMovies=[
  {
    id:1,
    title:"Wonder",
    ranking:4,
    image:"https://i.pinimg.com/originals/6d/bb/0b/6dbb0ba0ebed236ca74e4dae47a29abd.jpg"
  },
  {
    id:2,
    title:"Begin Again",
    ranking:3,
    image:"https://lh3.googleusercontent.com/proxy/NXH3Da_YN-QDePYxdnerAO0nUED7aLoDREsRduOv3-B_fowTSmnNpUKerJSas9uTNUMJAWMakUZzDEJTsBe28Ur588j_scyvVCql7D2nfSOssnYXUrzGCAJA2BDU9SkavhShXU5us9wNWN148m5Lo8zfag9Gp07KhDTqhD12xc6picDFRVgOdg"
  },
  {
    id:3,
    title:"LaLa Land",
    ranking:4.5,
    image:"https://i.pinimg.com/originals/51/11/d6/5111d6fdbb68ef5e65713480142c903a.jpg"
  },
  {
    id:4,
    title:"Walter",
    ranking:5,
    image:"https://images-na.ssl-images-amazon.com/images/I/81WY2Uril+L.jpg"
  },
]
function App() {
  return (
    <div className="App">
      <h2>My Movie</h2>
      {myMovies.map((movies)=>(
        <Movie title={movies.title} ranking={movies.ranking} picture={movies.image} key={movies.id}/>
      ))};   
      
        
    </div>
  );
}
Movie.propTypes = {
  title:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  ranking:PropTypes.number.isRequired,
}

export default App;
// 함수에서의 return과 같은 역할. export default로 끝내줘야.