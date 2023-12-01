"use client"


import { ReactNode } from "react";
import { StyleButton } from "./style";

interface Iprops {
    styleButton: string;
    children: ReactNode;
    type: "button" | "submit";
    eventClick?: any;
}

export const Button = ({styleButton, children, type, eventClick}: Iprops) => <StyleButton onClick={() => eventClick()} type={type} $styleButton={styleButton}>{children}</StyleButton>