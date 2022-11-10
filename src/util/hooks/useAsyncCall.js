import { useState } from 'react';

const useAsyncCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const asyncCall = async (funcBody) => {
    setLoading(true);
    setError(null);

    try {
      await funcBody();
    } catch (err) {
      console.error(err);
      setError(err);
    }

    setLoading(false);
  };

  return [asyncCall, loading, error];
};

export default useAsyncCall;
