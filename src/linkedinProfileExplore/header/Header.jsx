import './Header.css';

const Header = () => (
    <div>
        <header className="sh-header">
            <div className="sh-container">
                <div className="sh-left">
                    <span className="sh-brand">RAELIN</span>
                </div>

                <div className="sh-right">
                    <button className="sh-btn">Login</button>
                </div>
            </div>
        </header>
    </div>
)

export default Header;