import React, { useEffect, useState } from 'react'
import * as Styled from './styled'
import { globalStore } from '@store/global.store'

const prefix = process.env.PUBLIC_URL + 'images/icons/'

export const Form: React.FC<{}> = () => {
  const [error, setError] = useState('')
  const [state, setState] = useState({ login: '', password: '', url: '' })

  const onChangeLogin = (value: string) => {
    setState((state) => ({ ...state, login: value }))
  }

  const onChangePassword = (value: string) => {
    setState((state) => ({ ...state, password: value }))
  }

  const onChangeURL = (value: string) => {
    setState((state) => ({ ...state, url: value }))
  }

  const checkFields = () => {
    if (!state.login || !state.password || !state.url) {
      setError('заполните все поля')
      return false
    }
    return true
  }

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!checkFields()) return
    globalStore.setData({ ...state })
    globalStore.setLogin(true)
  }

  useEffect(() => {
    setError('')
  }, [state])

  return (
    <Styled.Form onSubmit={(e) => handlerSubmit(e)}>
      <Styled.Title>Fake Authorisation</Styled.Title>
      <Styled.WrapperInput>
        <Styled.Icon src={prefix + 'user.svg'} />
        <Styled.Input
          type='text'
          name='user'
          onChange={(e) => onChangeLogin(e.target.value)}
          value={state.login}
          title='username'
        />
      </Styled.WrapperInput>
      <Styled.WrapperInput>
        <Styled.Icon src={prefix + 'lock.svg'} />
        <Styled.Input
          type='text'
          name='password'
          onChange={(e) => onChangePassword(e.target.value)}
          value={state.password}
          title='password'
        />
      </Styled.WrapperInput>
      <Styled.WrapperInput>
        <Styled.Icon src={prefix + 'link.svg'} />
        <Styled.Input
          type='text'
          name='url'
          onChange={(e) => onChangeURL(e.target.value)}
          value={state.url}
          title='url'
        />
      </Styled.WrapperInput>
      <Styled.ErrorMessage error={!!error}>{error}</Styled.ErrorMessage>
      <Styled.WrapperBtn>
        <Styled.Btn>save data</Styled.Btn>
      </Styled.WrapperBtn>
    </Styled.Form>
  )
}
