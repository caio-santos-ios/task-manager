import { styled } from "styled-components";

export const StyleHeader = styled.header`
    background-color: var(--primary-color);
    color: var(--secundary-color);
    height: 5rem;
    
    > nav {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        margin: 0 auto;
        height: 100%;
        justify-content: space-around;
    }

    @media (min-width: 957px) {
        > nav {
            width: 35rem;
        }
    }

`
