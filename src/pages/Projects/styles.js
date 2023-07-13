import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem; 
`

export const Title = styled.div`
  position: relative;
  width: 32rem;
  .folders {
    position: absolute;
    bottom: 0;
    width: 5rem;
    right: 0;
    animation: downtop 1s backwards;
  }
`
export const Content = styled.div`
  display: flex;
  padding-bottom: 1rem;
  max-width: 130rem;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  animation: downtop 1s backwards;

  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK_S};
    border: 1px solid #5c5c5c;
    box-shadow: inset -3px -3px 2px 1px ${({ theme }) => theme.COLORS.PINK_P};
  }

  .more {
    width: 24rem;
  }

  @media (min-width: 800px) {
    .more {
      width: 27rem;
    }
  }
`
