import classes from './Agency.module.scss';
import { useState } from "react";

const Agency = ({ props }) => {

    const [activeTab, setActiveTab] = useState(0);

    const tabClickHandler = (index) => {
        setActiveTab(index);
    }

    return (
        <div className={`container ${classes.agencyservices}`}>
            <div className={classes.content}>
                <div className={`row ${classes.sectionheading}`}>
                    <h2>{props.title}</h2>
                </div>
                <div className={`row ${classes.tabssection}`}>
                    <div className={`col-md ${classes.tabs}`}>
                        {props.items.map( (item, index) => (
                            <div key={index} className={ activeTab === index ? `${classes.active} ${classes.tabitem}` : classes.tabitem} onClick={() => tabClickHandler(index)}>
                                <span>{item.title}</span>
                                <div className={`${classes.collapsible}`}>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`col-md ${classes.images}`}>
                        {props.items.map( (item, index) => (
                            <div key={index} className={activeTab === index ? `${classes.active} ${classes.tabimage}` : classes.tabimage}>
                                <img src={item.image} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agency;