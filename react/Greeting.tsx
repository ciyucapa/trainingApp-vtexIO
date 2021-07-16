import React from 'react'

type Props = {
  name: string
}

function trainingApp({ name }: Props) {
  return <div>Hey, {name}</div>
}

export default trainingApp
