import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetWidth } = this.props;
    return (
      <div data-testid="planet-card" className="container-item-planet">
        <p data-testid="planet-name">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          width={ `${planetWidth}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetWidth: PropTypes.string.isRequired,
};

export default PlanetCard;
