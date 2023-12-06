import classes from './Header.module.scss';
import menuopen from '../Icons/chromeye_assignment_sandwitch_v1.svg';
import menuclose from '../Icons/chromeye_assignment_cross_v1.svg';
import { useState } from 'react';

const Header = (props) => {
    const sortedMenu = props.menu.sort((a, b) => a.order - b.order);

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={classes.header}>
            <div className={`container ${classes.content}`}>
                <div className={classes.logo}><img src={props.logo} alt=""/></div>
                <div className={classes.mainmenu}>{sortedMenu.map((item, index) => (
                    item.url === '#contact' ? <a key={index} className={`${classes.button} ${classes.getintouch}`} href={item.url}><span>{item.name}</span></a> :
                    item.url && <a key={index} href={item.url}><span>{item.name}</span></a>
                ))}</div>
                <div className={classes.small}>
                    {menuOpen ? <div className={classes.menuclose} onClick={menuToggleHandler}><img src={menuclose}/></div> : <div className={classes.menuopen} onClick={menuToggleHandler}><img src={menuopen}/></div>}
                </div>
            </div>
            {menuOpen && <div className={`${classes.content} ${classes.mobilemenu}`}>
                {sortedMenu.map((item, index) => (
                    item.url === '#contact' ? <a key={index} className={`${classes.button} ${classes.getintouch}`} href={item.url} onClick={menuToggleHandler}><span>{item.name}</span></a> :
                    item.url && <a key={index} href={item.url} onClick={menuToggleHandler}><span>{item.name}</span></a>
                ))}
            </div>}
        </div>
    );
};

export default Header;