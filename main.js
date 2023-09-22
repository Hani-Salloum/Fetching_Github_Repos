const input = document.querySelector(".username");
const button = document.querySelector(".button");
const showData = document.querySelector(".result");

function showRepos() {
    if(input.value === "") {
        showData.innerHTML = "Enter a Correct Username Please!";
    } else {
        const username = input.value;
        showData.innerHTML = "";
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(data => {
            if(data.status == 404) {
                showData.innerHTML = "There is no such username!";
                return []; 
            } else {
                return data.json();
            }
        }).then(repos => {
            repos.forEach(repo => {
                let div = document.createElement("div");
                div.innerHTML = `
                    <div>${repo.name}</div>
                    <a href="https://www.github.com/${username}/${repo.name}" target="_blank">Visit</a>
                    <span>${repo.stargazers_count} Stars</span>
                `;
                showData.appendChild(div)
            })
        })
        }
}
    
button.addEventListener("click", showRepos);