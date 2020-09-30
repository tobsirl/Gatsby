import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>{type.title}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => createPatchFrom(event.target.value)}
        ref={inputComponent}
      />
    </div>
  );
}


