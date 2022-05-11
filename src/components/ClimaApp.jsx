import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";
import { useClima } from "../hooks/useClima";

const ClimaApp = () => {

    const {resultado ,cargando} = useClima();

    return (
      <main className="dos-columnas">
        <Formulario />

        { cargando ?  <Spinner /> :
          Object.keys(resultado).length >0 && <Resultado /> 
  
        }
        
      </main>
    )
}

export default ClimaApp;