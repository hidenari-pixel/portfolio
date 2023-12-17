import type React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
};

export const UnStyledLink = ({ children, href, target = '' }: Props) => {
  return (
    <a
      href={href}
      style={{ textDecoration: 'none', color: 'white' }}
      target={target}
    >
      {children}
    </a>
  );
};
