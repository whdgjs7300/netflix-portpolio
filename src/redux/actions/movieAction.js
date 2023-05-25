import api from "../api";



const API_KEY=process.env.REACT_APP_API_KEY

// 홈페이지 별
function getMovies() {
    // 미들웨어는 함수안에 함수를 return함
    // axios는 프론트, 백에서 둘다 쓰임(node.js에서 fetch가 쓰이지 않음)
    // API키 보호를 위해 .env 파일을 만들어 보관(중요한 정보 보호)
    // 환경설정을 위해 .gitignore 파일에 .env 파일을 생략시킴
    // api를 동시에 처리하고 싶을 때  promise
    return async(dispatch)=>{
        // 로딩스피너 
        try{
            dispatch({type:"GET_MOVIES_REQUEST"})
        // 첫번째 api 설정
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        // 두번째 api 설정
        const topRateApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        // 세번째 api 설정
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        // 장르별 api 설정
        const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        
        
    //  let url3 = "/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
    // 매개변수로 배열을 받음    
    // 여러가지의 api를 한번에 호출
    // await를 위에 호출할 때 쓰지않고 promise.all함수를 통해 한번에 통일시킴
    
    let [popularMovies, topRatedMovies, upComingMovies, genreList,] = 
    await Promise.all([popularMovieApi, topRateApi, upComingApi, genreApi, ])
    
        dispatch({
            type : "GET_MOVIES_SUCCESS",
            payload : 
            {
            popularMovies : popularMovies.data,
            topRatedMovies : topRatedMovies.data,
            upComingMovies : upComingMovies.data,
            genreList : genreList.data.genres,
            }
        })
        }catch(error){
            // 에러핸들링하는곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
        
    }
    
}
// 디테일 페이지 별

function getDetail(id) {
    return async(dispatch)=> {
        try {
        dispatch({type:"GET_MOVIES_REQUEST"})
     // id별 api 설정
        const detailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    //  Review별 api 설정
        const reviewApi = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    //  추천영화 api
        const recommendApi = api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
    //  예고편 api
        const videoApi = api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        let [detailList,reviewList, recommendList, videoList] =
        await Promise.all([detailApi, reviewApi, recommendApi, videoApi])
        
        dispatch({type : "GET_DETAIL_MOVIES", payload:
        {
        detailList : detailList.data, 
        reviewList : reviewList.data,
        recommendList : recommendList.data,
        videoList : videoList.data,
        }})
        }catch(error) {
        // 에러핸들링하는곳
        dispatch({type: "GET_MOVIES_FAILURE"})
        }


    }

}

// movie  페이지별

function getFilteredMovies(withGenresID,sortBy,pageNum,keyWord) {
    return async(dispatch) => {
        try{
            dispatch({type: "GET_FILTER_MOVIE_REQUEST"})
            const fillterApi = api.get(
                `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&region=US${
                    // 장르 id값이 있거나 없을 때
                    withGenresID ? `&with_genres=${withGenresID}` : ""
                }${// 정렬 값이 있거나 없을 때
                    sortBy ? `&sort_by=${sortBy}` : "&sort_by=popularity.desc"
                }${// 페이지 별
                    pageNum ? `&page=${pageNum}` : "&page=1"
                }${// 검색 keyWord 별
                    keyWord ? `&with_text_query=${keyWord}` : ""
                }
            
            `)
    
            const withGenresApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [filterData,withGenres] = await Promise.all(
                [fillterApi,withGenresApi])

            dispatch({type : "GET_FILTER_MOVIE_SUCCESS", payload : {
                filterData : filterData.data,
                withGenres : withGenres.data.genres,
            }})
            
        }catch {
            dispatch({type : "GET_FILTER_MOVIE_FAILURE"})
        }
    } 
    
    

}

export const movieAction = {
    getMovies, getDetail, getFilteredMovies,
}