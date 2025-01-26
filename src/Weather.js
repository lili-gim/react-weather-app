import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-7">
              <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"></img>
              <span className="temperature">9</span> <span>°C | °F</span>
            </div>
            <div className="col-5">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 71%</li>
                <li>Wind: 18 km/h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-6 text-end">
          <h2>Weahter</h2>
          <ul>
            <li>Sunday 14:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
