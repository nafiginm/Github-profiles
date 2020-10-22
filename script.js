const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUsers(user) {
  const res = await fetch(APIURL + user)
  const resData = await res.json()

  createUserCard(resData)
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div class="img-container">
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li>
            ${user.followers}
            <strong>Followers</strong>
          </li>
          <li>
            ${user.following}
            <strong>Following</strong>
          </li>
          <li>
            ${user.public_repos}
            <strong>Repos</strong>
          </li>
        </ul>
      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value

  if(user) {
    getUsers(user)
    search.value = ''
  }
})