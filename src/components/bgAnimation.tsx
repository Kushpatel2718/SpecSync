import React from 'react';

const bgAnimation = () => {
  return (
    <main className="main">
      <section className="section section_wave">
        <svg width="100%" height="100%" viewBox="0 0 1500 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
            {[...Array(10)].map((_, index) => (
              <path key={`dash_${index}`} className={`dash dash_${index}`} d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16" strokeWidth="32"></path>
            ))}
          </g>
        </svg>
      </section>
    </main>
  );
};

export default bgAnimation;