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
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--homebrew';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faMugHot} />,
  title: (
    <Translate
      id="theme.admonition.homebrew"
      description="The default label used for the Homebrew admonition (:::homebrew)">
      homebrew
    </Translate>
  ),
};

export default function AdmonitionTypeHomebrew(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
