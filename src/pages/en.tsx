import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Hello" />

    <Intro>
      Hi! This is <Highlight>Group Of Otaku Shenzhen Network Technology Co., Ltd. 🤩</Highlight>，<br/>We're from <Highlight>Guangdong Shenzhen 🇨🇳</Highlight>，&nbsp;<br/>
      We connect <Highlight>Developers, commercial organizations, service providers</Highlight>，Explore personalized industry solutions. Through geographic empowerment, we work with users to explore a bigger world and possible🌍.<br/>
    </Intro>

    <BlockText
      heading="Company's Product"
      description={(
        <>
          Dooonut is an LBS social app launched by us.BFF Only👭Miss you buddy ⚽️, girlfriends 💅? Miss you buddy ⚽️, girlfriends 💅? Find them in the donuts. We provide unnecessarily flaws in freezing 😵 and blur positions. It also ensures that your location is safe and will not be obtained by strangers. New friends? Shake and add friends! 🙋<a href="https://www.dooonut.com" target="_blank" rel="noopener noreferrer">www.dooonut.com</a>
        </>
      )}
    />
  </>
);
