"use client"

import { StyleHeader } from "./style"
import { Button } from "@/components/Button"
import { IoMdAdd } from "react-icons/io"
import { FiLogOut } from "react-icons/fi"
import { ModalTask } from "@/components/ModalAddTask"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteCookie } from "cookies-next"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const logout = () => {
        deleteCookie("token")
        router.push("/")
    }
    const openModal = () => setIsOpen(true)
    return(
        <StyleHeader>
            <nav>
                <h1>Task Manager</h1>
                <Button eventClick={openModal} type="button" styleButton="add_task">
                    <IoMdAdd size={25} />
                </Button>
                <Button eventClick={logout} type="button" styleButton="logout">
                    <FiLogOut size={25} />
                </Button>
            </nav>
            <ModalTask setModalIsOpen={setIsOpen} modalIsOpen={isOpen} />
        </StyleHeader>
    )
}

/*
<Button eventClick={logout} type="button" styleButton="">
                    <FiLogOut size={25} />
                </Button>
*/