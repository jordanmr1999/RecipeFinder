import React, {useState,useContext} from 'react';
import "./Recipes.css";
import UserContext from "../User/User";



const Recipe = ({image,Name, cookT, prepT,ingredients,desc}) => {

    const user = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    if (!cookT)
    {
        cookT = "N/A";
    }
    if (!prepT)
    {
        prepT = "N/A";
    }

    return(
        <div className="main-container">
            <img src= {image} alt=""/>
            <h4> {Name} </h4>
            <small className="cook-info"> Cook Time: {cookT} </small>
            <small className="prep-info"> Preparation time: {prepT} </small>
            <button className="btn" onClick={() => {
                setIsOpen(!isOpen)
            }}>View More</button>
            <button className="btn" onClick={() => {
                user.favoriteItems.push(Name)
            }}>Add to Favorites</button>

            {isOpen && (
                <div className="ingredient-container">
                    <small>{desc}</small>
                    <ul className="ingredient-list">
                        {ingredients.map(ingredients => (
                            <li className="single-ingredient" key={Name}>{ingredients}<button onClick={() => {
                                user.groceryList.push(ingredients)
                            }}>+</button></li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Recipe;

