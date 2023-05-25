import '../Css/sortBoxcss.css';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';


const SortBox = () => {
    const dispatch = useDispatch();
    const { sortBy } = useSelector((state) => state.filter);

    return ( 
        <Dropdown autoClose='true' >
            <Dropdown.Toggle
                style={{width:250, height:50}}
                variant="danger" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark"
            style={{width:250,height:350,
            textAlign:"center",
            }}>
                <h3 style={{marginTop : "10px"}}>Sort Results By</h3>
                <hr />
                <Dropdown.Item 
                onClick={() => dispatch({type: "SET_SORT_BY", payload : "popularity.desc"})}
                active={sortBy === "popularity.desc"}
                
                >
                Popularity Descending
                </Dropdown.Item>
                <Dropdown.Item
                onClick={() => dispatch({type: "SET_SORT_BY", payload : "popularity.asc"})}
                active={sortBy === "popularity.asc"}
                >
                Popularity Ascending
                </Dropdown.Item>
                <Dropdown.Item 
                onClick={() => dispatch({type: "SET_SORT_BY", payload : "vote_average.desc"})}
                active={sortBy === "vote_average.desc"}
                >
                Rating Descending
                </Dropdown.Item>
                <Dropdown.Item 
                onClick={() => dispatch({type: "SET_SORT_BY", payload : "vote_average.asc"})}
                active={sortBy === "vote_average.asc"}
                >
                Rating Ascending
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
    );
};

export default SortBox;