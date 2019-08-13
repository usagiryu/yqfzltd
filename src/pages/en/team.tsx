import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
export default () => (
  <>
    <Helmet title="团队" />

    <Intro>
      关于团队 
    </Intro>
    <BlockText
      heading="公司产品"
      description={(
        <>
          <li>Dooonut 甜甜圈 是一款由我们推出的 LBS 社交 app。好友才能用👭想念你的哥们⚽️、闺蜜💅？在甜甜圈里找到他们。我们提供冻结❄️与模糊😵位置减少不必要的尴尬。也保证了你的位置安全，不会被陌生人得到。新交了朋友？摇一摇加好友吧！🙋<a href="https://www.dooonut.com" target="_blank" rel="noopener noreferrer">dooonut.com</a></li><br />
          <li>Auriga 阿瑞嘉 是我们公司制作的动漫真人偶像团体组合，是基于新生代互联网思维和用户参与感精神、从线上到线下与可面对面偶像的新型公司特有运营理念的近距离养成式动漫真人偶像团体，结合动漫与真人配音偶像，充分运用互联网和社交网络时代的丰富无限想象力，绝佳的创新型和大胆的前瞻性理念，相碰撞结合制造出一个动漫产业与真人偶像产业的全方面企划。<a href="https://www.aruiga.live" target="_blank" rel="noopener noreferrer">auriga.live</a></li>
          </>
        
      )}
    />
  </>
);
