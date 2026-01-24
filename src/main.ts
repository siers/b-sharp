const sel = document.querySelectorAll.bind(document)

sel('.sidebar-component.toggle-activator').forEach(button => {
  button.addEventListener('click', () => {
    sel('.sidebar-component.toggle-hidden').forEach(e => e.classList.toggle('hidden'))
    sel('.sidebar-component.toggle-translate').forEach(e => e.classList.toggle('-translate-x-full'))
  })
})
