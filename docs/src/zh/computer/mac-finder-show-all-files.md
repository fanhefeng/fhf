# 在 Mac 上控制文件的显示与隐藏

## 显示所有文件

```bash
defaults write com.apple.finder AppleShowAllFiles --boolean true; killall Finder
```

## 不显示系统隐藏文件

```bash
defaults write com.apple.finder AppleShowAllFiles --boolean false; killall Finder
```
