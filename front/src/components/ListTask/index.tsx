"use client"

import { useAtom } from "jotai"
import { CardTask, StyleListTask } from "./style"
import { Ttask } from "@/@types/task"
import { listTasks } from "@/jotai/tasks"
import { useEffect } from "react"
import { api } from "@/services/api"
import Cookies from 'js-cookie'
import { Button } from "../Button"

export const ListTask = () => {
    const [tasks, setTask] = useAtom(listTasks)
    const token: string | undefined = Cookies.get('token')
    console.log(tasks)

    useEffect(() => {
        const req = async () => {
            try {
              const res = await api.get("tasks/", { headers: { Authorization: `Bearer ${token}` } })
              setTask(res.data)
            } catch (error) {
              console.log(error)
            }
        }
        req()
    }, [])
    
    const finishTask = async (id: string) => {
      const newTask = tasks.filter((task: Ttask) => task.id != String(id))
      try {
        await api.delete(`tasks/${id}/`, { headers: { Authorization: `Bearer ${token}` } })
        setTask(newTask)
      } catch (error) {}
    }
    
    return(
        <StyleListTask>
            
            {
              tasks.length > 0 ?
              tasks.map((task: Ttask) => {
                return(
                    <CardTask key={task.id}>
                        <p>
                            {task.description}
                        </p>                        
                        <input id={String(task.id)} onClick={(e) => finishTask(e.currentTarget.id)} type="checkbox" />
                    </CardTask>
                )
              })
              :
              <h1>Sem tarefas</h1>
            }
        </StyleListTask>
        )
    } 