"use client"

import { ReactNode } from "react"
import { StyleSection } from "./style"

interface Iprops {
    children: ReactNode;
    styleSection: string;
}

export const Section = ({children, styleSection}: Iprops) => {
    return <StyleSection>{children}</StyleSection>
}