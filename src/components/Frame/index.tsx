import React, { useEffect, useState } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { cameraStore } from '@store/camera.store'
import { globalStore } from '@store/global.store'

export const Frame: React.FC<{}> = observer(() => {
  const [imageURL, setImageURL] = useState('')
  const [isProcess, setIsProcess] = useState(false)

  useEffect(() => {
    const getFrame = async () => {
      const { width, height } = cameraStore.currentResolution
      const { login, password, url } = globalStore.data
      try {
        const image = await fetch(
          url +
            `Camera${cameraStore.camera}/Video?Width=${width}&Height=${height}` +
            `&auth_user=${login}&auth_password=${password}`
        )
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        setImageURL(imageURL)
      } catch (err) {
        console.error(
          'во время загрузки изображения с веб камеры, что-то пошло не так!\n' +
            err
        )
      } finally {
        setIsProcess(false)
      }
    }

    const timerId = setInterval(() => {
      if (cameraStore.isStop || isProcess) return
      setIsProcess(true)
      getFrame()
    }, cameraStore.interval / cameraStore.fps)

    return () => clearInterval(timerId)
  }, [
    isProcess,
    cameraStore.camera,
    cameraStore.fps,
    cameraStore.interval,
    cameraStore.isStop,
    cameraStore.currentResolution
  ])

  return (
    <Styled.Wrapper>
      {imageURL !== '' && <Styled.Image src={imageURL} alt='web-cam image' />}
    </Styled.Wrapper>
  )
})
