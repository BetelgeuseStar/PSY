import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  & > * {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    text-align: left;
    color: #ffffff;
    &::placeholder {
      color: #b38687;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Input = styled.input`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  resize: none;
  scrollbar-width: none;
`;
