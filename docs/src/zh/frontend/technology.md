# 技术点

## 深度克隆

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
