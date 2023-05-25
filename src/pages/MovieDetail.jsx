import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import RelatedCard from "../components/RelatedCard";
import Review from "../components/Review";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [modalOn, setModalOn] = useState(false);
    const {detailList, reviewList, recommendList, loading,genreList} = useSelector(state=>state.movie)
    const getMoviesDetail= () => {
        dispatch(movieAction.getDetail(id));
    }

    useEffect(()=>{
        getMoviesDetail();
    },[])
    // RelatedCard 컴포넌트 재렌더링시 genresList 값이 undefined 방지
    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[modalOn])

    

    
    
    return ( 
        <div style={{color:"white", }}>
            <div className="detail_container">
                <div className="title_Box">
                    <h1 style={{fontSize:"100px"}}>NETFLIX</h1>
                    <div  >
                        <span>{detailList?.title}</span>
                    </div>
                </div>
                    
                <div className="detail_Box">
                    <div className="detail_img"
                    style={
                {
                    backgroundImage:
            'url('+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailList.poster_path}`+')',        
        }
            }>
                
                    </div>
                    

                    <div className="detail_info">
                        <DetailCard detailList={detailList}/>
                    </div>
                    
                </div>
            </div>

            
            
                
                
                {reviewList && <div className="review_btnBox">
                    <button  onClick={()=>{
                        setModalOn(false);
                    }}>REVIEWS ({reviewList.results.length})</button>
                    <button onClick={()=>{
                        setModalOn(true);
                    }}>RELATED MOVIES ({recommendList.results.length})</button>
                    </div> }
                
                
                    {modalOn ? (
                        <div className="related_Card">
                            {recommendList &&
                            recommendList.results.map((item, i) => {
                                return (
                                <div key={item} className="related_CardBox">
                                    <RelatedCard item={item} />
                                </div>
                                );
                            })}
                        </div>
                        ) : (
                        <div className="review_Container">
                            {reviewList &&
                            reviewList.results.map((item, i) => {
                                return (
                                <div key={i} className="review_Box">
                                    <Review reviewList={item} />
                                </div>
                                );
                            })}
                        </div>
)}
                
                
                
                
                
            
        </div>
    );
}

export default MovieDetail;