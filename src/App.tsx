import React from 'react'
import * as Styled from './App.styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

import { Widget } from '@components/Widget'
import { Form } from '@components/Form'

export const App: React.FC<{}> = observer(() => {
  return <Styled.App>{globalStore.isLogin ? <Widget /> : <Form />}</Styled.App>
})
