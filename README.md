Exp 1 - Perform Git operations: commit, push, branch, merge, and create a pull request
Codes: 
Create project file : 
mkdir myproject
cd myproject

initialize git : 
git init

create a file :
echo "# My DevOps Project" > README.md

add and commit : 
git add README.md
git commit -m "Initial commit"

create a branch : 
git checkout -b feature

add new file in branch : 
echo "Hello from feature branch" > hello.txt
git add hello.txt
git commit -m "Added hello.txt"

go to git and create a repository, connect local repo to github: 
git remote add origin https://github.com/<username>/myproject.git

push branch to github : git push -u origin feature

Go to GitHub website:
Open your repo
Click Compare & pull request
Add title + description
Click Create Pull Request

On GitHub:
Click Merge Pull Request
Confirm merge

back to terminal : git checkout main
git pull origin main


