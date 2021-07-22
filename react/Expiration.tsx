import React, { FC } from 'react';

import useExpiration from './hooks/useExpiration';
import ProductInformation from './components/commons/ProductInformation/Information';

const Expiration: FC = () => {
    const hook = useExpiration();
    return <ProductInformation {...hook} />;

};

export default Expiration;