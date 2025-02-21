/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import AdmonitionTypeNote from '@theme/Admonition/Type/Note';
import AdmonitionTypeTip from '@theme/Admonition/Type/Tip';
import AdmonitionTypeGamerchic from './Type/Gamerchic';
import AdmonitionTypeHomebrew from './Type/Homebrew';
import AdmonitionTypeDungeon from './Type/Dungeon';
import AdmonitionTypeSonceri from './Type/Sonceri';
import AdmonitionTypeInfo from '@theme/Admonition/Type/Info';
import AdmonitionTypeCaution from '@theme/Admonition/Type/Caution';
import AdmonitionTypeDanger from '@theme/Admonition/Type/Danger';
import type AdmonitionTypes from '@theme/Admonition/Types';

const admonitionTypes: typeof AdmonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  gamerchic: AdmonitionTypeGamerchic,
  homebrew: AdmonitionTypeHomebrew,
  dungeon: AdmonitionTypeDungeon,
  sonceri: AdmonitionTypeSonceri,
  info: AdmonitionTypeInfo,
  caution: AdmonitionTypeCaution,
  danger: AdmonitionTypeDanger,
};

// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases: typeof AdmonitionTypes = {
  secondary: (props) => <AdmonitionTypeNote title="secondary" {...props} />,
  important: (props) => <AdmonitionTypeInfo title="important" {...props} />,
  success: (props) => <AdmonitionTypeTip title="success" {...props} />,
  // TODO bad legacy mapping, warning is usually yellow, not red...
  warning: (props) => <AdmonitionTypeDanger title="warning" {...props} />,
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
