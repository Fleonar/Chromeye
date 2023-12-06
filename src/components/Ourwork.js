import classes from './Ourwork.module.scss';

const Ourwork = ({ props }) => {
    return (
        <div className={`container ${classes.ourwork}`}>
            <div className={classes.content}>
                <div className={`row ${classes.sectionheading}`}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                {props.items.map( (item, index) => (
                    <div key={index} className={`row ${classes.item}`}>
                        <div className={`col-md ${classes.copyblock}`}>
                            <div className={classes.copy}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <a className={classes.button} href={item.buttonUrl}>{item.buttonLabel}</a>
                            </div>
                        </div>
                        <div className={`col-md ${classes.imageblock}`}>
                            <img src={item.image} alt={item.title}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ourwork;