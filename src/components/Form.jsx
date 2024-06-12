import { useState } from "react"





function Form(){

    const [formValues, setFormValues] = useState({
        nombre : '',
        email : ''
    })

    const handleChange = (e) =>{

        const {name,value} = e.target 

        setFormValues( data => ({
            ...data,
            [name] :value
        }))

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formValues)


    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Nombre" 
                    autoComplete="off"  
                    onChange={handleChange}
                    name="nombre"
                    value={formValues.nombre}
                />

                <input type="text" 
                    placeholder="Email" 
                    autoComplete="off"  
                    onChange={handleChange} 
                    name="email"
                    value={formValues.email}
                />

                <button type="submit">enviar</button>
            </form>
        </>
    )

}


export default Form