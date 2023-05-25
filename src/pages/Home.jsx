import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";



const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upComingMovies, loading}= 
    useSelector(state=>state.movie);
    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[]);
    // useEffect 특성상 밑에 값이 undefined가 뜸 
    // 조건부 렌더링을 꼭해야함! (로딩스피너를 안할 때)
    // loading이 true면 로딩스피너를 보여주고 loading이 false면 데이터를 보여줌
    // 데이터 도착 전이 true : movieAction으로 
    // 데이터 도착 후 false Or Error
    
    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div style={{color : "white"}}>
            <Banner movie={popularMovies.results[0]}/>
            <div style={{margin:"20px"}}>
                <h1 style={{textAlign:"center",
                fontSize :"40px", fontWeight : "700"
            }}>popular Movie</h1>
            </div>     
    
                <MovieSlide movies={popularMovies}/>
            
            <div style={{margin:"20px"}}>
                <h1 style={{textAlign:"center",
                fontSize :"40px", fontWeight : "700"
            }}>Top rated Movie</h1>
            </div>
            
                <MovieSlide movies={topRatedMovies}/>
            
            <div style={{margin:"20px"}}>
                <h1 style={{textAlign:"center",
                fontSize :"40px", fontWeight : "700"
            }} >upcoming Movie</h1>
            </div>
            
                <MovieSlide movies={upComingMovies}/>
        </div>
    );
}

export default Home;