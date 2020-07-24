# NgccIssueRepro

```
npm install # will run ngcc in postinstall hook
./start-builds.sh
```

This will show:
```

```

Expected, shouldn't lock as ngcc was ran before hand.

Actual:
```
» ./start-builds.sh 

> ngcc-issue-repro@0.0.0 build5 /home/rush/code/angular-bug/ngcc-issue-repro
> BUILD_NAME=build1 webpack


> ngcc-issue-repro@0.0.0 build2 /home/rush/code/angular-bug/ngcc-issue-repro
> BUILD_NAME=build1 webpack


> ngcc-issue-repro@0.0.0 build3 /home/rush/code/angular-bug/ngcc-issue-repro
> BUILD_NAME=build1 webpack


> ngcc-issue-repro@0.0.0 build1 /home/rush/code/angular-bug/ngcc-issue-repro
> BUILD_NAME=build1 webpack


> ngcc-issue-repro@0.0.0 build4 /home/rush/code/angular-bug/ngcc-issue-repro
> BUILD_NAME=build1 webpack

Another process, with id 31479, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31479, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31479, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31479, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31472, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31472, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31472, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31458, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31458, is currently running ngcc.
Waiting up to 250s for it to finish.
Another process, with id 31451, is currently running ngcc.
Waiting up to 250s for it to finish
```
