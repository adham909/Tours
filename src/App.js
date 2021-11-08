import React,{useState , useEffect } from "react";
import Loading from './Loading';
import Tours from './Tours';
import './index.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading , setLoading] = useState(false);
  const [tours , setTours] = useState([]);

  const removetour = (id)=>{
      const newtour = tours.filter((tour) => tour.id !==id);
      setTours(newtour);
  }

  const fetchTours = async () =>{
    setLoading(false)
    try {
      const response = await fetch (url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);

    } catch (error) {

      setLoading(false);
      console.log(error);

    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  }
  if (tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
    
    
  }
  return (
    <main>
      <Tours tours={tours} removetour={removetour}/>
      </main>
  );
}

export default App;
