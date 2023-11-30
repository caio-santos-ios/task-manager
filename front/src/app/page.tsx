"use client"

import "@/style/globalStyle.css"
import "@/style/reset.css"
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

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<Tlogin>({resolver: zodResolver(schemaUserLogin)})
  const [passwordOff, setPasswordOff] = useState(true)

  const login = async (data: Tlogin) => {
    console.log(data)
    try {
      const res = await api.post("accounts/login/", data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const req = async () => {
    const res = await api.post("accounts/login/")
    console.log(res)
  }
  req()

  return (
      <>
        <main>
          <Section styleSection="login">
            <Form submit={handleSubmit(login)}>
              <label htmlFor="email">Email</label>
              <ContainerInput>
                <div id="container" style={ errors.email ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
                  <input placeholder="Digite seu e-mail" id="email" {...register("email")} type="text" />
                </div>
                {errors.email ? <span>{errors.email.message}</span> : <span></span> }
              </ContainerInput>
              
              <label htmlFor="password">Senha</label>
              <ContainerInput>
                <div id="container" style={ errors.email ? { border: '1px solid red'} : { border: '1px solid rgb(234, 234, 234)'}}>
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
              <Button styleButton="login" type="submit">Entrar</Button>
              <span></span>
              <h5>Não tenho conta? <Link href="/register">Criar conta</Link></h5>
            </Form>
          </Section>
        </main>
      </>
  )
}
