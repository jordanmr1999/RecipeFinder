import React, {useContext} from "react";
import UserContext from "../User/User";

const Favorites = () => {
    const user = useContext(UserContext);   //defining user to use their data

    return (
        <ul>
            {/*mapping out user favorite items*/}
            {user.favoriteItems.map(things => (
                <li>{things}<button onClick={() => {
                    //remove goes here
                }}>-</button></li>
            ))}
        </ul>

    )
}

export default Favorites;