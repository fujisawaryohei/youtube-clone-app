import React from 'react'
import Header from '../Header/Header'
import Style from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div>
      <div className={ Style.wrapper }>
        <Header />
        <div className={ Style.main }>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Layout