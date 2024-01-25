import React from 'react'
import { NoDataIcon } from '../../icons'
import './NoData.css'

const NoData = (): JSX.Element => {
  return (
    <div className="no-result-container" data-testid="no-result-container">
      <NoDataIcon className="no-result-icon " />
      <p className="no-result-text">Oops! No results found.</p>
    </div>
  )
}

export default NoData
