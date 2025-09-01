import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
export const ratelimitVote = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, '10 s'), // 10초 3회
  analytics: true,
  prefix: 'rl_vote'
});