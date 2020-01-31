import React, {useState} from 'react';

const useAppState = () => {
  const [mode, setMode] = useState(false);
  return {mode, setMode};
};

export default useAppState;
