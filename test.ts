import { PointInter } from './test2'
export default class Point implements PointInter {
  x: number
  y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }
}