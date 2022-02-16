import { makeAutoObservable } from 'mobx'

class GlobalStore {
  data: {
    login: string
    password: string
    url: string
  }
  isLoading: boolean
  isLogin: boolean
  screenMode: boolean
  displayMenu: boolean
  displayInfo: boolean
  hideMenu: boolean
  delay: number
  minDelay: number
  maxDelay: number
  displaySettings: boolean
  displaySettingsCamera: boolean

  constructor() {
    this.data = {
      login: '',
      password: '',
      url: ''
    }
    this.isLoading = false
    this.isLogin = false
    this.screenMode = false
    this.displayMenu = true
    this.displayInfo = false
    this.hideMenu = true
    this.delay = 3000
    this.minDelay = 1000
    this.maxDelay = 30000
    this.displaySettings = false
    this.displaySettingsCamera = false

    makeAutoObservable(this)
  }

  setData(obj: { login: string; password: string; url: string }) {
    this.data = obj
  }

  setLoading(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.isLoading = bool
    } else {
      this.isLoading = !this.isLoading
    }
  }

  setLogin(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.isLogin = bool
    } else {
      this.isLogin = !this.isLogin
    }
  }

  changeScreenMode() {
    this.screenMode = !this.screenMode
  }

  // hide the menu, for example, on some event.
  setDisplayMenu(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.displayMenu = bool
    } else {
      this.displayMenu = !this.displayMenu
    }
  }

  setDisplayInfo(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.displayInfo = bool
    } else {
      this.displayInfo = !this.displayInfo
    }
  }

  // you may define to hide menu or not
  // If hideMenu=false: it will always be displayed
  setHiddenMenu(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.hideMenu = bool
    } else {
      this.hideMenu = !this.hideMenu
    }
  }

  // is used for "setDisplayMenu"
  setDelay(num: number) {
    const { minDelay, maxDelay } = this
    this.delay = num < minDelay ? minDelay : num > maxDelay ? maxDelay : num
  }

  setDisplaySettings(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.displaySettings = bool
    } else {
      this.displaySettings = !this.displaySettings
    }
  }

  setDisplaySettingsCamera(bool?: boolean) {
    if (typeof bool === 'boolean') {
      this.displaySettingsCamera = bool
    } else {
      this.displaySettingsCamera = !this.displaySettingsCamera
    }
  }
}

export const globalStore = new GlobalStore()
