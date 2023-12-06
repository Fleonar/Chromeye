import classes from './Getstarted.module.scss';

const Getstarted = (props) => {
    return (
        <div className={classes.getstarted}>
            <div className={classes.content}>
                <div className={`card ${classes.sectionheading}`}>
                    <h1>Ready to Get started</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed scelerisque arcu scelerisque ultricies habitant ac semper lorem.</p>
                    <a className={classes.button} href="#contact" alt="">Request a call</a>
                </div>
            </div>
        </div>
    );
};

export default Getstarted;
