const RedesSociais = {
  github: 'caiqueC',
  instagram:'caiiquecj',
  twitter:'caa_ique',
  facebook: 'profile.php?id=100069657764152'
}
function SubstituirRedesSociais() {
  console.log("alou")
  for (let li of idRedesSociais.children) {
    console.log(li.children[0].href)
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${RedesSociais[social]}`
  }
}  
SubstituirRedesSociais()  

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${RedesSociais.github}`
  fetch (url)
    .then(Response => Response.json())
    .then(data => { 
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      FotoDePerfil.src = data.avatar_url
      UserLink.href = data.html_url
      UserLogin.textContent = data.login
    })
}
GetGitHubProfileInfos()