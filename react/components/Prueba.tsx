import React from 'react';

interface Props {
    name: string,
    /*handle: () => void*/
}

function Prueba({ name }: Props): JSX.Element {

    /*const [newTask, setNewTask] = useState<string>('');

   /* const handle = () => {
        console.log("HOLA", newTask)
    }*/

    return (
        <div>Hey, {name}
            <div >
                SOY ELCOMPONENTE HIJO
            </div>
        </div>
    )
}

export default Prueba;
