/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--sonceri';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faMeteor} />,
  title: (
    <Translate
      id="theme.admonition.sonceri"
      description="The default label used for the Sonceri admonition (:::sonceri)">
      sonceri
    </Translate>
  ),
};

export default function AdmonitionTypeSonceri(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
