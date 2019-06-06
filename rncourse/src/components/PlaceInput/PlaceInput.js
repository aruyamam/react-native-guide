import React from 'react';
import PropTypes from 'prop-types';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = ({ onChangeText, placeName }) => (
   <DefaultInput placeholder="Place Name" value={placeName} onChangeText={onChangeText} />
);

placeInput.propTypes = {
   onChangeText: PropTypes.func.isRequired,
   placeName: PropTypes.string.isRequired,
};

export default placeInput;
