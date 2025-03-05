const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '1200px',
  xl: '1600px',
};

type BreakpointKeys = keyof typeof breakpoints;

export const media = (Object.keys(breakpoints) as BreakpointKeys[]).reduce(
  (acc, key) => {
    acc[key] = `@media (min-width: ${breakpoints[key]})`;
    return acc;
  },
  {} as Record<BreakpointKeys, string>
);
