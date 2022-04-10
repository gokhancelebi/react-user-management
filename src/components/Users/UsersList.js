import Card from "../UI/Card";

const UsersList = (props) => {
    return (
        <Card className='p-5'>
            <ul className='flex flex-col gap-5'>
                {props.users.map(
                    user => (
                        <li key={user.id} className='text-black border-2 border-black p-2 rounded'>
                            {user.name} ({user.age} years old)
                        </li>
                    )
                )}
            </ul>
        </Card>
    )
}

export default UsersList;