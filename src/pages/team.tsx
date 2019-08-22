import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/enintro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
export default () => (
  <>
    <Helmet title="团队" />

    <Intro>
      关于团队 
    </Intro>
    <BlockText
      heading="团队成员"
      description={(
        <>
          <li>刘佳其 · 其实我是传说中的全干攻城狮，会干的我全干，不会干的我也干了</li>
          <li>吴凡飞 · 追梦的理想主义者。大学生，永远喜欢纸片人.jpg</li>
          <li>宋树斌 · 一般通过普通学生，境界线就在不远处的中二诊所角落</li>
          <li>谢梦达 · 告诉你们一个秘密，其实我是全干攻城狮他爹</li>
          </>
        
      )}
    />
  </>
);
