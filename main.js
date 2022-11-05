function createMatch(team1, hour, team2) {
  return `
    <li>
      <img
            src="./assets/country-flags/flag-${team1}.svg"
            alt="Bandeira do ${team1}"
        />
      <strong>${hour}</strong>
      <img
          src="./assets/country-flags/flag-${team2}.svg"
          alt="Bandeira da ${team2}"
        />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = `
    ${createCard("24/11", "quinta", createMatch("brazil", "16:00", "serbia"))}
    ${createCard(
      "28/11",
      "segunda",
      createMatch("brazil", "13:00", "switzerland")
    )}
    ${createCard("02/12", "sexta", createMatch("brazil", "16:00", "cameroon"))}
`
