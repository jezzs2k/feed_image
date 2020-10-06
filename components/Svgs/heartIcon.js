import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props.size || 176.104}
      height={props.size || 176.104}
      viewBox="0 0 176.104 176.104"
      fill="#000"
      {...props}>
      <Path d="M150.383 18.301a49.633 49.633 0 00-24.033-6.187c-15.394 0-29.18 7.015-38.283 18.015-9.146-11-22.919-18.015-38.334-18.015-8.704 0-16.867 2.259-24.013 6.187C10.388 26.792 0 43.117 0 61.878 0 67.249.874 72.4 2.457 77.219c8.537 38.374 85.61 86.771 85.61 86.771s77.022-48.396 85.571-86.771a49.09 49.09 0 002.466-15.341c0-18.754-10.388-35.074-25.721-43.577z" />
    </Svg>
  );
}

export default SvgComponent;
