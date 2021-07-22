import React from 'react';

import PruebaProps from './interfaces/PruebaValidation';
import useExpiration from './hooks/useExpiration';

const Prueba = (props: PruebaProps) => {
    const { validUntilDate, pum } = useExpiration(props);

    return (
        <>
            <div>{validUntilDate}</div>
            <div>{pum}</div>
        </>
    )
}

export default Prueba
