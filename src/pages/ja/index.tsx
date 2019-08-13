import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/enintro/Intro';
import { Highlight } from 'components/enintro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Hello" />

    <Intro>
      こんにちは！<Highlight>オタクネットワークテクノロジー株式会社です🤩</Highlight><br/><Highlight>広東省深セン出身です 🇨🇳</Highlight>.
      開発者、商業組織、サービスプロバイダーを接続します。 パーソナライズされた業界ソリューションをご覧ください。 地理的エンパワーメントを通じて、ユーザーと協力してより大きな世界を探索し、可能性を広げます🌍<br/>
    </Intro>

    <BlockText
      heading="Company's Product"
      description={(
        <>
        </>
      )}
    />
  </>
);
