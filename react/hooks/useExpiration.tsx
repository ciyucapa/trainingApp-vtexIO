import { useMemo, useCallback } from 'react'
import { useProduct } from 'vtex.product-context'

import Property from '../interfaces/Property'
import ExpirationAppValidation from '../interfaces/ExpirationAppValidation'

const useExpiration = (props?: ExpirationAppValidation) => {
  const {
    product: { properties },
  } = useProduct()

  const valueExtract = useCallback(
    (propertyValidation: string, nameProperty: string) => {
      // Extrae datos de data / valida props vtex
      if (props && propertyValidation !== nameProperty) return ''

      let value = ''

      properties.some((property: Property) => {
        const validation = property.name === nameProperty

        if (validation) {
          value = property.values[0]
        }

        return validation
      })

      return value
    },
    [props, properties]
  )

  const validUntilDate = useMemo(() => {
    const date = `${props ? props.date : ''}`
    const value = valueExtract(date, 'Fecha de vencimiento') // condicion para validar props vtex/ muestra el valor de fecha

    return value ? `${value}` : ''
  }, [props, valueExtract])

  const pum = useMemo(() => {
    const pums = `${props ? props.pums : ''}`
    const value = valueExtract(pums, 'CINCO') // condicion para validar props vtex/ muestra el valor de CINCO

    return value ? `${value}` : ''
  }, [props, valueExtract])

  return {
    validUntilDate,
    pum,
  }
}

export default useExpiration
