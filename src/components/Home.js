import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {

    /*     const [clients, setClients] = useState([]);
    
        const getClients = async () => {
            const response = await axiosClient.get('pokemon/8/');
            console.log(response.data);
        };
    
        useEffect(() => {
            getClients();
        }, [])
    
    
     */

    return (
        <div className="App">
            <header className="App-header">
                <h1>Poke APP - jean carlo zapata</h1>
                <Link to='/pokemons'> Ver Pokemones  </Link>
            </header>
        </div>

    );


}



export default Home;