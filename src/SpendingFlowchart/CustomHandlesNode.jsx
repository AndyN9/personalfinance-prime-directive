import React from 'react';

function CustomHandlesNode({ id, data, isConnectable }) {
  const handles = data?.handles || [];

  // TODO convert handles to array of objects instead of components
  return (
    <>
      {data?.label}
      {handles.map((handle, index) => (
        <React.Fragment key={`${id}-handle-${index}`}>{handle}</React.Fragment>
      ))}
    </>
  );
}

export default React.memo(CustomHandlesNode);
