const Button = ({ onClick, className, children }) => (
    <button onClick={onClick} className={className}>{children}</button>
)

export default Button; 