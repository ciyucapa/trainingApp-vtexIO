import React from 'react';

import PruebaProps from './interfaces/PruebaProps';
import useExpiration from './hooks/useExpiration';

const Prueba = (props: PruebaProps) => {
    const { validUntilDate, pum } = useExpiration();

    return (
        <>
            <div>{props.date === "Fecha de vencimiento" ? `Vencimiento ${validUntilDate}` : ""}</div>
            <div>{props.pums === "Pum" ? `PUM ${pum}` : ""}</div>
        </>
    )
}

export default Prueba
