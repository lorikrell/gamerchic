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
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--dungeon';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faDiceD20} />,
  title: (
    <Translate
      id="theme.admonition.dungeon"
      description="The default label used for the Dungeon admonition (:::dungeon)">
      homebrew
    </Translate>
  ),
};

export default function AdmonitionTypeDungeon(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
