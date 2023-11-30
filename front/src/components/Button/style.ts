import { css, styled } from "styled-components";

export const StyleButton = styled.button<{styleButton: string}>`
    border: 0;
    padding: 1rem;
    border-radius: 2rem;
    background-color: blue;
    color: white;
    font-size: 1rem;
    font-weight: 800;

    ${(styleButton: any) => {
        switch(styleButton){
            case "login":
                return css`
                    background-color: blue;
                `
        }
    
    }}
`