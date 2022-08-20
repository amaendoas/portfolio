import styled from "styled-components";


export const Container = styled.div`
  gap: 7rem;
  width: 100%;
  height: 100%;

  .title {
    background: ${({ theme }) => theme.COLORS.PURPLE_P}
  }

  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 34rem;
    position: relative;
    animation: downtop 1s backwards;
    margin: 0 auto;
  }

  button.rec-arrow {
    background: none;
    box-shadow: none;
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iyZTLA:hover:enabled, .iyZTLA:focus {
    color: ${({theme}) => theme.COLORS.TEXT};
    background-color: transparent;
    box-shadow: 0 0 2px 0 ${({theme}) => theme.COLORS.TEXT};
  }

 .rec-dot_active {
  background-color: rgba(148,240,215,.5);
  box-shadow: 0 0 1px 2px ${({theme}) => theme.COLORS.TEXT};
 }

 .rec-carousel {
  height: 32rem !important;
  width: 33rem;
 }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px ${({theme}) => theme.COLORS.GREEN_P};
  }

  .rec-slider-container{
    margin: 0;
  }

  .rec-pagination {
    margin-top: 0;
  }

  .rec-item-wrapper {
    width: 27rem !important;
  }

  .smile, .heart {
    position: absolute;
  }

  .smile {
    top: -2rem;
    right: 0;
    z-index: 1;
  }

  .heart {
    bottom: 3.5rem;
    left: 2rem;
    z-index: 1;
  }

  @media (min-width: 800px) {
    .carousel-wrapper {
      width: 58rem;
    }

    .rec-carousel {
      width: 60rem;
    }
  }

  @media (min-width: 1080px) {
    .carousel-wrapper {
      width: 90rem;
    }
    .rec-carousel {
      width: 88rem;
    }

    .smile {
      width: 12rem;
      right: 1rem;
    }

    .heart {
      width: 7rem;
      left: 4rem;
    }

  }
`

export const Content = styled.div`
  height: 88%;
  display: flex;
  align-items: center;
  justify-content: center;
`