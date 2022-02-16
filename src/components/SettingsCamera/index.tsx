import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'
import { cameraStore } from '@store/camera.store'

const prefix = process.env.PUBLIC_URL + '/images/icons/'

export const SettingsCamera: React.FC<{}> = observer(() => {
  return (
    <Styled.Container>
      <Styled.Block>
        <Styled.Close
          onClick={() => globalStore.setDisplaySettingsCamera(false)}
          title='close the camera settings'
        >
          X
        </Styled.Close>

        <Styled.InputWrapper title='interval update frame'>
          <Styled.Icon src={prefix + 'update.svg'} alt='interval' />
          <Styled.Label htmlFor='interval'>interval:</Styled.Label>
          <Styled.Status>{cameraStore.interval / 1000}</Styled.Status>
          <Styled.InputRange
            onChange={(e) => cameraStore.setIntvl(+e.target.value * 1000)}
            type='range'
            id='interval'
            min={cameraStore.minInterval / 1000}
            max={cameraStore.maxInterval / 1000}
            value={cameraStore.interval / 1000}
            step='1'
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper title='number of frames in a given time interval'>
          <Styled.Icon src={prefix + 'fps.svg'} alt='fps' />
          <Styled.Label htmlFor='fps'>fps:</Styled.Label>
          <Styled.Status>{cameraStore.fps}</Styled.Status>
          <Styled.InputRange
            onChange={(e) => cameraStore.setFps(+e.target.value)}
            type='range'
            id='fps'
            min={cameraStore.minFPS}
            max={cameraStore.maxFPS}
            value={cameraStore.fps}
            step='1'
          />
        </Styled.InputWrapper>
        <Styled.InputWrapper title='resolution of the resulting image'>
          <Styled.Icon src={prefix + 'settings2.svg'} alt='resolution' />
          <Styled.Label htmlFor='resolution'>resolution</Styled.Label>
          <Styled.List>
            {cameraStore.resolution.map((item, idx) => {
              const cn =
                cameraStore.currentResolution.active === item.label
                  ? 'active'
                  : ''
              const payload = { ...item.size, active: item.label }
              return (
                <Styled.Item
                  key={idx}
                  onClick={() => cameraStore.setResolution(payload)}
                >
                  <Styled.Text className={cn}>{item.label}</Styled.Text>
                </Styled.Item>
              )
            })}
          </Styled.List>
        </Styled.InputWrapper>
        <Styled.InputWrapper title='choose a camera'>
          <Styled.Icon src={prefix + 'camera.svg'} alt='camera' />
          <Styled.Label htmlFor='camera'>camera</Styled.Label>
          <Styled.List>
            {cameraStore.listCameras.map((item, idx) => {
              const cn = cameraStore.camera === item.id ? 'active' : ''
              return (
                <Styled.Item
                  key={idx}
                  onClick={() => cameraStore.changeCamera(item.id as 1 | 2 | 3)}
                >
                  <Styled.Text className={cn}>{item.name}</Styled.Text>
                </Styled.Item>
              )
            })}
          </Styled.List>
        </Styled.InputWrapper>
      </Styled.Block>
    </Styled.Container>
  )
})
