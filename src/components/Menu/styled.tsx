import styled from 'styled-components'

export const Menu = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--menu-height);

  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    background-color: rgba(255, 255, 255, 0.2);
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    display: block;
    height: 1px;
    width: 100%;

    z-index: 10000;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const Btn = styled.button`
  &:not(:last-child) {
    margin-right: 20px;
  }
  padding: 2px;
  width: 26px;
  height: 26px;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 0;

  cursor: pointer;
  outline: none;
`

export const Icon = styled.img`
  padding: 0;
  margin: 0;

  width: 100%;
  height: 100%;

  display: block;
`
