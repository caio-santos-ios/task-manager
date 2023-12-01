import { css, styled } from "styled-components";

export const StyleButton = styled.button<{$styleButton: string}>`
    border: 0;
    color: white;
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({$styleButton}) => {
        switch($styleButton){
            case "add_task":
                return css`
                    width: 3rem;
                    height: 3rem;
                    background-color: var(--primary-color);
                    border-radius: 0.5rem;

                    background-color: var(--secundary-color);
                    color: var(--primary-color);
                `
                case "logout":
                    return css`
                        width: 3rem;
                        height: 3rem;
                        background-color: var(--secundary-color);
                        color: var(--primary-color);
                        border-radius: 0.5rem;
                    `

                case "login":
                    return css`
                        padding: 1rem 0;
                        background-color: var(--primary-color);
                        color: var(--secundary-color);
                        border-radius: 2rem;
                    `
        }
    }}
`