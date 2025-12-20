import styled from "styled-components";
import { Upload as AntUpload } from "antd";

export const Wrapper = styled.div`
  border: 2px solid #b38687;
  box-shadow: 0px 4px 31.2px 10px rgba(179, 134, 135, 0.5);
  border-radius: 15px;
  background: linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%);
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Upload = styled(AntUpload)`
  width: 100% !important;
  height: 100% !important;

  & .ant-upload-select {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
  }
`;

export const ActiveLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 10px;

  cursor: pointer;

  opacity: 0;

  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }

  & > span {
    padding-top: 2px;
    width: 25px;

    fill: #b38687;
    opacity: 1;

    transition: all 0.3s;
  }

  & svg {
    fill: #b38687;
    opacity: 1;
    width: 25px;
    height: 25px;
  }
`;

export const VisibleIconLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: start;

  padding: 10px;

  & > span {
    padding-top: 2px;

    fill: #b38687;
    opacity: 1;

    transition: all 0.3s;
  }

  & svg {
    fill: white;
    opacity: 1;
    width: 35px; 
    height: 28px  
`;
