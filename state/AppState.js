import React, {useState} from 'react';

const useAppState = () => {
  const [letters, setLetters] = useState(false);
  return {letters, setLetters};
};

export default useAppState;
