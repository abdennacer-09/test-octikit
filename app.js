

const { exec } = require("child_process");

exec('git add .', (error, stdout, stderr)=> {
    if(error){
        console.log(`error: ${error.message}`);
        return;
    }

    if(stderr){
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})

























// const {Octokit} = require('@octokit/rest');
// const simpleGit = require('simple-git');
// const shellJs = require('shelljs');
// const simpleGitPromise = require('simple-git/promise');

// const octokit = new Octokit({
//     // type: 'basic',
//     // username: "abdennacer-09",
//     // password: "bloodbrothers2"
//     auth: process.env.GITHUB_TOKEN
// });

// var description = "repo creation using git api";
// var name = "test-reo-2";

// shellJs.cd('/');
// const repo = 'test-octikit'; 

// const userName = 'abdennacer-09';
// const password = 'bloodbrothers2';

// const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;

// simpleGit.addConfig('user.email','eabdennacer219@gmail.com');
// simpleGit.addConfig('user.name','abdennacer-09');

// simpleGitPromise.addRemote('origin',gitHubUrl);

// // Add all files for commit
// simpleGitPromise.add('.')
// .then(
//     (addSuccess) => {
//         console.log(addSuccess);
//     }, (failedAdd) => {
//         console.log('adding files failed');
// });

// // Commit files as Initial Commit
// simpleGitPromise.commit('Intial commit by simplegit')
// .then(
//     (successCommit) => {
//         console.log(successCommit);
//     }, (failed) => {
//         console.log('failed commmit');
//     });

// // Finally push to online repository
// simpleGitPromise.push('origin','master')
//     .then((success) => {
//     console.log('repo successfully pushed');
//     },(failed)=> {
//     console.log('repo push failed');
//     });

// function sayHello(name){
//     console.log('Hello', name);
// }

// sayHello('abdennacer');