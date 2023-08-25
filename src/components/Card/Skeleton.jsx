import React from "react";
import ContentLoader from "react-content-loader";
import "./Card.sass";

const Skeleton = () => (
  <ContentLoader
    className="skeleton"
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#c9c9c9"
    foregroundColor="#bababa"
  >
    <rect x="-136" y="-24" rx="0" ry="0" width="350" height="161" />
    <rect x="-22" y="157" rx="0" ry="0" width="232" height="43" />
    <rect x="170" y="214" rx="7" ry="7" width="39" height="36" />
    <rect x="-3" y="215" rx="0" ry="0" width="125" height="36" />
  </ContentLoader>
);

export default Skeleton;
