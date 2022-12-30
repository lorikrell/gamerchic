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
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--gamerchic';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faRobot} />,
  title: (
    <Translate
      id="theme.admonition.gamerchic"
      description="The default label used for the Gamerchic admonition (:::gamerchic)">
      gamerchic
    </Translate>
  ),
};

export default function AdmonitionTypeGamerchic(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
