import React from 'react';
import PropTypes from 'prop-types';
import { Handle } from 'react-flow-renderer';

function CustomHandlesNode({ id, data }) {
  const handles = data?.handles || [];

  return (
    <>
      {data?.label}
      {handles.map((handleProps, index) => (
        <Handle key={`${id}-handle-${index}`} {...handleProps} />
      ))}
    </>
  );
}

CustomHandlesNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default React.memo(CustomHandlesNode);
