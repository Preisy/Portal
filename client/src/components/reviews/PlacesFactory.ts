export class PlacesFactory {
    private readonly placeholder: HTMLDivElement
    private readonly phantoms: NodeListOf<HTMLDivElement>

    constructor(placeholder: HTMLDivElement, phantoms: NodeListOf<HTMLDivElement>) {
        this.placeholder = placeholder
        this.phantoms = phantoms
        this.getCardSize()
    }

    private getGap() {
        let gap = getComputedStyle(this.placeholder, '')['gap'];
        let num = parseInt(gap.replace(/px$/, ''));
        return Math.round(num * 10) / 10
    }

    private getCardSize() {
        const bcr = this.phantoms[0].getBoundingClientRect();
        return {w: bcr.width, h: bcr.height}
    }

    getPlaces(): [number, number][] {
        let placeholderBcr = this.placeholder.getBoundingClientRect()
        let bcrs = [...Array(4)].map((_, i) => {
            let x = this.phantoms[i].getBoundingClientRect().x - placeholderBcr.x
            let y = this.phantoms[i].getBoundingClientRect().y - placeholderBcr.y
            return {
                x: Math.round(x * 10) / 10,
                y: Math.round(y * 10) / 10
            }
        })

        let cardSize = this.getCardSize();
        return [
            [-1 * cardSize.h - this.getGap() * 2, bcrs[1].x],
            [bcrs[1].y, bcrs[1].x],
            [bcrs[0].y, bcrs[0].x],
            [bcrs[2].y, bcrs[2].x],
            [bcrs[3].y, bcrs[3].x],
            [bcrs[3].y, 2 * cardSize.w + this.getGap() * 2]
        ]
    }
}

// let places: [number, number][] = [
//     [-1, 1],
//     [0, 1],
//     [0, 0],
//     [1, 0],
//     [1, 1],
//     [1, 2]
// ]