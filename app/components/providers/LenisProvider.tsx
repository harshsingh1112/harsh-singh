'use client';

import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import type * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: Props) {
  return (
    <ReactLenis root>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}
