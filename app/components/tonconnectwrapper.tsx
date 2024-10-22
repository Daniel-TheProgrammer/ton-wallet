"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export const TonConnectWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <TonConnectUIProvider
        manifestUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/tonconnect-manifest.json`}
      >
        {children}
      </TonConnectUIProvider>
    </>
  );
};
