import React from 'react'
import * as Styled from './styled'

import { Window } from '@components/Window'

export const Widget: React.FC<{}> = () => {
  return (
    <Styled.Widget>
      <Window />
    </Styled.Widget>
  )
}
