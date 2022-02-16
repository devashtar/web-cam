import styled from 'styled-components'

const prefix = process.env.PUBLIC_URL

export const App = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    top / cover no-repeat url(${prefix + '/images/bg-image.jpg'});

  display: flex;
  justify-content: center;
  align-items: center;
`
