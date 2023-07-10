import React, { useState } from "react";
import { styled } from "styled-components";

const options = ["검은색바지", "파란색바지", "빨간색바지"];

const SelectBox = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect1Change = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div>
      <SelectWrap>
        <SelectHeader
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span>{selectedOption || "선택하세요."}</span>
          <span>▼</span>
        </SelectHeader>
        {open && (
          <SelectList>
            {options.map((option) => (
              <SelectValue
                key={option}
                onClick={() => {
                  handleSelect1Change(option);
                }}
              >
                {option}
              </SelectValue>
            ))}
          </SelectList>
        )}
      </SelectWrap>
    </div>
  );
};
export default SelectBox;

const SelectWrap = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #000;
`;

const SelectHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const SelectList = styled.div`
  border-top: 1px solid #000;
  position: absolute;
  width: 150px;
  border: 1px solid #000;
  background-color: #ffffff;
`;

const SelectValue = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
