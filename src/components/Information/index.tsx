import React, { useState, useEffect } from 'react'
import { globalStore } from '@store/global.store'
import { cameraStore } from '@store/camera.store'
import * as Styled from './styled'

export const Information: React.FC<{}> = () => {
  const [info, setInfo] = useState<any>()
  const [isProcess, setIsProcess] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { login, password, url } = globalStore.data
      try {
        const data = await fetch(
          url +
            `AutoScale1/Parameters?auth_user=${login}&auth_password=${password}`
        )

        const obj = await data.json()
        setInfo(obj)
      } catch (err) {
        console.error(
          'во время загрузки данных что-то пошло не так, ожидается json объект!\n' +
            err
        )
      } finally {
        setIsProcess(false)
      }
    }

    const timerId = setInterval(() => {
      if (!globalStore.displayInfo || isProcess) return
      setIsProcess(true)
      getData()
    }, cameraStore.interval / cameraStore.fps)

    return () => clearInterval(timerId)
  }, [isProcess, globalStore.displayInfo])

  return (
    <Styled.Container>
      <Styled.List>
        <Styled.Item>{info?.Name}</Styled.Item>
        <Styled.Item>{info?.Massa}</Styled.Item>
      </Styled.List>
    </Styled.Container>
  )
}
