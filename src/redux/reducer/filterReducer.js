let initialState = {
    keyWord : "",
    loading : true,
    sortBy : "",
    withGenres: "",
    filterData : {},

};


function filterReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FILTER_MOVIE_SUCCESS" :
            return {...state, loading : false, filterData : payload.filterData, 
                withGenres : payload.withGenres}
        case "GET_FILTER_MOVIE_REQUEST" :
            return {...state, loading : true}        
        case "GET_FILTER_MOVIE_FAILURE" : 
            return {...state, loading : false}     
        case "GET_KEYWORD" : 
            return {...state, keyWord : payload.keyWord}
        case "SET_SORT_BY" :
            return {...state, sortBy : payload,
            };
        default :
            return {...state};    
    }
}

export default filterReducer;