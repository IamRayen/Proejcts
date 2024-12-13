import React from 'react'
import ReactLoading from 'react-loading';


const PreLoader = () => {
  return (
    <div className='Preloader'><ReactLoading type={"balls"} color={"yellow"} width={150} height={150}/></div>
  )
}

export default PreLoader