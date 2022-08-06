import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="container-solar-system">
        <Title headline="Planetas" />
        {
          planets.map(({ name, image, tamanho }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
              planetWidth={ tamanho }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
