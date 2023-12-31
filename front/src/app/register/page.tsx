"use client"

import { TUserRegister, Tlogin } from "@/@types/user"
import { ContainerInput } from "@/components/Input/style"
import { useForm, SubmitHandler } from "react-hook-form"
import { Section } from "@/components/Section"
import { Form } from "@/components/Form"
import { Button } from "@/components/Button"
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa6"
import { useEffect, useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaUserRegister } from "@/schemas/schema.user"
import { api } from "@/services/api"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from "next/navigation"

export default function Register() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TUserRegister>({resolver: zodResolver(schemaUserRegister)})
  const [passwordOff, setPasswordOff] = useState(true)
  const [passwordOffConfirmation, setPasswordOffConfirmation] = useState(true)
  const router = useRouter()

  const registerUser = async (data: TUserRegister) => {
    setLoading(true)
    try {
      await api.post("accounts/", data)
      reset()
      toast.success("Usuário criado")
      setLoading(false)
    } catch (error: any) {
      if(error.status) return toast.error("Usuário ou E-mail já existe")
      setLoading(false)
    }
  }

  return (
      <>
        <main>
          <ToastContainer theme="colored" />
          <Section styleSection="login">
            <Form submit={handleSubmit(registerUser)}>
                <label htmlFor="username">Nome</label>
                <ContainerInput>
                    <div id="container" style={ errors.username ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                        <input placeholder="Digite seu nome" id="username" {...register("username")} type="text" />
                    </div>
                    {errors.username ? <span>{errors.username.message}</span> : <span></span> }
                </ContainerInput>

                <label htmlFor="email">Email</label>
                <ContainerInput>
                    <div id="container" style={ errors.email ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                        <input placeholder="Digite seu e-mail" id="email" {...register("email")} type="text" />
                    </div>
                    {errors.email ? <span>{errors.email.message}</span> : <span></span> }
                </ContainerInput>
                <label htmlFor="password">Senha</label>
                <ContainerInput>
                    <div id="container" style={ errors.password ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                        <input placeholder="Digite seu senha" id="password" {...register("password")} type={passwordOff ? "password" : "text"} />
                    </div>
                    <button type="button" onClick={() => setPasswordOff(!passwordOff)}>
                        {passwordOff ? 
                        <FaEyeSlash size={25} />
                        :
                        <FaEye size={25} />
                        }
                    </button>
                    {errors.password ? <span>{errors.password.message}</span> : <span></span> }
                </ContainerInput>

                <label htmlFor="confirmationPassword">Confirmar senha</label>
                <ContainerInput>
                    <div id="container" style={ errors.confirmationPassword ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                        <input placeholder="Confirme sua senha" id="confirmationPassword" {...register("confirmationPassword")} type={passwordOffConfirmation ? "password" : "text"} />
                    </div>
                    <button type="button" onClick={() => setPasswordOffConfirmation(!passwordOffConfirmation)}>
                        {passwordOffConfirmation ? 
                        <FaEyeSlash size={25} />
                        :
                        <FaEye size={25} />
                        }
                    </button>
                    {errors.confirmationPassword ? <span>{errors.confirmationPassword.message}</span> : <span></span> }
                </ContainerInput>

              <Button styleButton="login" type="submit">{loading ? "Cadastrando..." : "Cadastrar-se"}</Button>
              <span></span>
              <h5>Já tenho uma conta? <Link href="/">Fazer login</Link></h5>
            </Form>
          </Section>
        </main>
      </>
  )
}
