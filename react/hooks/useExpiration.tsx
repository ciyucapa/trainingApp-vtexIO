import { useMemo, useCallback } from 'react';
import { useProduct } from 'vtex.product-context';

import Property from '../interfaces/Property';
import PruebaValidation from '../interfaces/PruebaValidation';

const useExpiration = (props?: PruebaValidation) => {
    const { product: { properties } } = useProduct();

    const valueExtract = useCallback((propertyValidation: string = '', nameProperty: string) => {
        if (props && propertyValidation !== nameProperty)
            return '';

        let value = '';

        properties.some((property: Property) => {
            const validation = property.name === nameProperty;

            if (validation) {
                value = property.values[0];
            }

            return validation;
        });

        return value;
    }, [props]);

    const validUntilDate = useMemo(
        () => {
            let value = valueExtract(props ? props.date : '', 'Fecha de vencimiento'); //condicion para validar props vtex
            return value ? `Vencimiento ${value}` : '';
        }, [properties, props]
    );

    const pum = useMemo(
        () => {
            let value = valueExtract(props ? props.pums : '', 'CINCO');
            return value ? `Pum ${value}` : '';
        }, [properties, props]
    );

    return {
        validUntilDate,
        pum,
    }
};

export default useExpiration;