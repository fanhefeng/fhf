# ComputerName, HostName, LocalHostName

## ComputerName: 计算机名称。

用户可识别名称，相当于设备的「身份标识」，方便你辨认 Mac 设备。在进行 Airdrop 共享文件, 或者其他一些共享操作的时候, 其他人会以这个名字看到你的电脑。

用户自定义，例如「张三的 MacBook Pro」

在 `macOS Sequoia Version 15.1.1`中，可以通过`System Settings▸ General ▸ About ▸ Name` 来设置。

```bash
scutil --get ComputerName
scutil --set ComputerName "张三的 MacBook Pro"
```

## HostName: 主机名称。

A name is a label that is used to distinguish one thing from another. A person’s name, for instance, comprises a set of alphabetic characters that allows a person to be individually addressed. Computers are also named to differentiate one machine from another and to allow for such activities as network communication. Computers have always needed unique addresses to talk to each other. With the advent of the Internet, the requirements for enabling computers to communicate with each other on a network included the concept of the hostname. The hostname began as a simple string of alphanumeric characters (and possibly a hyphen) and has evolved to its current definition, where hostname means a Fully Qualified Domain Name (FQDN) that absolutely and uniquely identifies every computer hooked up to the Internet.

HostName: 主机名, 用于在系统上标识一台机器. 他和 IP 地址的区别是, hostname 用于在系统上标识一台机器; IP 地址是在 TCP/IP 网络中唯一标志一台机器. 联系到实际生活, 主机名相当于一个房子的主人名, 而 IP 地址相当于小区内这间房子的门牌号. [hostname 也就是打开终端, 每行最前面出现在 “@” 后面的名字]

管理员名称: 就是电脑在初始化的时候你设置的管理员的名称, 也是电脑开机的时候头像下面显示的名称, 在系统偏好设置-用户与群组中进行修改. [打开终端, 管理员名称会出现在每个命令行 “@” 前面]

所以终端中每个命令行显示的名称为：`管理员名称@主机名`

对于 macOS 来说，它会按以下的顺序来确定 HostName，直到获取到为止：

1. 从以下文件中读取：`/etc/hostconfig`
2. 从以下系统配置项读取：`/Library/Preferences/SystemConfiguration/preferences.plist` 中的 `System ▸ System ▸ HostName`
3. 由本机 IP 地址的反向 DNS 查询获取
4. 从以下系统配置项读取：`/Library/Preferences/SystemConfiguration/preferences.plist` 中的 `System ▸ Network ▸ HostNames ▸ LocalHostName`
5. 如果以上方法都没获取到，就为默认的 `localhost`

```bash
hostname
sctuil --get HostName
scutil --set HostName "zhangsan-macbook-pro"
```

## LocalHostName: Bonjour name.

本地主机名, 本地网络上的电脑可以通过这个名字访问你的电脑

在 `macOS Sequoia Version 15.1.1`中，可以通过`System Settings▸ General ▸ Sharing ▸ Local hostname` 来设置。

```bash
scutil --get LocalHostName
scutil --set LocalHostName "zhangsan-macbook-pro"
```
