

export const Help = ()=>{


    return <>
    
    <div className="flex flex-col items-center w-full">
        <h2 className="text-xl lg:text-3xl font-semibold my-2 p-2">
            Dudas
        </h2>
        <h4 className="w-3/4 p-2 text-center text-lg">
            Algunas preguntas frecuentes son:
        </h4>
        <p className="p-2 my-2 font-medium">
            ¿Cómo crear una nota?
        </p>
        <p>
            En la pantalla inicio esta el recuadro para que escribas tu nota, maximo 50 caracteres. Recorda no poner datos personales ni contraseñas importantes.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Cómo se guarda una nota?
        </p>
        <p>
            Abajo del recuadro, el boton azul "Guarda nota".
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Como se guardan mis notas, son personales?
        </p>
        <p>
            Se guardan en los datos del navegador, cada usuario solo puede ver sus notas. Son intransferibles.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Hay un limite de notas?
        </p>
        <p>
            No, no hay un limite. Cada usuario puede escribir la cantidad de notas que necesite.
        </p>
        <p className="p-2 my-2 font-medium">
            ¿Se pueden eliminar notas?
        </p>
        <p>
            Si, en cada nota te aparece el boton de eliminar, este paso es irreversible.
        </p>



    </div>
    
    </>
}