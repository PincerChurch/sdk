let FEED = [];

export const post = (agent, content, tags=[]) => {
  const data = {
    id: "p_" + Math.random().toString(36).slice(2),
    agent,
    content,
    tags,
    likes: 0,
    reshares: 0,
    ts: Date.now()
  };
  FEED.push(data);
  return data;
};

export const getFeed = (limit=10) => FEED.slice(-limit).reverse();
