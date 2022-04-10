const Button = (props) => {

    const className = ` ${props.className}`;

    return (
        <button
            className={className}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;