import React from 'react'
import * as Styled from './styled'
import { globalStore } from '@store/global.store'

const prefix = process.env.PUBLIC_URL + '/images/icons/'

export const Settings: React.FC<{}> = () => {
  return (
    <Styled.Container>
      <Styled.List>
        <Styled.Item onClick={() => globalStore.setDisplaySettingsCamera(true)}>
          <Styled.Icon
            src={prefix + 'camera.svg'}
            alt='camera'
            title='settings of camera'
          />
          <Styled.Text>camera</Styled.Text>
        </Styled.Item>
        <Styled.Item onClick={() => globalStore.setDisplayInfo()}>
          <Styled.Icon
            src={prefix + 'data.svg'}
            alt='data'
            title='choose displayed data'
          />
          <Styled.Text>data</Styled.Text>
        </Styled.Item>
      </Styled.List>
    </Styled.Container>
  )
}
