import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 20px;
  bottom: calc(100% + 20px);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);

  border-radius: 6px;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  padding: 0;
  margin: 0;

  height: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover > p {
    color: #fefefe;
  }

  cursor: pointer;
`
export const Text = styled.p`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #bebebe;
`

export const Icon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`
