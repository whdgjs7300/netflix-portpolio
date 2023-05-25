import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {
    const {genreList} = useSelector(state=>state.movie);
    const navigate = useNavigate();
    // URL 값 중에 null값이 있어 해당 코드 수정
    let imageUrl = item.poster_path ? `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}`
    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEXz9Pbr7O+5vsq2u8j29/jv8PPf4efm6OzZ3OLj5eny8/X4+fq3vMnu7/LR09rIy9PJzNTBxM2+wcrU1tza3eOvs7/7UlVAAAAEC0lEQVR4nO3aC2+jOBiFYdt8YMDgC6T//6+ubdL0oqQrrXC7B513pGaa9MIzBhvIKKsvntLq6lGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiB+F+FGIH4X4UYgfhfhRiF9jocw/p6Tt71ethXNYuh9bYtPfX2oqlLT8m7ALrUexqbDvFj/81OSXbm65BaqxcO06W4ZI5MVAydR1fcstUL8gzA+u169mlIsIQz7gxufESwhdWowx3fD0K64gFN2ZUvoYRPmYXC4hnA6heQjzM/r9k0sI+0P4WPcqeb1/dgWhkliIdcop3cf0TryEUMluumTvg/bYaY8d9RrCsuB/2UVrSyVeRPjRB/C+o15HKNPx8RPQLOuFhDKUa4ivwEK8ynlpAZoluG9AUxfLSwgLMI9YPXv7NIJ3IfzV0/ej7zGAKeUX5+Chr4CPFX94Crw5p3VZSVrfqml/1mafAU1wPvX16nhKU8tt+MUz768HoXfdYvrjKj82HcU/EhpTZ9b+OA1vuQ2/InxarMRyjDZeLtrPNPPaP2ud6yq5NB7B3xjD55WX3V7XxJZboJrfLzXxNj5rmMsks+Rlv/VO2vied+xe3fP2UieZG/hxqJR/Oo/mjjm2P2bUppvQ+r2nVze7lZiuTDJlqm174vZ37x8Ooc6iMoW22/CH75DKt8dG8T1g/CjEj0L8ThbmFb6ea+teXP7rPNkpr3paJF9K5NcmNQ9TXR3KeYz0vei5bkO9/12+0f788/9D5wqnbXNJm7SPNnZJxz6FFEWS90aPfnP5j53KO4muc2XNT0NcnX4T53sl221LOrlTN0idLJTkhinYUeJoXXBz1F0Io4iPceu1NTfjfAhDHtwUghav7Wbm6HWYYham3TqXTh/E04XDXTi/3VQsBWu9T/uerF630UfvB9nXXo9KhejGyddmcQhCNSQjQW/Rj9ZItHEuGy8yhmD6zcchufx5cr3f3/Z9znuvjc5bPWofw57GLfjw/95LyyVDHkcRt+dLd8l7aWblvTR4H/vy9Cad93t+KR+R+WP+p3hb80G6lUmmPJUH8vSz1PNXi3r3U5frhtnmwdpveWj33evjtfzE/v5VMvpRpmkc9/XxjeffO21+fSifHtSXd0vfn375P6bOiSs+fhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIXz/AB9sJRWpTc1OAAAAAElFTkSuQmCC';
    return (
        
        <div onClick={()=>navigate(`movies/${item.id}`)}
        className="movieCard"
        style={{backgroundImage:
        'url('+`${imageUrl}`+')',
        
        
        }}>


        <div className='overlay'>
            <div className="card_title">
                <h1 >{item.title}</h1>
            </div>
            
            
            <div style={{
                
            }}>{item.genre_ids.map(id=><Badge key={id}
            bg="danger">
                {// 장르별 id와 item의 장르 id와 같은 값을 찾음
                genreList.find((item) =>item.id == id).name}
            </Badge>)}
            
            </div>
            <div>
                <span>평점 : {item.vote_average}</span> <br/>
                <span>연령제한 : {item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div>
            
        </div>
    );
}

export default MovieCard;