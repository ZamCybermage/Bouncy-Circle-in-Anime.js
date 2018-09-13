anime({
targets:'#circ-1',
translateX: [
  {value: 300, duration: 300},
  {value: 0, duration: 400}
],
scale: 2,
loop: true
// rotate: '1turn'
});

// ==============================================================

anime({
targets:'#circ-2',
// translateY: -100,
translateX: [
  {value: 100, duration: 200},
  {value: 0, duration: 800}
],
scale: 2,
loop: true
// rotate: '1turn'
});

// ===================================================================
anime({
targets:'#circ-3',
translateY: -400,
translateX: [
  {value: 400, duration: 1200},
  {value: 0, duration: 800}
],
scale: -2,
loop: true
// rotate: '1turn'
});

// =========================================================================
anime({
targets:'#circ-4',
translateY: -100,
translateX: [
  {value: 100, duration: 500},
  {value: 0, duration: 800}
],
scale: -2,
loop: true
// rotate: '1turn'
});

// ==============================================================================

anime({
targets:'#circ-5',
translateY: 400,
translateX: [
  {value: 200, duration: 1200},
  {value: 0, duration: 800}
],
scale: -2,
loop: true
// rotate: '1turn'
});
