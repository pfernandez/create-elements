export const routes = [
  '/',
  '/todos',
  '/counters',
]

export const navigate = (path, { replace = false, force = false } = {}) => {
  if (typeof window === 'undefined') return

  const url = new URL(path, window.location.origin)
  const isSame =
    url.pathname === window.location.pathname
    && url.search === window.location.search
    && url.hash === window.location.hash

  if (!force && isSame) return

  const fn = replace ? 'replaceState' : 'pushState'
  window.history[fn]({}, '', url)

  try {
    window.dispatchEvent(new PopStateEvent('popstate'))
  } catch {
    window.dispatchEvent(new Event('popstate'))
  }
}

export const currentPath = () =>
  typeof window === 'undefined'
    ? '/'
    : window.location.pathname || '/'

export const normalizePath = (path = '/') =>
  routes.includes(path) ? path : '/'

export const go = (path, { force = false } = {}) => {
  const next = normalizePath(path)
  navigate(next, { force })
  return next
}
