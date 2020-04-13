import * as React from "react";
 import "./testStyle.scss"
export type Props = { text: string };
 
export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;
 
    return <div className="color-text well">Hello {text}</div>;
  }
}
