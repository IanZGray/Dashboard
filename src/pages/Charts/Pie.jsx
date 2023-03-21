import React from 'react'

import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChartsHeader, Pie as PieChart } from '../../components'

const Pie = () => {
  const { currentMode } = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full flex justify-center">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  )
}

export default Pie