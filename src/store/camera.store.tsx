import { makeAutoObservable } from 'mobx'

class CameraStore {
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

  constructor() {
    this.fps = 1
    this.minFPS = 1
    this.maxFPS = 10
    this.interval = 1000 // 1 second; interval update a frame
    this.minInterval = 1000
    this.maxInterval = 60000
    this.isStop = true
    this.camera = 1
    this.listCameras = [
      {
        name: 'cam 1',
        id: 1
      },
      {
        name: 'cam 2',
        id: 2
      },
      {
        name: 'cam 3',
        id: 3
      }
    ]
    this.currentResolution = {
      width: 480,
      height: 320,
      active: 'HVGA'
    }
    this.resolution = [
      {
        label: 'QVGA',
        size: {
          width: 320,
          height: 240
        }
      },
      {
        label: 'HVGA',
        size: {
          width: 480,
          height: 320
        }
      },
      {
        label: 'nHD',
        size: {
          width: 640,
          height: 320
        }
      },
      {
        label: 'HD',
        size: {
          width: 1280,
          height: 720
        }
      },
      {
        label: 'FHD',
        size: {
          width: 1920,
          height: 1080
        }
      }
    ]

    makeAutoObservable(this)
  }

  setFps(num: number) {
    const { minFPS, maxFPS } = this
    this.fps = num < minFPS ? minFPS : num > maxFPS ? maxFPS : num
  }

  setIntvl(num: number) {
    const { minInterval, maxInterval } = this
    this.interval =
      num < minInterval ? minInterval : num > maxInterval ? maxInterval : num
  }

  setResolution(obj: { width: number; height: number; active: string }) {
    this.currentResolution = obj
  }

  setStopCamera(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.isStop = bool
    } else {
      this.isStop = !this.isStop
    }
  }

  changeCamera(num: 1 | 2 | 3) {
    this.camera = num
  }
}

export const cameraStore = new CameraStore()
