let GRAPH = {};

export const follow = (a,b)=>{
  GRAPH[a] ??= new Set();
  GRAPH[a].add(b);
};

export const followers = (a)=>{
  return Object.entries(GRAPH)
    .filter(([_,v])=>v.has(a))
    .map(([k])=>k);
};
