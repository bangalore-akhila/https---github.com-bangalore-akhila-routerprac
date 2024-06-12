import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const Users = () => {

const [searchParams, setSearchParams ] = useSearchParams();
const showActiveUsers = searchParams.get('filter') === "active"

  return (
   <>
    <div>
<h2>Users</h2>
<li>User1</li>
<li>User2</li>
<li>User3</li>
    </div>
    <Outlet/>
    <button onClick={()=> setSearchParams({filter : "active"})}>Active Users</button>
    <button onClick={()=> setSearchParams()}>Reset Users</button>
    {showActiveUsers ? "Active Users" : "All users"}
   </>
  )
}

export default Users