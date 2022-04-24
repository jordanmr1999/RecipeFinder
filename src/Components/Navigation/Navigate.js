import React, {useContext, useState} from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from "../User/User";
import GL from "../GroceryList/GL";
import Favorites from "../Favorites/Favorites";
import "./Nav.css";


const useStyles = createUseStyles({
    wrapper: {
        borderBottom: 'black solid 1px',
        padding: [15, 10],
        textAlign: 'right',
        justifyContent: "space-between",
        color: "black"
    }
});

export default function Navigate() {
    //defining user to use their data
    const user = useContext(UserContext);
    const classes = useStyles();

    //setting false states that can be set to true for dropdown menus
    const [GLstate,SetGLstate] = useState(false);
    const [favState,setFaveState] = useState(false);

    return(
        <UserContext.Provider value={user}>
            <div className={classes.wrapper}>
                <ul>
                    {/*setting state for grocery list to true/false with button*/}
                    <li className="bar-item"><button className="nav-btn" onClick= {() => {
                        SetGLstate(!GLstate);
                    }}> Grocery List </button></li>
                    {/*setting state for favorite list to true/false with button*/}
                    <li className= "bar-item"><button className="nav-btn" onClick={() => {
                        setFaveState(!favState);
                    }}> Favorites </button></li>
                    <li className= "bar-item">Welcome, {user.name}</li>
                </ul>
                {/*grocery list is shown when the state is true due to button press and can be hidden*/}
                {GLstate && (
                    <GL/>
                )}
                {/*favorite list is shown when the state is true due to button press and can be hidden*/}
                {favState && (
                    <Favorites/>
                )}
            </div>
        </UserContext.Provider>
    )
}