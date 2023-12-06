import classes from './Hero.module.scss';

const Hero = ({ props }) => {
    // console.log("props:", props);
    return (
        <div className={classes.heropicture}>
            <div className={`container ${classes.content}`}>
                <div className="row">
                    <div className={`col-md ${classes.copy}`}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <a className={classes.button} href={props.buttonUrl} alt="">{props.buttonLabel}</a>
                    </div>
                    <div className={`col-md ${classes.heroimg}`}>
                        <img src={props.image} alt={props.title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;