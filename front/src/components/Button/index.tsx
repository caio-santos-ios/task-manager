import { ReactNode } from "react";
import { StyleButton } from "./style";

interface Iprops {
    styleButton: string;
    children: ReactNode;
    type: "button" | "submit"
}

export const Button = ({styleButton, children, type}: Iprops) => <StyleButton type={type} styleButton={styleButton}>{children}</StyleButton>