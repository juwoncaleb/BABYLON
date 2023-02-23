import React, { useState, useRef, useEffect } from 'react';
import Sortable, { MultiDrag, Swap } from 'sortablejs';

export default function DragAndDrop() {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
  ]);

 

  return (
      <div >
     
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}
