import React from 'react'
import './reporting.css'
import ReportingSidebar from '../../components/reportingSidebar/ReportingSidebar'
import Chart from '../../components/chart/Chart'
const Reporting = () => {
  const charts = [
    {
      name: 'Finances',
      xAxisKey: 'name',
      line1Key: 'Balance',
      line2Key: 'saving',
      data: [
        { name: 'April', Balance: 48530, saving: 0 },
        { name: 'May', Balance: 50328, saving: 1798 },
        { name: 'June', Balance: 48573, saving: -1755 },
        { name: 'July', Balance: 48825, saving: 252 },
      ],
    },
    {
      name: 'DAU',
      xAxisKey: 'Day',
      line1Key: 'Android',
      line2Key: 'iOS',
      data: [
        { Day: '2016-10-28', Android: 27, iOS: 12 },
        { Day: '2016-10-29', Android: 20, iOS: 17 },
        { Day: '2016-10-30', Android: 17, iOS: 13 },
        { Day: '2016-10-31', Android: 15, iOS: 13 },
        { Day: '2016-11-01', Android: 14, iOS: 11 },
      ],
    },
  ]
  return (
    <>
      <ReportingSidebar />
      <div className='reporting'>
        <h5>Reporting Page</h5>
        <Chart
          title={'Cars'}
          data={[0, 1, 2, 3, 4, 5]}
          dataKey={charts.xAxisKey}
        />
      </div>
    </>
  )
}

export default Reporting
