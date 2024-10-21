export function distance(tdiv, bdiv) {
    const trect = tdiv.getBoundingClientRect();
    const brect = bdiv.getBoundingClientRect();
    const bleftx = brect.left;
    const blefty = brect.top;
    const tcenterx = trect.left + trect.width / 2;
    const tbottomy = trect.bottom;
    const distance = Math.hypot(bleftx - tcenterx, tbottomy - blefty);

    return distance;
}
