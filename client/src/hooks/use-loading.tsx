import { useState, useEffect } from 'react';

interface UseLoadingProps {
  initialLoading?: boolean;
  delay?: number; // Minimum loading time in ms
}

export const useLoading = ({ initialLoading = true, delay = 1000 }: UseLoadingProps = {}) => {
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
export const useDataLoading = (dataLength: number = 6) => {
  const [data, setData] = useState<any[]>([]);
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