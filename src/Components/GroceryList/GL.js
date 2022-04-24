import React, {useContext} from "react";
import UserContext from "../User/User";



const GL = () => {
    //defining user to use their data
    const user = useContext(UserContext);

    return (
        <ul>
            {/*looping through the user's grocery list to display it*/}
            {user.groceryList.map(things => (
                <li>{things}</li>
            ))}
        </ul>

    )
}

export default GL;