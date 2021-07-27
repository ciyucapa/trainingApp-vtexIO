import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import ExpirationInformation from '../../../interfaces/ExpirationInformation'

const CSS_HANDLES = [
  'container',
  'wrapper-title-expiration',
  'wrapper-value-expiration',
  'wrapper-title-pum',
  'wrapper-value-pum',
] as const

const ProductInformation = (props: ExpirationInformation) => {
  const { handles } = useCssHandles(CSS_HANDLES, props.blockClass)

  return (
    <>
      <div className={`${handles.container}`}>
        <span className={`${handles['wrapper-title-expiration']}`}>
          {' '}
          {props.validUntilDate ? 'Vencimiento' : ''}{' '}
        </span>
        <span className={`${handles['wrapper-value-expiration']}`}>
          {props.validUntilDate}
        </span>
      </div>
      <div className={`${handles['wrapper-value-expiration']}`}>
        {props.pum}
      </div>
    </>
  )
}

export default ProductInformation
