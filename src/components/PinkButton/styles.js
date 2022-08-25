import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.button`
  font-family: 'VT323', monospace;
  height: 3.2rem;
  width: fit-content;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 2rem;
  line-height: 21px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.COLORS.PINK_P};
  }

`