import { Users } from './components/Users'
import { Success } from './components/Success'
import './style.css'
import { useEffect, useState } from 'react'
import type { UserType } from './types/types';




function App() {
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [invited, setInvited] = useState<number[]>([])
  const [status, setStatus] = useState<"users" | "success">("users")

  async function apiGetUsers() {
    const response = await fetch("https://dummyjson.com/users")
    const result = await response.json()
    setUsers(result.users)
    console.log(result.users);
  }

  function clickInvite(userId: number) {
    const invitedUsers = [...invited]
    if (invitedUsers.includes(userId)) {
      const m = invitedUsers.filter(id => id != userId)
      setInvited(m)
    } else {
      invitedUsers.push(userId)
      setInvited(invitedUsers)
    }

  }

  useEffect(() => {
    setTimeout(apiGetUsers, 3000)
  }, [])

  return (
    <>
      <div className="App">
        {status=="users" && <Users users={users} invited={invited} clickInvite={clickInvite} sendInvite={()=>setStatus("success")} />}
        {status=="success"&& <Success onBack={()=>setStatus("users")} count={invited.length} />}
      </div>
    </>
  )
}

export default App
