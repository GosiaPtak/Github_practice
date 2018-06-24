let http = new XMLHttpRequest();
let git_user = 'octokit';
let url = 'https://api.github.com/users/' + git_user + '/repos';
let method = 'GET';
let githubData = new Object();

http.open(method, url);
http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {

        githubData = JSON.parse(http.responseText);
        updateGitRepo(githubData);

    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log("error");
    }
};
http.send();

function updateGitRepo(githubData) {
    for (let repoData in githubData) {
        let div = document.createElement('div');
        div.id = repoData;
        div.textContent = `ID: ${githubData[repoData].id}\r
        Node ID: ${githubData[repoData].node_id}\n
        Name: ${githubData[repoData].name}\n
        Link: ${githubData[repoData].html_url}`;
        repoList.appendChild(div);
    }
};