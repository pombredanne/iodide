import React from "react";
import PropTypes from "prop-types";

import { Inspector } from "iodide-react-inspector";

export default class DefaultRenderer extends React.Component {
  static propTypes = {
    value: PropTypes.any
  };

  render() {
    return <Inspector data={this.props.value} shouldShowPlaceholder={false} />;
  }
}
