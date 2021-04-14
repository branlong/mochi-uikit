import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  // if(target==="_blank"){
  //   targetBlank = "target=_blank"
  // }
  const targetBlank = "target=_blank";
  return <Tag {...props} {...otherProps} {..."target=_blank"} />;
};

export default MenuLink;
