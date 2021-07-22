import React, { FC } from 'react';

import useExpiration from './hooks/useExpiration';
import ProductInformation from './components/commons/ProductInformation/Information';

const InformationPum: FC = () => {
  const hook = useExpiration();
  return <ProductInformation {...hook} />;
};

export default InformationPum;
