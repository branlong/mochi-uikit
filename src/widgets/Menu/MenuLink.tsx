import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "ab" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  const targetblank = isHttpLink ? "target=_blank" : "target=_blank" ;
  return <Tag {...props} {...otherProps} {...targetblank} />;
};

export default MenuLink;
