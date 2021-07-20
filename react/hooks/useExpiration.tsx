import { useMemo } from 'react';
import { useProduct } from 'vtex.product-context';

import Property from '../interfaces/Property';

const useExpiration = () => {
    const { product: { properties } } = useProduct();

    const validUntilDate = useMemo(() => {
        let date = '';

        properties.some((property: Property) => {
            const validation = property.name === 'Fecha de vencimiento';

            if (validation) {
                date = property.values[0];
            }

            return validation;
        });

        return date;
    }, [properties]);

    const pum = useMemo(() => {
        let value = '';

        properties.some((property: Property) => {
            const validation = property.name === 'CINCO';

            if (validation) {
                value = property.values[0];
            }

            return validation;
        });

        return value;
    }, [properties]);

    return {
        validUntilDate,
        pum,
    }
};

export default useExpiration;