#### 1.1 发送邮箱验证码

| 接口 | uaa/signup/email |
| ---- | ---------------- |
| 描述 | 通过邮箱注册     |
| 验证 | NONE             |
| 方法 | GET              |

**Request**

| 参数名 | 类型   | 是否必须 | 参数位置   | 描述 |
| ------ | ------ | -------- | ---------- | ---- |
| email  | String | Y        | query(url) | 邮箱 |

**Response**

| 参数名  | 类型    | 是否必须 | 描述            |
| ------- | ------- | -------- | --------------- |
| succeed | Integer | Y        | 0：失败 1：成功 |
| code    | Integer | Y        | 返回码          |
| message | String  | Y        | 消息            |

#### 1.2 用户通过邮箱注册

| 接口 | uaa/signup/email |
| ---- | ---------------- |
| 描述 | 通过邮箱注册     |
| 验证 | NONE             |
| 方法 | GET              |

**Request**

| 参数名 | 类型   | 是否必须 | 参数位置   | 描述       |
| ------ | ------ | -------- | ---------- | ---------- |
| email  | String | Y        | query(url) | 邮箱       |
| code   | String | Y        | query(url) | 邮箱验证码 |

**Response**

| 参数名  | 类型    | 是否必须 | 描述            |
| ------- | ------- | -------- | --------------- |
| succeed | Integer | Y        | 0：失败 1：成功 |
| code    | Integer | Y        | 返回码          |
| message | String  | Y        | 消息            |