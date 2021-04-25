import React from 'react'
const { Chart } = require("react-google-charts");
export function Body ({values, chartType}) {
  
  const data = React.useMemo(() => {
    return [{
      label:'Test',
      data: values
      }]
  }, [values]);
  
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    [values]
  )
  console.log('chartType', chartType);
  return (
    <>
    <div>
      {values.length > 0 ? 
      <Chart
          width={'80vw'}
          height={'80vh'}
          chartType={chartType}
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'date', label: 'Day' },
              'Popularity'],
            ...values
          ]}
          options={{
            hAxis: {
              title: 'Date',
            },
            vAxis: {
              title: 'Count',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        /> : 'No data to display'}
    </div>
    </>
  )
}