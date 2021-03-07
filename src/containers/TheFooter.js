import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1"> BT4103 AY20/21 Semester 2 Group 1 </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1"> Predictive Maintenance for Aircraft Turbo Engines </span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
