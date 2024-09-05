import React from 'react'
import Header from '../../components/Header/Header'
import Scheme from '../../components/Scheme/Scheme'
import BoxesInfo from '../../components/BoxesInfo/BoxesInfo'
const Landing = () => {
  return (
    <div>
      <Header value={"Start your Journey"}/>
      <BoxesInfo/>
      <Scheme/>
    </div>
  )
}
export default Landing
