
import Badge from 'react-bootstrap/Badge';
import Modals from "./Modals";
import { useState } from "react";

const DetailCard = ({detailList}) => {
    
    const [modal,setModal] = useState(false);
    

    return ( 
        <div>
            {
                modal ? <Modals modal={modal} setModal={setModal}/> : null
            }
            

            <div>
                {
                    detailList.genres && detailList.genres.map((item,i)=>
                    <div key={i} className="badge">
                    <Badge  bg="danger" >
                        <p>{item.name}</p>
                    </Badge>
                    </div>
                    
                    )
                }
                
                <hr />
                <h1 className="title">{detailList.title}</h1>
                <hr />
                
                <div className="card_Info">
                    <span>인기도 : {detailList.popularity}</span>
                    <span>평점 : {detailList.vote_average}</span>
                    <span> 연령제한 : { 
                        detailList.adult == false ? "under 18" : "청불"
                        }</span>
                </div>
                <hr />
                <p className="P_tag">{detailList.overview}</p>
                <hr />
                <div>
                    <p>예산 :  ${detailList.budget}</p>
                    <p>수익 : ${detailList.revenue}</p>
                    <p>개봉일 : {detailList.release_date}</p>
                    <p>영화시간 : {detailList.runtime}분</p>
                    <hr />
                    <button
                    onClick={()=>{
                        setModal(true);
                    }} >예고편 보기</button>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;