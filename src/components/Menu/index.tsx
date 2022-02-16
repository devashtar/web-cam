import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { cameraStore } from '@store/camera.store'
import { globalStore } from '@store/global.store'

import { Settings } from '@components/Settings'

const prefix = process.env.PUBLIC_URL + '/images/icons/'

export const Menu: React.FC<{}> = observer(() => {
  const screenSVG = globalStore.screenMode ? 'screen.svg' : 'fullscreen.svg'

  return (
    <Styled.Menu>
      {globalStore.displaySettings && <Settings />}
      <Styled.Btn onClick={() => cameraStore.setStopCamera()}>
        <Styled.Icon src={prefix + 'play.svg'} alt='play' title='play' />
      </Styled.Btn>
      <Styled.Wrapper>
        <Styled.Btn onClick={() => globalStore.setDisplaySettings()}>
          <Styled.Icon
            src={prefix + 'settings.svg'}
            alt='settings'
            title='settings'
          />
        </Styled.Btn>
        <Styled.Btn onClick={() => globalStore.changeScreenMode()}>
          <Styled.Icon
            src={prefix + screenSVG}
            alt='screen mode'
            title='screen mode'
          />
        </Styled.Btn>
      </Styled.Wrapper>
    </Styled.Menu>
  )
})
