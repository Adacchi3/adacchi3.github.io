import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className="py-2 px-6">
      <div className="container lg:px-8 xl:px-24 mx-auto">{children}</div>
    </div>
  )
}

export default Container
