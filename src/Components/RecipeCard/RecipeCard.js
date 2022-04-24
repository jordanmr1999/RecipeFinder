import React, {useContext} from "react";
import UserContext from "../User/User";
import Recipe from "./Recipes";


let init = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

const RecipeCard = ({value, data}) => {

    //defining user so we can use their data
    const user = useContext(UserContext);

    return (
        <UserContext.Provider value={user}>
            <div className="recipeData">
                {
                    //mapping through data passed from search component
                    data? data.map(
                        function(items) {
                            //Live search conditions for what the user enters
                            if((items.name.toLowerCase().includes(value.toLowerCase()) && value !== '')
                                || (items.description.toLowerCase().includes(value.toLowerCase()) && value !== '')
                                || (items.ingredients.toString().toLowerCase().includes(value.toLowerCase()) && value !== ''))
                            {
                                return (
                                    //sending information to the actual recipe card
                                    <Recipe
                                        key = {items.name}
                                        image = {items.image}
                                        Name = {items.name}
                                        cookT = {items.cookTime}
                                        prepT = {items.prepTime}
                                        ingredients = {items.ingredients}
                                        desc = {items.description}
                                    />
                                )
                            }
                        }
                    ):""
                }
            </div>
        </UserContext.Provider>
    );

}

export default RecipeCard;