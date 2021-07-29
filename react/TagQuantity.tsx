import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import useTagQuantity from './hooks/useTagQuantity'
import InformationTagProps from './interfaces/InformationTagProps'

const CSS_HANDLES = [
  'container-flagLastUnit',
  'wrapper-title',
  'wrapper-value',
] as const

const InformationTag = (props: InformationTagProps) => {
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles['container-flagLastUnit']}`}>
      <span className={`${handles['wrapper-title']}`}>Últimas</span>
      <span className={`${handles['wrapper-value']}`}>
        {props.quantityAvailable ? `${props.quantityAvailable} UD.` : ''}
      </span>
    </div>
  )
}

const TagQuantity = () => {
  const hooks = useTagQuantity()

  return <InformationTag {...hooks} />
}

export default TagQuantity
