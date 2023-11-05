import React from 'react'
import Motion from './Motion'

type Props = {}

const Divider = (props: Props) => {
  return (
    <Motion delay={1.5} direction='left'>
    <div className='w-screen'>
        <div className="bg-violet-800 w-[40%] h-[2px] rounded-xl"></div>
    </div>
    </Motion>
  )
}

export default Divider