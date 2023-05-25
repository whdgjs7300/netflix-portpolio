
const Review = ({reviewList}) => {

    
    
    
    return ( 
        <div >
            <div >
                <h3>
                    {reviewList?.author}
                </h3>
                <p>
                    {reviewList?.content}
                </p>
                <hr />
            </div>
        </div>
    );
}

export default Review;