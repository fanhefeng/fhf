# 技术点

## 深度克隆 `2024 年 10 月`

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
```

## node中的`path.join`与`path.resolve`

使用平台特定的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化结果路径。也就是在不同系统下用对应的分隔符（如在 linux 系统里分隔符是 `/`, 在 windows 系统里是 `\`）。将所有给定的片段连接在一起，然后规范化生成的路径。注意，生成的结果只是一段相对路径片段，并不一定是绝对路径。

### `path.join`

`path.join`就是简单把路径拼在一起，`./xx`与`/xx`是等价的，都代表后面拼多一个`/xx`。
`.`代表当前，拼接时忽略，如`path.join('.', '/folder')`其实还是 folder。
但遇到`..`就需要跟`cd..`一样回到上一级了。

```javascript
console.log('1:', path.join('folder1', 'folder2', 'folder3')); // 1: folder1/folder2/folder3
console.log('2:', path.join('folder1', './folder2', '/folder3')); // 2: folder1/folder2/folder3
console.log('3:', path.join('folder1', '/folder2', '../../folder3')); // 3: folder3

/*
  path.join('folder1', '/folder2', '../../folder3');
  第一步：拼接 folder1, 此时路径为 folder1
  第二步：再拼folder2， 此时路径为 folder1/folder2
  第三步：cd .. 回到上一级，此时路径为 folder1, 再cd ..回到上一级, 此时路径为 ., 再拼接folder3, 即 最后结果为folder3
*/
```

### `path.resolve`

`path.resolve`将路径或路径片段的序列解析为绝对路径。
> `path.resolve`的原理是：从左到右，每遇到一个路径片段，就把它和之前的路径片段拼接起来，然后得到一个绝对路径。如果路径片段是`/`，则直接替换为根目录。
所以只需要记住，`path.resolve`的时候，会从左到右，每遇到一个参数，就跟你进行cd目录操作一样。

```javascript
// 假设此时路径为 /Users/user/project
console.log(__dirname); // /Users/user/project
path.resolve("folder1", "folder2", "folder3"); // /Users/user/project/folder1/folder2/folder3
path.resolve("folder1", "./folder2", "folder3"); // /Users/user/project/folder1/folder2/folder3
path.resolve("folder1", "./folder2", "/folder3"); // /folder3
/*
  path.resolve("folder1", "./folder2", "/folder3");
  第一步：cd folder1 # 进去当前目录的 folder1 文件夹，此时结果为`/Users/user/project/folder1`
  第二步：cd ./folder2 # 进去当前目录的 folder2 文件夹 此时结果为`/Users/user/project/folder1/folder2`
  第三步：cd /folder3 # 这里要注意了，cd / 实际是回到根目录了，此时结果为`/folder3`
*/
```