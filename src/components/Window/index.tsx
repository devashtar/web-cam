import React, { useEffect, useState } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

import { Menu } from '@components/Menu'
import { SettingsCamera } from '@components/SettingsCamera'
import { Information } from '@components/Information'
import { Frame } from '@components/Frame'

export const Window: React.FC<{}> = observer(() => {
  const [timeStamp, setTimeStamp] = useState(Date.now() + globalStore.delay)

  useEffect(() => {
    if (!globalStore.hideMenu) return

    globalStore.setDisplayMenu(true)

    const timerId = setTimeout(() => {
      globalStore.setDisplayMenu(false)
      globalStore.setDisplaySettings(false)
    }, globalStore.delay)

    return () => clearTimeout(timerId)
  }, [timeStamp])

  const showMenu = (n: number) => {
    if (!globalStore.hideMenu) return
    if (globalStore.displaySettingsCamera) return
    if (timeStamp + globalStore.delay < Date.now() && globalStore.displayMenu)
      return

    setTimeStamp(n)
  }

  return (
    <Styled.Window
      onMouseMove={() => showMenu(Date.now())}
      screenMode={globalStore.screenMode}
    >
      <Frame />
      {globalStore.displaySettingsCamera && <SettingsCamera />}
      {globalStore.displayInfo && <Information />}
      {globalStore.displayMenu && <Menu />}
    </Styled.Window>
  )
})
