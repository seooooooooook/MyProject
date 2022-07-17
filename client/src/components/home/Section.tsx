import React, { ReactNode } from "react";

const Section = (props: {
  className: string;
  color: string;
  children: ReactNode;
}) => {
  return (
    <div className={props.className} style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
};

export default Section;
