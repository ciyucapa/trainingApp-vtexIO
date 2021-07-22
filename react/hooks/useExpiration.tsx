import { useMemo } from 'react';
import { useProduct } from 'vtex.product-context';

import Property from '../interfaces/Property';

const useExpiration = () => {
    const { product: { properties } } = useProduct();

    const valueExtract = (nameProperty: string) => {
        let value = '';

        properties.some((property: Property) => {
            const validation = property.name === nameProperty;

            if (validation) {
                value = property.values[0];
            }

            return validation;
        });

        return value;
    };

    const validUntilDate = useMemo(
        () => valueExtract('Fecha de vencimiento'),
        [properties]
    );

    const pum = useMemo(
        () => valueExtract('CINCO'),
        [properties]
    );

    return {
        validUntilDate,
        pum,
    }
};

export default useExpiration;