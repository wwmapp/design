---
order: 5
title: 不同尺寸
---

标签分为：小、中、大、巨大，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为「中」。

```js
import React from 'react';
import { Tag, Space } from '@oc/design';

const App = () => {
  return (
    <Space size="large">
      <Tag size="small">small</Tag>
      <Tag size="medium">medium</Tag>
      <Tag size="large">large</Tag>
    </Space>
  );
};

export default App;
```
