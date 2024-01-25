import {useEffect, useState} from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import axios
from "axios";
import {Paginate} from "./components/Paginate";
function App() {

const [movies,setMovies]=useState([])

const getMovie=async()=>{
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c355b54828379ffd70496e45d1fd90a8');

  // console.log(response.data.results)
  setMovies(response.data.results);
}

const search=async(word)=>{
  if(word=="")getMovie()
  else{
  const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c355b54828379ffd70496e45d1fd90a8&query=${word}`);
  setMovies(searchResult.data.results);
  }

}

const selectMovie=async(number)=>{
  const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c355b54828379ffd70496e45d1fd90a8&page=${number}`);

  setMovies(response.data.results);

}
useEffect(()=>{
  getMovie()
},[])

  return (
    <div className="App">
      <div className="header">
        <Header search={search}/>
      </div>

      <div className="main">

{

  movies.map((item,index)=>{
   return <Card key={index} movie={item} />

  })
}




<Paginate selectMovie={selectMovie}/>

      </div>
    </div>
  );
}

export default App;
