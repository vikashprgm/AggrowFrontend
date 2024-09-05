import React from 'react'
import './BoxesInfo.css'
const BoxesInfo = () => {
    return (
        <div className='boxesinfo'>
            <h1>What is Agrow ?</h1>
            <div class="container-boxes">
                <div class="service-box1">
                    <div class="icon">📦</div>
                    <h3>Export & Pack House</h3>
                    <p>Driving higher profit margins with precise export documentation and optimized pack house operations.</p>
                </div>
                <div class="service-box">
                    <div class="icon">👥</div>
                    <h3>FPO/ Co-operative</h3>
                    <p>Helping FPOs in empowering farmers to develop new market opportunities and strengthen their position in the marketplace.</p>
                </div>
                <div class="service-box1">
                    <div class="icon">🌱</div>
                    <h3>Greenhouse / Hydroponics / Floriculture</h3>
                    <p>Planning and budgeting activities for effective management of plant nurseries, as well as hydroponics and floriculture operations.</p>
                </div>
                <div class="service-box">
                    <div class="icon">🧬</div>
                    <h3>Biotech / Tissue Culture</h3>
                    <p>Simplifying the process of growing and managing plants on a large scale in a laboratory.</p>
                </div>
                <div class="service-box1">
                    <div class="icon">🔬</div>
                    <h3>Research & Development</h3>
                    <p>Collaborating with agricultural scientists to carry out effective agricultural research and development programs.</p>
                </div>
                <div class="service-box">
                    <div class="icon">🏢</div>
                    <h3>Agribusiness Company</h3>
                    <p>Enabling the creation of businesses with a large number of farmers over scattered geographies.</p>
                </div>
            </div>

        </div>
    )
}

export default BoxesInfo;
