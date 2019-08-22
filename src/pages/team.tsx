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
      heading="刘佳其"
      description={(
        <>
          <li>其实我是传说中的全干攻城狮，会干的我全干，不会干的我也干了</li>
          </>
        
      )}
    />
    <BlockText
      heading="吴凡飞"
      description={(
        <>
          <li>追梦的理想主义者。大学生，永远喜欢纸片人.jpg</li>
          </>
        
      )}
    />
    <BlockText
      heading="宋树斌"
      description={(
        <>
          <li>一般通过普通学生，境界线就在不远处的中二诊所角落</li>
          </>
        
      )}
    />
    <BlockText
      heading="谢梦达"
      description={(
        <>
          <li>告诉你们一个秘密，其实我是全干攻城狮他爹</li>
          </>
        
      )}
    />
  </>
);
