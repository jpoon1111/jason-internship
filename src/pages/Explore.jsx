import React, { useEffect, useState } from "react";
import axios from "axios";



import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";

const Explore = () => {
  const [nfts, setNtfs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    setIsLoading(true);
    
    const fetchAllAuthors = "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"

    try{
      const {data} = await axios.get(fetchAllAuthors);
      setNtfs(data);
      console.log(data);
    }
    catch(error){
      console.log('Error fetching', error);
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <ExploreItems nfts={nfts} loading={isLoading}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
