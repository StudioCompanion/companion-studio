export const aspectRatio = (w: number, h: number) => /* css */ `
overflow: hidden;
position: relative;

&:before {
  display: block;
  content: '';
  width: 100%;
  padding-top: ${(h / w) * 100}%;
}

& > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
