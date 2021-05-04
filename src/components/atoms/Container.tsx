import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div className="px-6 py-4">
      <div className="container mx-auto lg:px-8 xl:px-24">{children}</div>
    </div>
  )
}

export default Container
