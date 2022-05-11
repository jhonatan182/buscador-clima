import { useClima } from "../hooks/useClima";
import { useState } from "react";

const Formulario = () => {

    // * state
    const [ error , setError ] =  useState('')

    // * context
    const { setPais, pais , setCiudad , ciudad  , consultarClima} = useClima();


    const handleSubmit = e => {

        e.preventDefault();

        if( [ciudad , pais].includes('') ) {

            setError('Todos los campos son obligatorios')
            return;
        }
        
        consultarClima(ciudad , pais);
    
        
    }

    return (
        <div className='contenedor'>

            { alert && <p>{ error }</p> }

            <form onSubmit={ handleSubmit }>
                <div className='campo'>
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text"
                        id='ciudad'
                        name='ciudad'
                        value={ciudad} 
                        onChange={ e => setCiudad(e.target.value)}
                    />

                </div>

                <div className='campo'>
                    <label htmlFor="pais">Pais</label>
                    <select 
                        name="pais" 
                        id="pais"
                        value={pais}
                        onChange={ e => setPais(e.target.value) } 
                    >
                            
                        <option value="">Seleccione un pais</option>
                        <option value="HN">Honduras</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colimbia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>

                    </select>

                </div>

                <input type="submit" value='Consultar Clima' />

            </form>

        </div>
    )
}

export default Formulario