import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Hero from './Hero';
import Services from "./Services";
import Ourwork from "./Ourwork";
import Agency from "./Agency";
import Getstarted from "./Getstarted";
import Footer from "./Footer";

const Page = () => {
    /************** Fetching and product data **************/
    const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState({});
    /******************* Fetch function ********************/
	const fetchProducts = useCallback( async() => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json`);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			setDataList(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

    useEffect(()=>{
		fetchProducts();
	}, [fetchProducts]);
    /*******************************************************/
    if (isLoading) {
		return <div className="content">Loading...</div>;
	}

    if (error) {
		return <div className="content">{error}</div>;
	}

    return(
        <> 
            {
				Object.keys(dataList).length > 0 && <> 
					<Header logo={dataList.company_data.logo} menu={dataList.main_menu}></Header>
					<Hero props={dataList.hero}></Hero>
					<Services props={dataList.services}></Services>
					<Ourwork props={dataList.portfolio}></Ourwork>
					<Agency props={dataList.agency_services}></Agency>
					<Getstarted></Getstarted>
					<Footer company_data={dataList.company_data} menu={dataList.footer_menu} button={dataList.hero}></Footer>
				</>
			}
        </>
    )
}

export default Page;