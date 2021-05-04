import React from 'react'

type Props = {
  locale: string
}

const Achievements: React.VFC<Props> = ({ locale }) => {
  return <>{locale}</>
}

export default Achievements
