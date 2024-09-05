import React from 'react';
import './Report.css'
import ReportItem from '../../components/ReportItem/ReportItem';
const ExpandableList = () => {


  // Data for list items
  const items = [
    { 
      id: 1, 
      title: 'Onion',  
      src: "https://m.economictimes.com/thumb/msid-112117490,width-1200,height-900,resizemode-4,imgsize-120226/onion.jpg", 
      category: "veggie", 
      aggrow_score: "96", 
      soil_suitability: "98", 
      climate_compatibility: "95", 
      profit_score: "96",
      msp: 1600 // MSP value per quintal in INR
    },
  
    { 
      id: 2, 
      title: 'Arhar', 
      src: "https://5.imimg.com/data5/OW/AT/MY-8481118/arhar-dal.jpg", 
      category: "pulses", 
      soil_suitability: "91", 
      climate_compatibility: "93", 
      profit_score: "92", 
      aggrow_score: "92",
      msp: 6600 // MSP value per quintal in INR
    },
  
    { 
      id: 3, 
      title: 'Tomato', 
      src: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg", 
      category: "veggie", 
      soil_suitability: "85", 
      climate_compatibility: "88", 
      profit_score: "88", 
      aggrow_score: "87",
      msp: 800 // MSP value per quintal in INR
    },
  
    { 
      id: 4, 
      title: 'Wheat', 
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeRk7s3QBr85nxtIm-24LjMx5jv4032wqVA&s", 
      category: "grains", 
      soil_suitability: "89", 
      climate_compatibility: "87", 
      profit_score: "85", 
      aggrow_score: "87",
      msp: 2200 // MSP value per quintal in INR
    },
  
    { 
      id: 5, 
      title: 'Maize', 
      src: "https://5.imimg.com/data5/BB/IW/MY-28079104/organic-yellow-maize.jpg", 
      category: "grains", 
      soil_suitability: "84", 
      climate_compatibility: "86", 
      profit_score: "82", 
      aggrow_score: "84",
      msp: 1962 // MSP value per quintal in INR
    },
  
    { 
      id: 6, 
      title: 'Rice', 
      src: "https://zursunbeans.com/wp-content/uploads/2017/01/long-grain-white-rice.jpg", 
      category: "grains", 
      soil_suitability: "80", 
      climate_compatibility: "82", 
      profit_score: "81", 
      aggrow_score: "81",
      msp: 2200 // MSP value per quintal in INR
    },
  
    { 
      id: 7, 
      title: 'Potato', 
      src: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg", 
      category: "veggie", 
      soil_suitability: "78", 
      climate_compatibility: "79", 
      profit_score: "80", 
      aggrow_score: "79",
      msp: 1000 // MSP value per quintal in INR
    },
  
    { 
      id: 8, 
      title: 'Barley', 
      src: "https://5.imimg.com/data5/SELLER/Default/2023/6/314143168/ZL/PR/KB/2649509/natural-barley-seeds.jpg", 
      category: "grains", 
      soil_suitability: "72", 
      climate_compatibility: "70", 
      profit_score: "68", 
      aggrow_score: "70",
      msp: 1600 // MSP value per quintal in INR
    },
  
    { 
      id: 9, 
      title: 'Chickpea', 
      src: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/04/chickpeas_closeup_732x549_thumb.jpg", 
      category: "pulses", 
      soil_suitability: "68", 
      climate_compatibility: "66", 
      profit_score: "65", 
      aggrow_score: "66",
      msp: 5230 // MSP value per quintal in INR
    },
  
    { 
      id: 10, 
      title: 'Millet', 
      src: "https://ooofarms.com/cdn/shop/products/Foxtail_wholemillet.jpg?v=1710144585&width=3840", 
      category: "grains", 
      soil_suitability: "62", 
      climate_compatibility: "64", 
      profit_score: "60", 
      aggrow_score: "62",
      msp: 2300 // MSP value per quintal in INR
    },
  
    { 
      id: 11, 
      title: 'Sorghum', 
      src: "https://api-com.lidea-seeds.com/uploads/2022/03/armelia.jpg", 
      category: "grains", 
      soil_suitability: "55", 
      climate_compatibility: "54", 
      profit_score: "52", 
      aggrow_score: "54",
      msp: 2738 // MSP value per quintal in INR
    },
  
    { 
      id: 12, 
      title: 'Cotton', 
      src: "https://images.ctfassets.net/3s5io6mnxfqz/4TV7YTCO1DJuMhhn7RD1Ol/b5a6c12340e6529a86bc1b557ed2d8f8/AdobeStock_136921602.jpeg", 
      category: "cash crops", 
      soil_suitability: "48", 
      climate_compatibility: "50", 
      profit_score: "52", 
      aggrow_score: "50",
      msp: 6025 // MSP value per quintal in INR
    }
  ];
  
  
  


  return (
    <div>
        <div className="report-header">
            <p>Your Report is Ready</p>
            <div className="filter">
                <img src="https://www.svgrepo.com/show/2241/filter.svg" alt="" />
                <p>Filter by category ▼</p>
            </div>
        </div>
      <ul className="list-container">
        {items.map((item) => (
          <ReportItem item={item}/>
        ))}
      </ul>
    </div>
  );
};

export default ExpandableList;
