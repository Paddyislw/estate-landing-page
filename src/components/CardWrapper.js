import React from 'react'
import clsx from 'clsx'

const CardWrapper = ({children,className}) => {
  return (
    <div className={clsx('w-[375px] border border-gray-300 rounded-xl shadow-xl p-[15px] flex flex-col sm:w-[340px] lg:w-[320px]',className)}>
        {children}
    </div>
  )
}

export default CardWrapper