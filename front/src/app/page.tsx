"use client"

import { Tlogin } from "@/@types/user"
import { ContainerInput } from "@/components/Input/style"
import { useForm, SubmitHandler } from "react-hook-form"
import { Section } from "@/components/Section"
import { Form } from "@/components/Form"
import { Button } from "@/components/Button"
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa6"
import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaUserLogin } from "@/schemas/schema.user"
import { api } from "@/services/api"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"


export default function Login() {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<Tlogin>({resolver: zodResolver(schemaUserLogin)})
  const [passwordOff, setPasswordOff] = useState(true)
  const router = useRouter()

  const login = async (data: Tlogin) => {
    setLoading(true)
    try {
      const res = await api.post("accounts/login/", data)
      setCookie("token", res.data.access)
      router.push("/task")
    } catch (error) {
      setLoading(false)
    }
  }


  return (
      <>
        <main>
          <ToastContainer />
          <Section styleSection="login">
            <Form submit={handleSubmit(login)}>
              <label htmlFor="email">Usuário</label>
              <ContainerInput>
                <div id="container" style={ errors.username ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                  <input placeholder="Digite seu usuário" id="username" {...register("username")} type="text" />
                </div>
                {errors.username ? <span>{errors.username.message}</span> : <span></span> }
              </ContainerInput>
              
              <label htmlFor="password">Senha</label>
              <ContainerInput>
                <div id="container" style={ errors.password  ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                  <input placeholder="Digite sua senha" id="password" {...register("password")} type={passwordOff ? "password" : "text"}/>
                </div>
                {errors.password ? <span>{errors.password.message}</span> : <span></span> }
                <button type="button" onClick={() => setPasswordOff(!passwordOff)}>
                  {passwordOff ? 
                  <FaEyeSlash size={25} />
                  :
                  <FaEye size={25} />
                }
                </button>
              </ContainerInput>
              <Button styleButton="login" type="submit">{loading ? "Entrando..." : "Entrar"}</Button>
              <span></span>
              <h5>Não tenho conta? <Link href="/register">Criar conta</Link></h5>
            </Form>
          </Section>
        </main>
      </>
  )
}
