import React from 'react'
import '../styleFiles/SectionBody.css'
import Popular from './GroupComponents/Popular';
import Featured from './GroupComponents/Featured';
import BestSelling from './GroupComponents/BestSelling';
import Arrived from './GroupComponents/Arrived';
import Download from './GroupComponents/Download';
import Deal from './GroupComponents/Deal'

const SectionBody = () => {
  
  return (
    <div className='SectionBody'>
      <BestSelling />
      <Deal />  
      <Featured />
      <Popular />
      <Arrived />
      <Download />
    </div>
  )
}

export default SectionBody