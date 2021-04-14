import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, target, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  let targetBlank = "";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  if(target==="_blank"){
    targetBlank = "target=_blank"
  }
  return <Tag {...props} {...otherProps} {...targetBlank} />;
};

export default MenuLink;
