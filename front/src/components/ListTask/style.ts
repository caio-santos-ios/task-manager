import { css, styled } from "styled-components";

export const StyleListTask = styled.ul`
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1rem;
    padding: 4rem 0.3rem;
    max-width: 35rem;
    height: 87vh;
    overflow-y: auto;

    @media (min-width: 550px) {
        width: 60vw;
    }

`

export const CardTask = styled.li`
    background-color: aliceblue;
    padding: 1.2rem;
    width: 100%;
    max-width: 35rem;
    min-height: 6rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input[type=checkbox] {
        width: 2rem;
        height: 1.5rem;
        background-color: #2196F3;
    }

    > p {
        font-size: 1rem;
        font-weight: 600;
        width: 80%;
        height: 100%;
    }
`