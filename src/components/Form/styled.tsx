import styled from 'styled-components'

export const Form = styled.form`
  background-color: white;

  padding: 20px 10px;
  max-width: 360px;
  width: 100%;

  display: block;

  border-radius: 8px;

  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
`

export const Title = styled.h2`
  text-align: center;
  color: #333333;
`

export const WrapperInput = styled.div`
  position: relative;
  margin-top: 40px;
`

export const Input = styled.input`
  background-color: #fefefe;
  padding-left: 28px;

  width: 100%;
  height: 36px;

  border: 1px solid #cccccc;
  border-radius: 4px;

  outline: none;

  &:focus {
    border: 1px solid #4ab5fb;
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 6px;
  top: calc(50% - 8px);
  display: block;
  width: 16px;
  height: 16px;
`

export const WrapperBtn = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export const Btn = styled.button`
  background-color: #47b3fa;

  padding: 8px 18px;

  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: white;

  border: none;
  border-radius: 6px;

  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2da6f6;
  }
`

export const ErrorMessage = styled.div<{ error: boolean }>`
  background-color: ${(props) =>
    props.error ? 'rgba(255, 134, 134, 0.2)' : 'transparent'};
  margin-top: 10px;
  padding: 10px 20px;

  width: 100%;

  border-top: ${(props) => (props.error ? '1px solid #fa7676' : 'none')};
  border-bottom: ${(props) => (props.error ? '1px solid #fa7676' : 'none')};

  text-align: center;
  font-size: 15px;
  line-height: 20px;
  color: #d62020;
`
