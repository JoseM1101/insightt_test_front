let startLoading: () => void
let stopLoading: () => void

export const setLoadingHandlers = (start: () => void, stop: () => void) => {
  startLoading = start
  stopLoading = stop
}

export const showLoader = () => startLoading?.()
export const hideLoader = () => stopLoading?.()
