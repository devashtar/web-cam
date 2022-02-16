import styled from 'styled-components'

export const Window = styled.div<{ screenMode: boolean }>`
  position: ${(props) => (props.screenMode ? 'absolute' : 'relative')};
  left: 0;
  top: 0;

  background-color: #111111;
  padding-bottom: var(--menu-height);

  min-width: 320px;
  min-height: 240px;
  max-width: 100%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  width: ${(props) => (props.screenMode ? '100%' : '480px')};
  height: ${(props) => (props.screenMode ? '100vh' : '320px')};

  @media (max-width: 414px) {
    width: 375px;
    height: 270px;
  }

  @media (max-width: 320px) {
    width: 320px;
    height: 240px;
  }

  overflow: hidden;
`
