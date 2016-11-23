
# github 配置过程:

- [多个github帐号的SSH key切换](http://www.tuicool.com/articles/7nMBVf
)


## ssh-key 生成:

```

ssh-keygen -t rsa -C "youremail@xxx.com"

ssh-keygen -t rsa -C "1033639049@qq.com"

```

## 首次push代码前的配置:


```

git config --global user.email "you@example.com"

git config --global user.name "Your Name"


git config --global user.email "1033639049@qq.com"
git config --global user.name "llinmeng"




```