export class Shape {
    _x
    _y
    _lineWidth
    _strokeStyle

    constructor(x, y, lineWidth = 1, strokeStyle = 'black') {
        this._x = x
        this._y = y
        this._lineWidth = lineWidth
    }

    setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    setStrokeStyle(strokeStyle) {
        this._strokeStyle = strokeStyle
    }
}