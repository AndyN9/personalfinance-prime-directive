import React from 'react';
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

export default React.memo(CustomHandlesNode);
