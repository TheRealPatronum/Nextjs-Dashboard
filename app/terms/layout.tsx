import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function TearmsLayout({ children }: Readonly<Props>) {
  return <div className="items-start p-2">{children}</div>;
}
