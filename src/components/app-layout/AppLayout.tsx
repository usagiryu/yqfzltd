import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/company-logo.svg';
import Weibo from 'assets/svg/weibo.svg';
import Zhihu from 'assets/svg/zhihu.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink
        name="🍩"
        to="https://dooonut.com"
      />
      <HeaderLink
        name="📖"
        to="./tos/index.html"
      />
      <HeaderLink
        name="🙋🙋‍♂️🐈"
        to="./team/index.html"
      />
      <HeaderLink
        name="🇺🇸"
        to="./en/index.html"
      />
      <HeaderLink
        name="🇯🇵"
        to="./ja/index.html"
      />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Weibo />, to: 'https://weibo.com' },
        { icon: <Zhihu />, to: 'https://zhihu.com' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
