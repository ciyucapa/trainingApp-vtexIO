import React from 'react';

import ExpirationInformation from '../../../interfaces/ExpirationInformation';

const ProductInformation = (props: ExpirationInformation) => (
    <>
        <div>{props.validUntilDate}</div>
        <div>{props.pum}</div>
    </>
);

export default ProductInformation;