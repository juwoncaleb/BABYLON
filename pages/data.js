import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


const GridExample = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 1, h: 2 },
    { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    
  ];

  const items = [
    { i: 'a', content: 'Item A' },
    { i: 'b', content: 'Item B' },
    { i: 'c', content: 'Item C' },
  ];

  return (
    <div>
      <GridLayout className="layout" layout={layout} cols={3} rowHeight={100} width={1200}>
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
