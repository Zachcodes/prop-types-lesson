import React from 'react';
import PropTypes from 'prop-types';

export default function DisplayComponent(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.numbers.reduce((a, v) => (a += v), 0)}</p>
    </div>
  );
}

// If name on props is not a string there will be a javascript warning logged to the console
DisplayComponent.propTypes = {
  name: PropTypes.string,
  numbers: function(props) {
    if (
      !Array.isArray(props.numbers) ||
      !props.numbers.every(val => Number.isInteger(val))
    ) {
      return new Error(`numbers needs to be an array of numbers`);
    }

    return null;
  }
  // prop types as js data types
  // someBool: PropTypes.bool,
  // someArr: PropTypes.array,
  // // prop types as nodes
  // someNode: PropTypes.node,
  // // React element
  // someElement: PropTypes.element,
  // // Instance of class
  // someInstance: PropTypes.instanceOf(Person),
  // // Multiple possible types
  // someProp: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.bool
  // ]),
};
