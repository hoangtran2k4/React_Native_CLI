// components/ScreenRenderer.tsx
import React from 'react';
import {screenMap} from '../HomeScreen/screenMap';
import Welcome from '../HomeScreen/welcome';

type Props = {
  activeKey: string | null;
};

const ScreenRenderer = ({activeKey}: Props) => {
  if (!activeKey) {
    return <Welcome />;
  }

  const key = Object.keys(screenMap).find(k => activeKey.includes(k));

  return key ? screenMap[key] : <Welcome />;
};

export default ScreenRenderer;
