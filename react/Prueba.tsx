import React from 'react';

import PruebaProps from './interfaces/PruebaValidation';
import useExpiration from './hooks/useExpiration';
import ProductInformation from './components/commons/ProductInformation/Information';

const Prueba = (props: PruebaProps) => {
    const hook = useExpiration(props);
    return <ProductInformation {...hook} />
};

export default Prueba;
