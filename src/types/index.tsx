export interface ICamera {
  fps: number
  minFPS: number
  maxFPS: number
  interval: number // milliseconds
  minInterval: number // milliseconds
  maxInterval: number // milliseconds
  isStop: boolean
  camera: 1 | 2 | 3
  listCameras: Array<{ name: string; id: number }>
  currentResolution: {
    width: number
    height: number
    active: string
  }
  resolution: Array<{
    label: string // name of resolution
    size: {
      width: number
      height: number
    }
  }>
}
