import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../../constants';

const SuperBtn = ({
  typeBtn,
  lnk,
  to,
  otln,
  otlnInv,
  title,
  dark,
  welcome,
  disabled = false,
  children,
  statefrom,
  color,
  hoverColor,
}) => {
  const SuperButton = styled(lnk ? Link : 'button')`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 18px 44px;
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes[4]}px;
    line-height: ${theme.lineHeights.btn};
    cursor: pointer;
    background-color: ${color || theme.colors.greenAccent};
    &:hover {
      color: ${theme.colors.primaryLightText};
      background-color: ${hoverColor || theme.colors.darkAccent};
      transform: scale(1.1);
    }
    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes[5]}px;
    }
    @media screen and (min-width: 1440px) {
      font-size: ${theme.fontSizes[6]}px;
    }
    ${otln &&
    css`
      border: 2px solid ${theme.colors.greenAccent};
      color: ${theme.colors.blackText};
      background-color: transparent;
      &:hover {
        color: ${theme.colors.primaryLightText};
        background-color: ${color || theme.colors.greenAccent};
      }
    `}
    ${otlnInv &&
    css`
      border: 2px solid ${theme.colors.whiteText};
      background-color: transparent;
      &:hover {
        border: 2px solid ${color || theme.colors.greenAccent};
        color: ${theme.colors.greenAccent};
        background-color: transparent;
      }
    `}
    ${dark &&
    css`
      background-color: ${theme.colors.primaryDarkText};
      &:hover {
        background-color: ${color || theme.colors.greenAccent};
      }
    `}
    ${welcome &&
    css`
      &:hover {
        color: ${theme.colors.primaryLightText};
        background-color: ${theme.colors.primaryDarkText};
        transform: scale(1.1);
      }
    `}
    &:hover:disabled {
      background-color: ${hoverColor || theme.colors.darkAccent};
    }
    ${lnk &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
    ${!lnk &&
    css`
      border: none;
      &:disabled {
        background-color: ${hoverColor || theme.colors.darkAccent};
        color: ${theme.colors.blackText};
        cursor: not-allowed;
      }
    `}
    background-color: ${lnk
      ? color || theme.colors.greenAccent
      : 'transparent'};
    color: ${lnk ? theme.colors.primaryLightText : 'inherit'};
  `;

  return (
    <SuperButton
      to={to}
      state={statefrom}
      type={!lnk ? typeBtn : undefined}
      disabled={disabled}
    >
      {title}
      {children}
    </SuperButton>
  );
};

export default SuperBtn;
