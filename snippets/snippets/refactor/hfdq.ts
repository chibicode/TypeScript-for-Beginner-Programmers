function paddingLeftCss(val: number | string) {
  if (typeof val === 'number') {
    return `padding-left: ${val * 0.25}rem;`
  } else {
    return `padding-left: ${val};`
  }
}

// padding-left: 0.25rem;
paddingLeftCss(1)

// padding-left: 0.5rem;
paddingLeftCss(2)

// padding-left: 10%;
paddingLeftCss('10%')
