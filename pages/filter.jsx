import React from "react";

const YearsOfLaunchComponent = () => {
  // Fetch year list from the api

  return (
    <>
      <section className="launch-section launch-year">
        <button className="btn">2006</button>
        <button className="btn">2007</button>
        <button className="btn">2008</button>
        <button className="btn">2009</button>
        <button className="btn">2010</button>
        <button className="btn">2011</button>
        <button className="btn">2012</button>
        <button className="btn">2013</button>
        <button className="btn">2014</button>
        <button className="btn">2015</button>
        <button className="btn">2016</button>
        <button className="btn">2017</button>
        <button className="btn">2018</button>
        <button className="btn">2019</button>
        <button className="btn">2020</button>
      </section>
    </>
  );
};

const LaunchSuccessComponent = () => {
  return (
    <>
      <section className="launch-section launch-success">
        <span className="btn">True</span>
        <span className="btn">False</span>
      </section>
    </>
  );
};

const LaunchLandingComponent = () => {
  // Display state of button
  return (
    <>
      <section className="launch-section launch-success">
        <span className="btn">True</span>
        <span className="btn">False</span>
      </section>
    </>
  );
};

const FilterComponent = () => {
  return (
    <div className="filter-card">
      <h2>Filters</h2>
      <div className="filter-container">
        <section>
          <h3>
            <span>Launch Year</span>
          </h3>
          <YearsOfLaunchComponent />
        </section>
        <section>
          <h3>
            <span>Successful Launch</span>
          </h3>
          <LaunchSuccessComponent />
        </section>
        <section>
          <h3>
            <span>Successful Landing</span>
          </h3>
          <LaunchLandingComponent />
        </section>
      </div>
    </div>
  );
};

export default FilterComponent;
