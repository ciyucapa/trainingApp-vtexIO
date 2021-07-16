import React from 'react'

type Props = {
  name: string
}

function TrainingApp({ name }: Props) {
  return <div>Hey, {name}</div>
}

export default TrainingApp
