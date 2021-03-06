import React, { useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({ imageKey, picIndex }) => {
  const pics = useContext(PictureContext);
  return <img src={getImageUrl(pics, imageKey, picIndex, true)}></img>;
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
  picIndex: PropTypes.number.isRequired,
};

export default Image;
