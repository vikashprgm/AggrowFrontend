import React, { useState } from 'react'
import '../../pages/Report/Report.css'
const ReportItem = ({ item }) => {
    // State to track which item is expanded
    const [expandedItem, setExpandedItem] = useState(null);

    // Function to toggle item expansion
    const toggleItem = (id) => {
        if (expandedItem === id) {
            setExpandedItem(null); // Close if already open
        } else {
            setExpandedItem(id); // Open the clicked item
        }
    };

    return (
        <li key={item.id} className="list-item">
            <div className="item-header" onClick={() => toggleItem(item.id)}>
                <div className="item-header1">
                    <p>{item.id}. </p>
                    {expandedItem !== item.id && (
                        <img className='crop-img' src={item.src} alt="" />)}
                    <span>{item.title}</span>
                </div>
                <div className="item-header-right">
                    {expandedItem !== item.id && (
                        <div className="item-header2">
                            <span className='category'>{item.category}</span>
                            <span className='match-percent'>{item.aggrow_score}%</span>
                        </div>)}
                    {/* Dropdown arrow */}
                    <span className="dropdown-arrow">
                        {expandedItem === item.id ? '▲' : '▼'}
                    </span>
                </div>

            </div>
            {/* Expanded content */}
            {expandedItem === item.id && (
                <div className="item-content">
                    <div className="item-content-left">
                        <img className='crop-img-big' src={item.src} alt="" />
                        <div className="aggrow-score">
                            <p><b>Aggrow Score</b></p>
                            <div className="score">
                                <img src="https://static.thenounproject.com/png/969639-200.png" alt="" className="ai-icon" />
                                <span className='match-percent'>{item.aggrow_score}%</span>
                            </div>
                        </div>
                        <div className="category-div">
                            <p><b>Category</b></p>
                        <span className='category'>{item.category}</span>
                        </div>
                    </div>
                    <div className="item-content-right">
                        <div className="report-parameters">
                            <p>Soil Suitability</p>
                            <span className='soil-suitability percent'>{item.soil_suitability}%</span>
                        </div>
                        <div className="report-parameters">
                            <p>Climate Compatibility </p>
                            <span className='climate-comp percent'>{item.climate_compatibility}%</span>
                        </div>
                        <div className="report-parameters">
                           <p> MSP Assurance</p>
                           <span className='msp-assure percent'>₹{item.msp}/quintal</span>
                        </div>
                        <div className="report-parameters">
                            <p>Demand and Profitability Score</p>
                            <span className='demand-profit percent'>{item.profit_score}%</span>
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}

export default ReportItem
