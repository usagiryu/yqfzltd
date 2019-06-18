import * as React from 'react';
import Helmet from 'react-helmet';

import { Segment } from 'components/segment/Segment';

export default () => (
  <>
    <Helmet title="404 Not Found" />

    <Segment>
          <h1>404 Not Found<br /><br />
          世界很大 我们终究会在这里相遇 <br />你来或不来 我都在这里 不悲 不喜</h1>
    </Segment>
  </>
);
