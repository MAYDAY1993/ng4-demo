# Todo-List


用 Angular4 实现一个小 demo:

* 用 [Angular CLI](https://github.com/angular/angular-cli) v1.1.1 来搭环境；
* 起服务 默认 4200 端口：

```
ng serve

```

* 主要涉及：列表渲染，数据绑定，事件触发；

### 实现功能：

* 对 todo 增、删、改
* 罗列当前 todos
* 使用内存存储数据
* todo 内容不能为空
* add 操作支持键盘 enter，按钮 click 2 种操作方式
* 对 todo 的 complete 操作，edit 操作，删除操作
* 对 completed 的 todo，无法触发 edit 操作
* edit 操作支持双击，按钮 2 种操作方式
* 编辑 todo 时，支持 commit,cancel 操作
* commit 操作支持键盘 enter，按钮 click 2 种操作方式
* cancel 操作支持键盘 esc，按钮 click 2 种操作方式
* 编辑时当前 todo 失焦，触发 cancel 操作
