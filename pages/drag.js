import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


const GridExample = () => {
  // Define a grid layout with four items
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 2 },
    { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    { i: 'd', x: 3, y: 0, w: 1, h: 2 },
  ];

  // Define the content for each item
  const items = [
    { i: 'a', content: 'Item A' },
    { i: 'b', content: 'Item B' },
    { i: 'c', content: 'Item C' },
    { i: 'd', content: 'Item D' },
  ];

  // Define the grid dimensions and properties
  const gridProps = {
    className: 'layout',
    cols: 5,
    rowHeight: 100,
  };

  return (
    <div className="divv">
      <GridLayout {...gridProps} layout={layout}>
        {items.map((item) => (
          <div key={item.i} className="grid-item">
            {item.content}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default GridExample;
