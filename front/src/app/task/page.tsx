import { BASE_URL, api } from "@/services/api"
import { getCookie } from "cookies-next"
import { ListTask } from "@/components/ListTask"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Header } from "@/components/Header"

const verifyLogged = async (token: string | undefined) => {
  if(!token) redirect("/") 
} 

const request = async (token: string | undefined) => {
  const response = await fetch(`${BASE_URL}/tasks`, {headers: { 'Authorization': `Bearer ${token}`}})
  const tasks = await response.json()
  return tasks
}

export default async function Task() {
  const token: string | undefined = getCookie('token', { cookies })

  await verifyLogged(token)
  const task = await request(token)
    
  return (
    <>
      <Header />
      <main>
        <ListTask />
      </main>
    </>
  )
}
