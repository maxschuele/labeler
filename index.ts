// type label = {
//   x: number;
//   y: number;
//   height: number;
//   width: number;
// };

type Label = {
    x: number
    y: number
    height: number
    width: number
}

interface Anchor {
    x: number
    y: number
    r: number
}

const f = <T1 extends Label, T2 extends Anchor>(
    labels: T1[],
    anchors: T2[]
) => {
    labels.forEach((label) => {
        label.x++
        label.y++
        label.height++
        label.width++
    })

    anchors.forEach((anchor) => {
        anchor.r++
        anchor.x++
        anchor.y++
    })
}
