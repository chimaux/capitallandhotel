import React from 'react'
import TopNavigation from '../top-navigation/TopNavigation'
import BottomNavigation from '../bottom-navigation/BottomNavigation'
export const Layout=({children})=>{
  return (
    <>
    <TopNavigation/>
        {children}
    <BottomNavigation/>
    </>
  )
}

export default Layout