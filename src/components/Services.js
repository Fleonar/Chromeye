import show from '../Icons/chromeye_assignment_plus_v1.svg'
import hide from '../Icons/chromeye_assignment_minus_v1.svg'
import classes from './Services.module.scss';

const Services = ({ props }) => {
    return (
        <div className={`container ${classes.services}`}>
            <div className={classes.content}>
                <div className={`row ${classes.sectionheading}`}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div className={`row ${classes.servicelist}`}>
                    {props.items.map((item, index)=>(
                        <div className={`col-md ${classes.item}`} key={index}>
                            <img src={item.icon} alt={item.title}/>
                            <h4>{item.title}</h4>
                            <input id={"Desc"+index} type="checkbox" defaultChecked={index<=1}/>
                            <label htmlFor={"Desc"+index}>
                                <span><img src={show} alt="show"/></span>
                                <span><img src={hide} alt="hide"/></span>
                            </label>
                            <p className={classes.collapsible}>{item.description}</p>
                        </div> 
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        <a className={`${classes.button} ${classes.getintouch}`} href={props.buttonUrl}><span>{props.buttonLabel}</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
