import { useClima } from "../hooks/useClima";
import { kelvilACelsius } from "../helpers";

const Resultado = () => {

    const { resultado } = useClima();

    const { name , main } = resultado;

    return (

        <div className="contenedor clima">
            <h2>El clima de { name } es: </h2>

            <p>
                 {kelvilACelsius(main.temp)} <span>&#x2103;</span>
            </p>
            
            <div className="temp_min_max">
                <p>
                    Minima: {kelvilACelsius(main.temp_min)} <span>&#x2103;</span>
                </p>

                <p>
                    Maxima: {kelvilACelsius(main.temp_max)} <span>&#x2103;</span>
                </p>
            </div>



        </div>

        
    )
}

export default Resultado;