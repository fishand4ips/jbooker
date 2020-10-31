import './App.css';
import React from "react";
import Cards from "./components/Cards";
import {store} from "./book-info"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin} photo={store.images.cleanCode}/>
                <Cards nameBook={store.name.ROCKING_ALGORITHMS} author={store.author.Aditya_Bhargava} photo={store.images.rockingAlgorithms}/>
                <Cards nameBook={store.name.SCHILDT_BEGINNER} author={store.author.Herbert_Schildt} photo={store.images.schildt_beginner}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
                <Cards nameBook={store.name.CLEAN_CODE} author={store.author.Martin}/>
            </header>
        </div>
    );
}

export default App;