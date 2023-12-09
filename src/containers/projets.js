import React from 'react';
import Card from '../components/card';
import projetsData from '../data/projetsArray';

function Projets() {
  return (
    <div className='projectsContainer' id='projects'>

      <h2 className='projectsContainerTitle'>PORTFOLIO</h2>
      <div className="cardContainer">
        {projetsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projets;
