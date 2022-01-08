import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "./CardComponent";
import {getUsers} from "../redux/actions/users";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return(
        <div>
            {loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user)=>{
                <Card user={user} key={user.id}/>
            })}
            {users.length === 0 && !loading && <p>No users available</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    )
};
export default Users;