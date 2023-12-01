"use client"

import ReactModal from 'react-modal';
import { Modal } from './style';
import { set, useForm } from 'react-hook-form';
import { ContainerInput } from '../Input/style';
import { Form } from '../Form';
import { Button } from '../Button';
import { api } from '@/services/api';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useAtom } from 'jotai';
import { listTasks } from '@/jotai/tasks';

interface Iprops {
    modalIsOpen: boolean;
    setModalIsOpen: (value: boolean) => void;
}

export const ModalTask = ({modalIsOpen, setModalIsOpen}: Iprops) => {
    const [tasks, setTasks] = useAtom(listTasks)
    const { register, handleSubmit, reset} = useForm()
    const token: string | undefined = Cookies.get('token');

    const createTask = async (data: any) => {
        try {
            const res = await api.post("tasks/", data, { headers: { Authorization: `Bearer ${token}` } })
            setTasks([...tasks, res.data])
            reset()
            toast.success("Tarefa criada")
            setModalIsOpen(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ReactModal style={{ overlay: {background: 'transparent', border: '0', width: '100%', height: '30rem', maxWidth: '40rem', margin: '0 auto'} }} isOpen={modalIsOpen}>
            <ToastContainer />
            <Modal>
                <Form submit={handleSubmit(createTask)}>
                    <label htmlFor="titlo_task">Titulo da Tarefa</label>
                    <ContainerInput>
                        <div id="container">
                        <input placeholder="Titulo da tarefa" id="titlo_task" {...register("title")} type="text" />
                        </div>
                    </ContainerInput>
                    <label htmlFor="description_task">Descrição da Tarefa</label>
                    <ContainerInput>
                        <div id="container">
                            <input placeholder="Descreva a tarefa" id="description_task" {...register("description")} type="text" />
                        </div>
                    </ContainerInput>
                    <Button styleButton="login" type="submit">Criar</Button>
                </Form>
            </Modal>
        </ReactModal>
    )
}