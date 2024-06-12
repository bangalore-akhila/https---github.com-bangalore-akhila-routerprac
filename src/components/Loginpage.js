import React, { useState } from 'react';
import { useAuth } from './Auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Loginpage = () => {
    const [user, setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.path || '/'

    const logInClick = () => {
        auth.login(user);
        navigate(path,{replace : true})
    }

    return (
        <div>
            <div>Loginpage</div>
            <label>UserName
                <input type="text" onChange={(e) => { setUser(e.target.value) }} />
            </label>
            <button onClick={() => { logInClick() }}>LogIn</button>
        </div>
    )
}

export default Loginpage