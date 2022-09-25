
import "./input.scss"

const Input = ({type, name, placeholder, important}) => {

    return(
        <section className="input">
            {name.trim().length === 0 ? "" : 
                <label htmlFor={name}>{name}</label>
            }
            <input type={type} name={name} id={type} placeholder={placeholder} />
        </section>
    );
}

export default Input;