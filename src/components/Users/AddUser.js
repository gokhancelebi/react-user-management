import Button from "../UI/Button";
import {useState} from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUsername] = useState('');

    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const [enteredAge, setEnteredAge] = useState('');

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {

        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                error: true,
                message: 'Please enter a valid username and age',
                title: 'Invalid Input'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                error: true,
                message: 'Please enter a valid age',
                title: 'Invalid Input'
            });
            return;
        }

        props.onAddUser(enteredUserName, +enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper className='w-full'>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onClose={errorHandler}
                />
            )}
            <Card className='p-5'>
                <form action=""
                      onSubmit={addUserHandler}
                      className='flex flex-col'>
                    <label htmlFor="username" className='text-black'>Username</label>
                    <input type="text"
                           id='username'
                           value={enteredUserName}
                           onChange={usernameChangeHandler}
                           className='w-full p-2 rounded mt-2 text-black border-black border-2'
                    />
                    <label htmlFor="age"
                           className='mt-5 text-black'
                    >Age(years)</label>
                    <input type="text"
                           id='age'
                           className='w-full p-2 rounded mt-2 text-black border-black border-2'
                           onChange={ageChangeHandler}
                           value={enteredAge}/>
                    <Button type="submit"
                            className='w-max ml-auto mt-5 bg-white text-black p-2 rounded border-black border-2'
                    >Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
