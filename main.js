import { Chart } from "chart.js";
import axios from "axios";
import "./style.css";



let squats = document.querySelector("#squats");

let pompes = document.querySelector("#pompes");

let gainage = document.querySelector("#gainage");

const validerValeur = () => {
  const data = { date: new Date(), squats: squats.value, pompes: pompes.value, gainage: gainage.value };
  
	console.log(data);
  //local
	axios.post("http://localhost/API_test/data.php", JSON.stringify(data))
 
//web
	// axios.post("ajouterPSG.php", JSON.stringify(data))
  
  .then(console.log("c'est parti!"))
  .catch((e)=>console.log("erreur  ",e))
  
	alert("les donnees ont été enregistrées !");
};

document.querySelector("#validation").addEventListener('click',validerValeur)