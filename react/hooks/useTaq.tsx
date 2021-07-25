import { useMemo } from 'react';

import { useQuery } from 'react-apollo';
import { useProduct } from 'vtex.product-context';

import getInventory from '../GraphQL/query.getInventory.gql';
import Seller from '../interfaces/Seller';
import Sku from '../interfaces/Sku';

const useTag = () => {
    const { selectedItem } = useProduct();
    const { itemId, ean } = selectedItem;

    const { data: inventoryData } = useQuery(getInventory, {
        variables: {
            sku: Number.parseInt(itemId)
        }
    });

    const tag = useMemo(() => {
        let value: string = '';

        if (inventoryData && itemId) {
            inventoryData.product.items.some((item: Sku) => {
                let validation = item.ean === ean;

                if (validation) {
                    item.sellers.some((seller: Seller) => {
                        let validationSeller = seller.sellerName === 'Grupo Akaes S.A.S.';

                        if (validationSeller) {
                            value = seller.commertialOffer.AvailableQuantity.toString();
                        }

                        return validationSeller;
                    });
                }

                return validation;
            });
        };

        return value;
    }, [itemId, inventoryData]);

    return {
        tag
    };
};

export default useTag;