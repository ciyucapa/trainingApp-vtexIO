import React from 'react'

import ExpirationAppValidation from './interfaces/ExpirationAppValidation'
import useExpiration from './hooks/useExpiration'
import ProductInformation from './components/commons/ProductInformation/Information'

const ExpirationApp = (props: ExpirationAppValidation) => {
  const hook = useExpiration(props)

  return <ProductInformation {...hook} />
}

export default ExpirationApp
