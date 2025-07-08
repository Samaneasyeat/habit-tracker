import React from 'react'
import { useSelector } from 'react-redux'

const DebugInfo = () => {
  const { habits } = useSelector((state) => state.allHabits)
  
  React.useEffect(() => {
    console.log('Debug Info:')
    console.log('Redux State:', habits)
    console.log('LocalStorage:', localStorage.getItem('newHabits'))
    console.log('Window location:', window.location.href)
  }, [habits])

  return null // This component doesn't render anything visible
}

export default DebugInfo 