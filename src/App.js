import React from 'react';
import axios from "axios";
import Movie from './components/Movies'

class App extends React.Component{
  // 삼항비교연산 : isLoading이 true면 "Loading"실행/false면 "All~"실행
  
  state = {
    isLoading:true,
    movies:[],
  };
// async,await :getMovies가 비동기(async)라는 것을 알려주고,
// movies는 axios가 데이터를 가져올 때까지 기다림(await)
// console.log(movies.data.data.movies)->const{data:{data:{movies},},}=await 이런식으로 수정
  getMovies = async()=>{
    const {
      data:{
        data:{movies},
      },
    }    = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(movies);

    this.setState({isLoading:false, movies:movies});

  }
  
  // 렌더링 후에 실행, 3초후에 false가 되도록
  componentDidMount(){
    // setTimeout(function(){
    //   this.setState({isLoading:false});
    // },3000)
    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // },3000);
    this.getMovies();
    
  }

  render(){
    // const isLoading = this.state.isLoading;
    const {isLoading, movies} = this.state;
   
    return (
      // 최상위 태그는 비워놔도 됨. <></>

      <div>
        {isLoading ? "Loading....": movies.map((movie=>{
          console.log(movie);
          return <Movie 
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          des={movie.summary}/>;
        }))}
      </div>
    );
  }
}


export default App;