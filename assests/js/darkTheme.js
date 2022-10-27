const changeThemeToLight = () => {
  document.body.classList.remove('dark')
  localStorage.setItem('dark-theme', 'false')
}

const changeThemeToDark = () => {
  document.body.classList.add('dark')
  localStorage.setItem('dark-theme', 'true')
}

if (localStorage.getItem('dark-theme') === 'true') {
  document.body.classList.add('dark')
} else {
  document.body.classList.remove('dark')
}

const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  let theme = localStorage.getItem('dark-theme')
  if (theme === 'true') {
    changeThemeToLight()
  } else {
    changeThemeToDark()
  }
})
