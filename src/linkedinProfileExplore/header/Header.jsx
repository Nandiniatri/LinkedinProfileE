import { useContext } from 'react';
import './Header.css';
import { DataContext } from '../../context/DataContext';
import Button from '../../components/Button';

const Header = () => {
    const { loginAuthComp } = useContext(DataContext);

    return (
        <div>
            <header className="sh-header">
                <div className="sh-container">
                    <div className="sh-left">
                        <span className="sh-brand">Linkedin Review</span>
                    </div>

                    <div className="sh-right">
                        <Button className="sh-btn" onClick={loginAuthComp}>
                            {loginAuthComp ? "Logout" : "Login"}
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
