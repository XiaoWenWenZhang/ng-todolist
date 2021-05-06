# TodolistDemo

## 说明

1.具备简单的增加任务，删除任务，修改任务，查询任务列表功能。

2.关于mock数据，写了一个MockInterceptor对请求进行拦截，从而返回相应mock文件中的数据。然而，增删改不便于用静态mock数据进行调试，因此写了一个具有相应四个功能的MockServer,运行命令如下：
- tsc index.ts
- node index.js
- 在http://localhost:8082/task/list可以看到数据的变化。
- 代码库地址： https://github.com/XiaoWenWenZhang/mockServer/tree/master
