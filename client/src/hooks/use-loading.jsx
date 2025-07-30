import { useState, useEffect } from 'react';

export const useLoading = ({ initialLoading = true, delay = 1000 } = {}) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsReady(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [initialLoading, delay]);

  const startLoading = () => {
    setIsLoading(true);
    setIsReady(false);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setIsReady(true);
  };

  return {
    isLoading,
    isReady,
    startLoading,
    stopLoading
  };
};

// Simulate data loading for components
export const useDataLoading = (dataLength = 6) => {
  const [data, setData] = useState([]);
  const { isLoading, isReady, stopLoading } = useLoading({ delay: 1500 });

  useEffect(() => {
    if (isReady) {
      // Simulate data being loaded
      const mockData = Array.from({ length: dataLength }, (_, i) => ({ id: i + 1 }));
      setData(mockData);
    }
  }, [isReady, dataLength]);

  return {
    data,
    isLoading,
    isReady
  };
};