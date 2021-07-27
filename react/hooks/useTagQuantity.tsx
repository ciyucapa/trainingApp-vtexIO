import { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { useProduct } from 'vtex.product-context'

import getInventory from '../GraphQL/query.getInventory.gql'
import Seller from '../interfaces/Seller'
import Sku from '../interfaces/Sku'

const useTagQuantity = () => {
  const { selectedItem } = useProduct()
  const { itemId, ean } = selectedItem

  const { data: inventoryData } = useQuery(getInventory, {
    variables: {
      sku: Number.parseInt(itemId, 10),
    },
  })

  const quantityAvailable = useMemo(() => {
    let value = ''

    if (inventoryData && itemId) {
      inventoryData.product.items.some((item: Sku) => {
        const validation = item.ean === ean

        if (validation) {
          item.sellers.some((seller: Seller) => {
            const validationSeller = seller.sellerName === 'Grupo Akaes S.A.S.'

            if (validationSeller) {
              value = seller.commertialOffer.AvailableQuantity.toString()
            }

            return validationSeller
          })
        }

        return validation
      })
    }

    return value
  }, [itemId, inventoryData, ean])

  return {
    quantityAvailable,
  }
}

export default useTagQuantity
