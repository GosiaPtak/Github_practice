let http = new XMLHttpRequest();
let git_user = 'octokit';
let url = 'https://api.github.com/users/' + git_user + '/repos';
let method = 'GET';
let githubData = new Object();

function connectToGithub(url, method) {

    return new Promise(function(resolve, reject) {

        http.open(method, url);
        http.onreadystatechange = () => {
            if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {

                githubData = JSON.parse(http.responseText);
                resolve(updateGitRepo(githubData));

            } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
                reject(console.log("error"));
            }
        };
        http.send();
    });
}

function updateGitRepo(githubData) {
    for (let repoData in githubData) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        div.id = repoData;
        p.textContent = `ID: ${githubData[repoData].id}\n
        Node ID: ${githubData[repoData].node_id}\n
        Name: ${githubData[repoData].name}\n
        Link: ${githubData[repoData].html_url}`;
        repoList.appendChild(div);
        div.appendChild(p);
    }
};

connectToGithub(url, method)
    .then(connectToGithub)
    .catch(function(error) {
        console.log(error);
        let div = document.createElement('div');
        div.textContent = `Brak danych`;
        repoList.appendChild(div);
    });