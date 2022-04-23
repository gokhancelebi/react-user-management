import './App.scss';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {

    const [users, setUsers] = useState([]);

    const addUserHandler = (userName,age) => {
        setUsers(prevUsers => {
            return [...prevUsers, {name: userName, age: age, id: Math.random().toString()}];
        });
    };

    return (
        <div
            className="app max-w-5xl mx-auto mt-20 flex p-5 w-full flex-col md:flex-row gap-5"
        >
            <AddUser
                onAddUser={addUserHandler}
            />
            {
                users.length > 0 &&
                <UsersList
                    users={users}
                />
            }
        </div>
    )
}

export default App;
