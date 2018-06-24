let http = new XMLHttpRequest();
let git_user = 'octokit';
let url = 'https://api.github.com/users/' + git_user + '/repos';
let method = 'GET';
let githubData = new Object();

<<<<<<< HEAD
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
=======
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
>>>>>>> db63f465b02207b9f33e8f29617a8c68c55c911d

function updateGitRepo(githubData) {
    for (let repoData in githubData) {
        let div = document.createElement('div');
<<<<<<< HEAD
        let p = document.createElement('p');
        div.id = repoData;
        p.textContent = `ID: ${githubData[repoData].id}\n
=======
        div.id = repoData;
        div.textContent = `ID: ${githubData[repoData].id}\r
>>>>>>> db63f465b02207b9f33e8f29617a8c68c55c911d
        Node ID: ${githubData[repoData].node_id}\n
        Name: ${githubData[repoData].name}\n
        Link: ${githubData[repoData].html_url}`;
        repoList.appendChild(div);
<<<<<<< HEAD
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
=======
    }
};
>>>>>>> db63f465b02207b9f33e8f29617a8c68c55c911d
