import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import ExpirationAppValidation from './interfaces/ExpirationAppValidation'
import useExpiration from './hooks/useExpiration'
import ExpirationInformation from './interfaces/ExpirationInformation'

const CSS_HANDLES = [
  'box-expiration',
  'box-pum',
  'title-expiration',
  'value-expiration',
  'title-pum',
  'value-pum',
] as const

const InformationExpiration = (props: ExpirationInformation) => {
  const { handles } = useCssHandles(CSS_HANDLES, props.blockClass)

  return (
    <div className={`${handles['box-expiration']}`}>
      <span className={`${handles['title-expiration']}`}>
        {props.validUntilDate ? 'Vencimiento' : ''}
      </span>
      <span className={`${handles['value-expiration']}`}>
        {props.validUntilDate}
      </span>
    </div>
  )
}

const InformationPum = (props: ExpirationInformation) => {
  const { handles } = useCssHandles(CSS_HANDLES, props.blockClass)

  return (
    <div className={`${handles['box-pum']}`}>
      <span className={`${handles['title-pum']}`}>
        {props.pum ? 'Pum' : ''}
      </span>
      <span className={`${handles['value-pum']}`}>{props.pum}</span>
    </div>
  )
}

const ExpirationApp = (props: ExpirationAppValidation) => {
  const hook = useExpiration()

  return (
    <>
      {props.date ? <InformationExpiration {...hook} /> : ''}
      {props.pums ? <InformationPum {...hook} /> : ''}
    </>
  )
}

export default ExpirationApp
