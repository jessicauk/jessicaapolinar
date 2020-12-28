import React from 'react';
import DevIcon, {iconList} from "devicon-react-svg";
import './Services.scss';
const devIconStyle = {
  fill: "#007CC7",
  width: "80px",
  height: "80px",
};
function Services() {
  // console.log("iconList", iconList)
  return (
    <section className="services" id="services">
      <div className="content">
        <div className="services-item">
          <DevIcon className="svg-icon" style={devIconStyle} icon="javascript"/>
        </div>
        <div className="services-item">
          <DevIcon className="svg-icon" style={devIconStyle} icon="html5"/>
        </div>
        <div className="services-item">
          <DevIcon className="svg-icon" style={devIconStyle} icon="css3"/>
        </div>
        <div className="services-item">
          <DevIcon className="svg-icon" style={devIconStyle} icon="react"/>
        </div>
        <div className="services-item">
          <DevIcon className="svg-icon" style={devIconStyle} icon="python"/>
        </div>
      </div>
    </section>
  )
}

export default Services