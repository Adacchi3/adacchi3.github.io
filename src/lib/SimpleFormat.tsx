import React from 'react'

type Props = {
  text: string
}

const SimpleFormat: React.VFC<Props> = ({ text }) => {
  return (
    <>
      {text.split('\n').map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export default SimpleFormat
