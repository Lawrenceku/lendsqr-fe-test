import React, { useState } from 'react';

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialState: boolean): UseToggleReturnType => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);

  return [state, toggle];
};

export default useToggle;
