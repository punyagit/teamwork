# Team Collaboration
### Purpose of this project is to learn to collaborate between team.

**How to Start**
  * Fork the project to yourr github
  * Clone project from your forked repo
  * If you do "git remote -v" you can see its pointing to your repo only.
  * So to make a link to original one git remote add upstream and link so " git remote add upstream https://github.com/Thebeleiver1/teamwork.git"
  * If you do git remote -v now you can see link to original one.
  * To merge to local be in your local master branch and "git merge upstream/master"

  * Push to your local one and ask for pull request to merge the code to original project.



## Some things to Remember
* you can use git pull instead of doing git fetch and git merge. so pull = merge + fetch

* If you have uncommited local file always commit (no need to push) and merge with upstream.




## Handy but not recommmended


 git rebase upstream/master



 ### Contributing
 * run npm install to install dependencies to your local machine
 * npm test to see what test are failinng and just implement if required.
