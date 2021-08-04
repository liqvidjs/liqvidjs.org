/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import CodeBlock from '@theme-init/CodeBlock';
import LiqvidPreview from "../LiqvidPreview";

const withLiveEditor = (Component) => {
  const WrappedComponent = (props) => {
    if (props.liqvid) {
      return <LiqvidPreview {...props} />;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
