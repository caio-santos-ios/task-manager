import { styled } from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex-flow: column;
    gap: 0.1rem;
    position: relative;
    #container {
        border-radius: 0.5rem;
        padding: 0.7rem;
        background-color: rgb(234, 234, 234);
        
        input {
            background-color: transparent;
            height: 100%;
            width: 90%;
            border-radius: 0.6rem;
            color: rgb(165, 165, 165);
            padding-left: 1rem;
            font-size: 1rem;
        }
    }

    > span {
        color: red;
        height: 1.3rem;
    }


    button {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        width: 2rem;
        background-color: transparent;
        cursor: pointer;
    }
`