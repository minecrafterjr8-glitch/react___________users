import { useState } from "react";
import type { UserType } from "../types/types";
import Skeleton from "./SKeLETON";
import { User } from "./User";


export const Users = ({ users, invited, clickInvite, sendInvite }: { users: UserType[] | null, invited: number[], clickInvite: (userId:number)=>void, sendInvite: ()=>void  }) => {
    const [search, setSearch] = useState("")
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Найти пользователя..." />
            </div>


            {users ?
                <ul className="users-list">
                    {users && users
                        .filter(user => {
                            const fullname = `${user.firstName} ${user.lastName}`.toLowerCase()
                            const firstName = user.firstName.toLowerCase()
                            const lastName = user.lastName.toLowerCase()
                            return (
                                firstName.includes(search.toLowerCase()) ||
                                lastName.includes(search.toLowerCase()) ||
                                fullname.includes(search.toLowerCase())
                            )
                        }).map(user =>
                            <User user={user} isInvited={invited.includes(user.id)} clickInvite={clickInvite} key={user.id}/>
                        )}
                </ul>
                :
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            }
            {invited.length > 0 ? <button className="send-invite-btn" onClick={sendInvite}>Отправить приглашение</button> : null}
        </>
    );
};
