import '../Css/dropdown.css';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterBox = ({withGenres, onGenreChange}) => {



    return ( 
        <Dropdown drop='down-centered' align={{md: "start"}}>
        <Dropdown.Toggle style={{width:250, height:50}}
                variant="danger" id="dropdown-basic">
            Filter
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark"
            style={{
            textAlign:"center",
            }}>
            <h3>Genres</h3>
            
            <div className='dropdown_Box'>
            {
                withGenres && withGenres.map((item,i)=>{
                    return <Dropdown.Item key={i} >
                        <button onClick={()=>onGenreChange(item.id)}>{item.name}</button>
                    </Dropdown.Item>
                    
                })

            }
            </div>
            
            
            
        </Dropdown.Menu>
    </Dropdown>
        
            
        
    );
}

export default FilterBox;