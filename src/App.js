import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

// 개발 순서
// 1. 페이지 수[홈페이지, 무비페이지, 디테일 페이지] ㅇ
// 2. 홈페이지에서 배너를 볼 수 있다. ㅇ
// 3. 3가지 섹션별(popular, top rated, upcomming) 영화를 볼 수 있다. ㅇ
// 4. 각 각 영화에 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부를 알 수 있다. ㅇ
// 5. 영화를 슬라이드로 넘기면서 볼 수 있다. ㅇ

// 6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.(포스터,제목,줄거리,점수,인기도,청불,예산,이익,러닝타임 등등....) ㅇ
// 7. trailer를 누르면 trailer를 볼 수 있다. ㅇ
// 8. 영화별 리뷰, 관련된 영화도 볼 수 있다. ㅇ

// 9. 영화 검색을 할 수 있다. ㅇ
// 10. 영화 정렬할수 있다. ㅇ
// 11. 영화를 필터링 할 수 있다.  ㅇ


function App() {
  return (
    <div style={{
      backgroundColor:"black",
      width: "100%",height: "100%",
      marginBottom : "0",
    }}>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/movies/:id' element={<MovieDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
