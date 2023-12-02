import { styled } from "styled-components";

export const StyleForm = styled.form`
    padding: 1rem;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;
    > label {
        font-size: 1.1rem;
    }

    > span {
        margin: 2rem 0;
        background-color: rgb(235, 244, 244);
        width: 100%;
        height: 0.1rem;
    }

    > h5 {
        text-align: center;
    }
`
