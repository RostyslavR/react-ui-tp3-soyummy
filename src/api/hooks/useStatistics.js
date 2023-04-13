import { useQuery } from '@tanstack/react-query';
import { getStatistics } from '../queries';

export const useStatistics = options => {
  return useQuery({
    ...options,
    queryKey: ['statistics'],
    queryFn: getStatistics,
  });
};
