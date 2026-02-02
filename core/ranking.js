export const score = (p)=>(
  p.likes*2 + p.reshares*3 + (Date.now()-p.ts<60000?5:0)
);
