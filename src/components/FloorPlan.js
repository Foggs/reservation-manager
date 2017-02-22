import React, { Component } from 'react';

class FloorPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "tables": [11,12,13,14,15,16,17,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37]
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
    	<div>
	    	<div>
  	      <ul className="flex-container">
  				  <li className="flex-item">11</li>
  				  <li className="flex-item">12</li>
  				  <li className="flex-item">13</li>
  				  <li className="flex-item">14</li>
  				  <li className="flex-item">15</li>
  				  <li className="flex-item">16</li>
  				</ul>
  				<ul className="flex-container">
  				  <li className="flex-item">21</li>
  				  <li className="flex-item">22</li>
  				  <li className="flex-item">23</li>
  				  <li className="flex-item">24</li>
  				  <li className="flex-item">25</li>
  				  <li className="flex-item">26</li>
  				</ul>
  				<ul className="flex-container">
  				  <li className="flex-item">31</li>
  				  <li className="flex-item">32</li>
  				  <li className="flex-item">33</li>
  				  <li className="flex-item">34</li>
  				  <li className="flex-item">35</li>
  				  <li className="flex-item">36</li>
  				</ul>
	    	</div>
	    	<div>
  	      <ul className="flex-container">
  				  <li className="flex-item">41</li>
  				  <li className="flex-item">42</li>
  				  <li className="flex-item">43</li>
  				  <li className="flex-item">44</li>
  				  <li className="flex-item">45</li>
  				</ul>
  				<ul className="flex-container">
  				  <li className="flex-item">51</li>
  				  <li className="flex-item">52</li>
  				  <li className="flex-item">53</li>
  				  <li className="flex-item">54</li>
  				  <li className="flex-item">55</li>
  				</ul>
	    	</div>
		</div>

    );
  }
}

export default FloorPlan;
