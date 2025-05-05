import ShowDetails from "./ShowDetails.jsx";
import "./shows.css";
import {tvShows} from "./data.js"

/** A navbar that allows users to choose between a list of shows */


export default function ShowSelection(){
  const [shows] = useState(tvShows);
  const [selectedShow, setselectedShow] = useState();

  function Shows(selectedShow){
    return <section className="showList">
    <h2>Shows</h2>
    <ul className="list">
      {shows.map((show) => (
        <li key ={Show.id} onClick={() => setselectedShow(Show)}>
          {Show.name} </li>
      ))}
    </ul>;
    </section>
    
  }
  

  function SelectedShow(){
    if(!selectedShow){
      return(
        <section className = "shows">
          <p>Select a show to view details</p>
        </section>
      )};
      return(
      <ShowDetails/>
      )
    }
  
  
  
 
}


