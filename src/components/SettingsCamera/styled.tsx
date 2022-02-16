import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 10px;
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`

export const Block = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 10px;

  min-width: 240px;
  min-height: 180px;
  max-width: 500px;
  max-height: 360px;

  width: 100%;
  height: inherit;
  border-radius: 8px;

  overflow: auto;
`

export const Close = styled.button`
  background-color: #f35959;
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  margin: 0;

  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 50%;

  font-size: 14px;
  line-height: 14px;
  color: #000000;

  &:hover {
    color: #ffffff;
  }

  cursor: pointer;
  outline: none;
  z-index: 10000;
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 8px;

  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 2px;
  top: 2px;

  display: block;
  width: 16px;
  height: 16px;
`

export const Label = styled.label`
  padding-left: 28px;

  display: inline-block;

  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  color: #eeeeee;
`

export const Status = styled.span`
  padding-left: 10px;

  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  color: #eeeeee;
`

export const InputRange = styled.input`
  background-color: transparent;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  width: 100%;

  overflow: auto;
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  display: inline-block;
`

export const Text = styled.p`
  padding: 0;
  margin: 12px 0px 4px;
  padding-bottom: 6px;

  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: #dedede;

  &:hover {
    color: #fefefe;
    text-decoration: underline;
  }

  &.active {
    color: #96d480;
  }

  cursor: pointer;
`
