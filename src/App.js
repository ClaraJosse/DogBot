import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Argu from './components/Argu';
import Footer from './components/Footer';
import {faTools, faEuroSign, faHandSpock} from '@fortawesome/free-solid-svg-icons';

//Données à afficher
let Dog = {
  name:"Rex",
  src:"https://ds1.static.rtbf.be/article/image/1240x800/0/2/a/9b85cfc44c3260f6afd4d3dcef9fc7a6-1507713377.jpg",
  description:"Robot de compagnie chien",
  price: 259,
}

let Cat = {
  name:"Pupille",
  src:"https://cdn.kulturegeek.fr/wp-content/uploads/2019/12/MarsCat-.jpg",
  description:"Robot de compagnie chat",
  price: 269,
}

let Programmable = {
  name:"Programmable",
  src:faTools,
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
}

let Economic = {
  name:"Economique",
  src:faEuroSign,
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
}

let Simply = {
  name:"Simplicité",
  src:faHandSpock,
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div id='divProducts'>
        <Product product={Dog}/>
        <Product product={Cat}/>
      </div>
      <div id='divArgus'>
        <Argu argu={Programmable}/>
        <Argu argu={Economic}/>
        <Argu argu={Simply}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
