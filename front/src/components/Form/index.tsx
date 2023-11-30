"use client"

import { ReactNode } from "react";
import { StyleForm } from "./style"

interface Iprops {
    children: ReactNode;
    submit: any;
}

export const Form = ({children, submit}: Iprops) => {
    return <StyleForm onSubmit={submit}>{children}</StyleForm>
}