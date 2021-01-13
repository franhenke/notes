import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const LoadingScreen = () => {
  return (
    <div className="load">
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="circle" width={40} height={40} />
    </div>
  )
}

export default LoadingScreen
