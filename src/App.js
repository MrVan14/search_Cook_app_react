import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  
  let urlBase ="https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [dataOfApi, setDataOfApi] = useState([]);
  const [search, setInputSearch] = useState("");

  //fonction qui ecoute l'evenement de l'input de recherche
  const handleChangeSearch = (e)=>{
    setInputSearch(e.target.value);
  }

  //si le composant est monté on utilise useEffect
useEffect(() => {
  //a l'interieur on fait appel a axios pour avoir les données
  axios
    //on map l'url
    .get(urlBase+search)
    //si c'est okey on stocke les données dans les useState
    .then((res) =>  setDataOfApi(res.data.meals)); 
},[search]);
  
  return (
    <div className="container-app">
      <h1 className="titre">REACT COOKING-APP</h1>
      <input
        type="text"
        className="search"
        placeholder="entrer votre gout"
        onChange={handleChangeSearch}
      />
      <div className="container-data">
        {//premier verification && signifie est comparable a isset si oui ne fait rien sinon lance la ligne qui suit
        dataOfApi && dataOfApi
        //slice tri pour ne prendre qu'au max 24 element
        .slice(0,24)
        //boucle les données pri par la data un peu comme un forEach
        .map((valueOfOneData)=>(
          <Card key={valueOfOneData.idMeal} articleMeals={valueOfOneData}/>
        ))}
      </div>
    </div>
  );
};

export default App;
