import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .ant-spin-fullscreen { 
        background-color: rgba(0,0,0,0.25);
    }
    
    .ant-dropdown-menu-title-content {
        text-align: center !important;
    }

    body {  
        overflow: hidden;
    }
`;
