import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'MUI <MenuItem> inside <Select>'

export const body = ({
  $,

  Components: { MenuItem },
}: SnippetOptions): React.ReactElement<any> => (
  <MenuItem value={$} $>
    $
  </MenuItem>
)
