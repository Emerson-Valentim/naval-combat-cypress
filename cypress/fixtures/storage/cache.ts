import Redis from "ioredis";

export default () => {
  const redis = new Redis("localhost:2000");

  return {
    set: redis.set,
    get: redis.get
  };
};