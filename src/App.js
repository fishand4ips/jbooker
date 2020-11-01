import './App.css';
import React from "react";
import {store} from "./book-info"
import {MyDocument} from "./components/MyDocument";
import {Route, Switch} from "react-router-dom";
import {CollectionCards} from "./components/CollectionCards";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route path='/preview' render={() => <MyDocument/>}/>
                    <Route path='/' render={() => <CollectionCards store={store}/>}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;