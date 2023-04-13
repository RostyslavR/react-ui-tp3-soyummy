import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import chevron from './chevron.svg';

export const AutoInput = ({
  list,
  field,
  addText = '',
  inputName,
  handleAutoinput,
  height,
  width,
  flexGrow,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isOptionsListOpen, setIsOptionsListOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const ref = useRef(null);

  const handleOptionClick = idx => {
    const sValue = `${options[idx][field]}${addText}`;
    setSelectValue(sValue);
    setInputValue(sValue);
    setIsOptionsListOpen(false);

    handleAutoinput({
      name: inputName,
      value: options[idx][field],
      element: options[idx],
    });
  };

  useEffect(() => {
    !isOptionsListOpen && inputValue !== selectValue && setInputValue('');
  }, [inputValue, selectValue, isOptionsListOpen]);

  useEffect(() => {
    setOptions(
      list.filter(item =>
        item[field].toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [list, field, inputValue]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOptionsListOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <Wrapper ref={ref}>
      <InputWrapper>
        <Input
          name={inputName}
          type="text"
          value={inputValue}
          autoComplete="off"
          required
          height={height}
          width={width}
          onChange={e => setInputValue(e.target.value)}
          onClick={() => {
            setIsOptionsListOpen(true);
          }}
        />
        <ControlButton
          type="button"
          onClick={() => {
            setIsOptionsListOpen(s => !s);
          }}
        >
          <Chevron
            src={chevron}
            alt="open list"
            rotate={isOptionsListOpen.toString()}
          />
        </ControlButton>
      </InputWrapper>
      {isOptionsListOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(index)}>
              {option[field]}
              {addText}
            </Option>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  /* flex: 1 100%; */
  /* flex-grow: 1; */
  /* width: ${({ width }) => (width ? width : '100%')}; */
  width: 100%;
  /* color: black; */
  color: ${({ theme: { colors } }) => colors.blackText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  /* flex: 1 80%; */
  /* width: ${({ width }) => (width ? width : '100%')}; */
`;

const Input = styled.input`
  width: 100%;

  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};
  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};

  /* width: ${({ width }) => (width ? width : '100%')}; */
  /* width: 50px; */
  /* flex: 1 80%; */
  /* padding: 16px; */
  /* height: 53px; */
  outline: none;
  height: ${({ height }) => (height ? height : '40px')};
  border: none;
  border-bottom: 1px solid black;
  /* border-radius: 4px 4px 0 0; */
  /* background-color: #d9d9d9; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2px;

  border: none;
  background-color: inherit;
  /* border-radius: 4px; */
  /* background-color: #d9d9d9; */
  transform: translateY(-50%);
  cursor: pointer;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  z-index: 1;
  max-height: 180px;
  width: 100%;
  overflow: auto;
  list-style-type: none;
  outline: none;
  padding: 0;
  margin: 0;

  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: ${({ theme: { colors } }) => colors.primaryDarkText};

  background-color: ${({ theme: { colors } }) => colors.whiteBackgroundToBlack};
  /* border: 1px solid #ccc; */

  border: none;
  border-radius: 4px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    font-size: 18px;
  }
`;

const Option = styled.li`
  padding: 8px;
  color: opacity 0.5;
  /* background-color: ${props => (props.selected ? '#eee' : '#fff')}; */
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.greenAccent};
    color: opacity 1;
    /* background-color: #eee; */
  }
`;

const Chevron = styled.img`
  /* width: 200px; */
  /* height: auto; */
  /* border-radius: 50%; */
  /* width: 20px; */
  transition: transform 0.5s ease-in-out; // add a transition for smooth animation
  transform: ${({ rotate }) => rotate === 'true' && 'rotate(180deg)'};
`;
