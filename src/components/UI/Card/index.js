const Card = (props) => {

    const initialClasses = 'card w-full bg-white rounded h-max' + (props.className ? ' ' + props.className : '');

    return (
        <div className={initialClasses}>
            {props.children}
        </div>
    )
}

export default Card;