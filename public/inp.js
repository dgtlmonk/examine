(() => {
  let o = globalThis;
  return (
    void 0 === o.winp &&
      ((o.winp = 0),
      new PerformanceObserver(n => {
        for (let e of n.getEntries()) {
          if (!e.interactionId) continue;
          o.winp = Math.max(e.duration, o.winp);
          let r = o =>
            o <= 200
              ? 'color: green'
              : o <= 500
                ? 'color: yellow'
                : 'color: red';
          console.log(
            `%c[Interaction: ${e.name.padEnd(12)}] %cDuration: %c${e.duration}`,
            'color: grey; font-family: Consolas,monospace',
            '',
            r(e.duration),
          );
        }
      }).observe({ type: 'event', durationThreshold: 0, buffered: !0 })),
    o.winp
  );
})();
