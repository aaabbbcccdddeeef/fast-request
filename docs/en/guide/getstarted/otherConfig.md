---
title: Other config
icon: others1
---

Controller url fixed variable can replace by config. For example controller like this

```java
@RequestMapping("/api/${api-module}/user")
@Controller
public class XxxController(){
  //code ...
}
```

The actual url is `/api/base/user`,Then `${api-module}` can be replaced by the following configuration

![](/img/otherConfig_en.png)
