一、初始化
step1 创建远程库github

step2 创建本地库
1、初始化本地库 git init
2、添加到缓存区 git add .
3、提交到版本区 git commit -m "init app"

step3 关联远程库
git remote add origin https://github.com/oceanzhangyang/shangguigu_react_admin.git

step 4推送本地master 分支到远程master 分支 git push origin master

二、更新
1、本地库更新后同步到远程库
git add .
git commit -m "日志信息"
git push -u origin master

2、远程库的更新同步到本地库
git pull origin