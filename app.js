
const decompress = require('decompress');
const { exec } = require("child_process");
const simpleGit = require("simple-git");
const git = simpleGit.default();

async function Git(){
    // try{
    //     await git.checkout("app.js");
    // const branch = await git.branch();
    // console.log('branch ====>',branch.current)
    // }catch(error){
    //     console.log(error)
    // }

    try {
        const status = await git.status();

        console.log('status ====>',status);
        const add = await git.add(".");
        console.log('add ====>',status);
        const commit = await git.commit("DEV: test commit ");
        status = await git.status();
        onsole.log('status ====>',status);
        const push = await git.push("origin", "master");
        console.log("push ======>", push)
        if (!status.isClean()) {
            return;
         }
      } catch (error) {
        const status = await git.status();
     
    if (status.conflicted.length > 0) {
        return;
    }
    
        console.log("err =======>",error);
    }
}

Git();


// (async ()=> {
//     try{
//         const files = await decompress("1618243451152.zip", "dist");
//         console.log("done!");
//     }catch(error){
//         console.log(error);
//     }
// })();

// exec('git status', (error, stdout, stderr)=> {
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }

//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// })

























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