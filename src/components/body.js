import React from 'react'
import { Chart } from 'react-charts'

export function Body ({values}) {
   
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <>
    <div
        style={{
            width: '80vw',
            height: '80vh'
          }}
    >
        <Chart data={[{
          label:'Test',
          data: values
          }]} series={{
            showPoints: true
          }} axes={axes} tooltip />
    </div>
    </>
  )
}