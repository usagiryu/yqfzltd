import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
const HelloEmoji = require('assets/emoji/happy.gif');

export default () => (
  <>
    <Helmet title="首页" />

    <Intro>
      嗨！我们是<Highlight>一群肥宅（深圳）网络科技有限公司</Highlight><img alt='Smile faces' style={{ width: 60 }} src={String(HelloEmoji)} />我们来自<Highlight>广东深圳 🇨🇳</Highlight>，&nbsp;<br/>
      连接<Highlight>开发者、商业机构、服务商</Highlight>，探索个性化行业解决方案。通过地理位置赋能，我们和用户一起，探索更大的世界与可能🌍。<br/>
    </Intro>

    <BlockText
      heading="公司产品"
      description={(
        <>
          Dooonut 甜甜圈 是一款由我们推出的 LBS 社交 app。好友才能用👭想念你的哥们⚽️、闺蜜💅？在甜甜圈里找到他们。我们提供冻结❄️与模糊😵位置减少不必要的尴尬。也保证了你的位置安全，不会被陌生人得到。新交了朋友？摇一摇加好友吧！🙋<a href="https://www.dooonut.com" target="_blank" rel="noopener noreferrer">www.dooonut.com</a>
        </>
      )}
    />
  </>
);
