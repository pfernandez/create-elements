import { a, component, div, h2, main, nav, section }
  from '@pfern/elements'
import { counter } from './counter.js'
import { todos } from './todos.js'

const link = (path, label, active) =>
  a({ href: path, class: active ? 'active' : '' }, label)

const navbar = path =>
  nav(
    link('/', 'Home', path === '/'),
    link('/todos', 'Todos', path === '/todos'),
    link('/counters', 'Counters', path === '/counters'))

const home = () =>
  section(
    h2('Home'),
    div(`This template shows a tiny router (history + popstate), a todos app,
         and independent counters.`))

const counters = () =>
  section(
    { class: 'grid' },
    div(h2('Counter 1'), counter()),
    div(h2('Counter 2'), counter()))

export const app = component((path = window.location.pathname) =>
  main(
    navbar(path),
    path === '/todos' ? todos()
    : path === '/counters' ? counters()
    : home()))

