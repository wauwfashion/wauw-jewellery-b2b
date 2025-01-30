import { wait } from '@/utils/wait';

interface QueryCost {
  requestedQueryCost: number;
  currentlyAvailable: number;
  maximumAvailable: number;
  restoreRate: number;
}

export const handleGraphqlThrottle = async (cost: QueryCost) => {
  const canMakeNextRequest = cost.currentlyAvailable > cost.requestedQueryCost;

  if (canMakeNextRequest) {
    return;
  }

  const queryPointNeeded = cost.maximumAvailable - cost.currentlyAvailable;

  const delayTime = Math.ceil(queryPointNeeded / cost.restoreRate) * 1000;

  await wait(delayTime);
};
