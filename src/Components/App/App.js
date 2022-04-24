import './App.css';
import SearchBar from "../Search/Search";
import React,{useContext} from "react";
import UserContext from "../User/User";
import Navigate from "../Navigation/Navigate";

//defining user to use throughout
const user = {
  name: 'Jordan',
  groceryList: [],
  favoriteItems: []
}

function App() {
  return (
      <UserContext.Provider value={user}>
        <div className="App">
          <header className="App header">
            {/*calling navigation component in the header*/}
            <Navigate/>
            <div className="logo-container">
              {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            </div>
          </header>
          <h2 className="MainHeader">Recipe Finder</h2>
          <h4 className="SecondaryHeader">BY: Jordan Ramkalawan</h4>
          {/*calling searchbar component*/}
          <SearchBar/>

        </div>
      </UserContext.Provider>

  );
}

export default App;

