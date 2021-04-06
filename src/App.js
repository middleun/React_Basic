import React from 'react';
import axios from "axios";
import Movie from './components/Movies'
import './App.css';
import './Components/Movies.css';


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
    }    = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
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
    // this: app이라는 component범위 안의 모든 것 포함
    const {isLoading, movies} = this.state;
   
    return (
      // 최상위 태그는 비워놔도 됨. <></>

      <section className="container">
        {isLoading ? (
        <div className="loader"> Loading....</div>
        ) : (  
        <div className="movies">
          {movies.map((movie)=>(
            <Movie 
            key={movie.id}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}
            poster={movie.medium_cover_image}
            detail={movie.summary}/>
          ))};
         
  
        </div>
        )}        
          
        
      </section>
    );
  }
}


export default App;