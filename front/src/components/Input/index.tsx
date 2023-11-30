"use client"

import { ReactNode } from "react";
import { ContainerInput } from "./style";

interface Iprops {
    children: ReactNode;
}

export const Input = ({children}: Iprops) => {
    return(
        <ContainerInput>{children}</ContainerInput>
    )
}