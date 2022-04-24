import React, {useEffect,useState,useContext} from 'react';
import UserContext from "../User/User";
import "./Search.css";
import RecipeCard from "../RecipeCard/RecipeCard";
// import RC from "../RecipeCard/RecipeFetch";

function SearchBar(props) {
    const user = useContext(UserContext);

    const [search, setSearch] = useState('');

    const [data, setData] = useState([]);

    // const [filterData,setFilterData] = useState(data);

    useEffect( () => {
        getRecipes();
    }, []);

    const getRecipes = () => {
        fetch("./recipes.json")
            .then(function(res){
                return res.json()
            })
            // .then(text => console.log(text));
            .then(function(data){
                setData(data)
            })
            .catch(function(err){
                console.log(err, 'error')
            },[])

    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <UserContext.Provider value={user}>
            <div className="search">
                <form className="searchInput">
                    <input type="text" name="searchBar"
                           onChange={ handleChange }
                           placeholder={"Find Recipe.."}
                           value={search}/>
                    <div className="searchIcon"> </div>
                </form>
                <div className="searchResult">
                    <RecipeCard value={search} data={data}/>
                </div>
            </div>
        </UserContext.Provider>
    );

}

export default SearchBar;