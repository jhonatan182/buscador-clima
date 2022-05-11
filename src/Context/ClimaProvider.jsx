import { createContext  , useState}  from 'react';
import axios from 'axios';

const ClimaContext = createContext();


const ClimaProvider = ({children}) => {

    const [ciudad , setCiudad] = useState('');
    const [pais , setPais] = useState('') ;
    const [resultado , setResultado] = useState({});
    const [cargando , setCargando] = useState(false);

    //funcion para consultar a la API
    const consultarClima = async (ciudad , pais) => {

        setCargando(true)

        try {
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;     
            const {data} = await axios(url)    
            const {lat , lon} = data[0];


            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data:clima } = await axios(urlClima);

            setResultado(clima)

        } catch (error) {
            console.log(error)
        }
        
        setCargando(false)

        
        
    }

    return (
        <ClimaContext.Provider
            value={{
                setCiudad,
                ciudad,
                setPais,
                pais,
                consultarClima,
                resultado,
                cargando
            }}
        >
            { children }
        </ClimaContext.Provider>

    )

}


export {
    ClimaProvider
}

export default ClimaContext