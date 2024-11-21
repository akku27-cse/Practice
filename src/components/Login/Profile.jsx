import React, { useContext } from 'react'
import { userContext } from './../../useContext/userContext';

const Profile = () => {
    const {user}=useContext(userContext);

if(!user) return <div>Please Login</div>
return <div>welcome{user.userName}</div>
}

export default Profile
