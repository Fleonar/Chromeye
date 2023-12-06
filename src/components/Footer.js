import classes from './Footer.module.scss';
import logo from '..'
import facebook from '../Icons/chromeye_assignment_facebookicon_v1.svg';
import twitter from '../Icons/chromeye_assignment_twittericon_v1.svg';
import linkedin from '../Icons/chromeye_assignment_linkedinicon_v1.svg'

const Footer = ({company_data, menu, button}) => {

    const sortedMenu = menu.sort((a, b) => a.order - b.order);
    const half1 = sortedMenu.slice(0, sortedMenu.length/2);
    const half2 = sortedMenu.slice(sortedMenu.length/2)

    return (
        <div className={`container ${classes.footer}`}>
            <div className={classes.content}>
                <div className={`row ${classes.title}`}>
                    <div className="col-md"><img src={company_data.logo} alt={company_data.name}/></div>
                    <div className="col-md"><a className={classes.button} href={button.buttonUrl}>{button.buttonLabel}</a></div>
                </div>
                <div className={`row ${classes.footerinfo}`}>
                    <div className="col-lg">
                        <div className="row">
                            <div className={`col-md ${classes.footermenu}`}>
                                {half1.map((item, index)=>(
                                    <a key={index} href={item.url}>{item.name}</a>
                                ))}
                                <div className={classes.intro}><p>{company_data.intro}</p></div>
                            </div>
                            <div className={`col-md ${classes.footermenu}`}>
                                {half2.map((item, index)=>(
                                    <a key={index} href={item.url}>{item.name}</a>
                                ))}
                            </div>
                        </div>
                        {/* <div className={`row ${classes.intro}`}><div className="col-6"><p>{company_data.intro}</p></div></div> */}
                    </div>
                    <div className={`col-lg ${classes.footermenu} ${classes.social}`}>
                        <div className="row">
                            <div className={`col-md ${classes.follow}`}>
                                <h4>Follow us:</h4>
                                {Object.entries(company_data.social_media).map(([key, val], index) => (
                                    key === 'facebook' ? <a key={index} href={val}><img src={facebook}/></a> :
                                    key === 'linkedin' ? <a key={index} href={val}><img src={linkedin}/></a> : 
                                    key === 'twitter' ? <a key={index} href={val}><img src={twitter}/></a> : null
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <h4>Contact</h4>
                                <p>{company_data.address} <br/>
                                Phone: {company_data.phone} <br/>
                                Web: {company_data.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;