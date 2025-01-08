import React from "react";
import styles from "./styles.module.css";
//
// This component:
// wrap components in a background style that can be selected
// most of the time you do not want to put a <BackgroundWrapper> as a child of <BoundaryBox>
// while it is usually fine to have a <BoundaryBox as a child of a <BackgroundWrapper>

export default function BackgroundWrapper({ id = '', children, backgroundType }) {
  // Use backgroundType to dynamically change the class for the background
  let wrapperClassName;

  switch (backgroundType) {
    case "solidGrey":
      wrapperClassName = styles.backgroundSolidGrey;
      break;
    case "solidBlue":
      wrapperClassName = styles.backgroundSolidBlue;
      break;
    case "zoom":
      wrapperClassName = styles.backgroundZoom;
      break;
    case "gradientDark":
      wrapperClassName = styles.backgroundGradientDark;
      break;
    case "gradientLight":
      wrapperClassName = styles.backgroundGradientLight;
      break;
    case "ada":
      wrapperClassName = styles.backgroundAda;
      break;
    default:
      wrapperClassName = styles.backgroundNone;
  }

  return <div id={id || undefined} className={wrapperClassName}>{children}</div>;
}
