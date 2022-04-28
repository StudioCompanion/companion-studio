/**
 * If h is omitted, w is expected to be the percentage value
 * for the aspect ratio
 */
export const aspectRatio = (w: number, h?: number) => /* css */ `
overflow: hidden;
position: relative;

&:before {
  display: block;
  content: '';
  width: 100%;
  padding-top: ${h ? (h / w) * 100 : w}%;
}

& > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
