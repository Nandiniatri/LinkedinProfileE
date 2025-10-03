import { useContext } from 'react';
import './Header.css';
import { DataContext } from '../../context/DataContext';

const Header = () => {
    const { loginAuthComp } = useContext(DataContext);

    <div>
        <header className="sh-header">
            <div className="sh-container">
                <div className="sh-left">
                    <span className="sh-brand">Linkedin Review</span>
                </div>

                <div className="sh-right">
                    <button className="sh-btn" onClick={loginAuthComp}>Login</button>
                </div>
            </div>
        </header>
    </div>
}

export default Header;