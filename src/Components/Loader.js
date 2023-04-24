import React from "react";

function Loader() {
  return (
    <div className="loader">
      {/* <div class="loader">
        <svg
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="load one" cx="60" cy="60" r="40" />
          <circle class="load two" cx="60" cy="60" r="40" />
          <circle class="load three" cx="60" cy="60" r="40" />
          <g>
            <circle class="point one" cx="45" cy="70" r="5" />
            <circle class="point two" cx="60" cy="70" r="5" />
            <circle class="point three" cx="75" cy="70" r="5" />
          </g>
        </svg>
      </div> */}
      <h1>Loading...</h1>
    </div>
  );
}

export default Loader;
