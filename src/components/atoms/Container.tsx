import React, { PropsWithChildren } from 'react'

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-6 py-2">
      <div className="container mx-auto lg:px-8 xl:px-24">{children}</div>
    </div>
  )
}

export default Container
