import { AltTextNode } from "@bridged.xyz/design-sdk/lib/nodes/mixin";
import { SizedBox, Text, Widget } from "@bridged.xyz/flutter-builder";
import { makeText } from "../make/text.make";
import { WidgetBuilder } from "./default.builder";
import { roundNumber } from "../../ui-utils/numbers.normalizer";

export class TextBuilder extends WidgetBuilder {
  constructor(args: {
    child?: Widget,
    node: AltTextNode
  }) {
    super(args);
  }

  createText(): this {
    // step 1. create text widget
    // step 2. process text auto resize
    this.child = this.wrapTextAutoResize(
      makeText(this.node as AltTextNode)
    )
    return this;
  }

  /**
   * wraps the Text with SizedBox
   * @param node
   * @param child
   */
  wrapTextAutoResize(child: Text): Widget {
    // if, NONE set, provide both w/h for wapping sizedbox
    if ((this.node as AltTextNode).textAutoResize === "NONE") {
      return new SizedBox({
        child: child,
        width: roundNumber(this.node.width),
        height: roundNumber(this.node.height)
      })
    }

    // if HEIGHT set, HEIGHT will be calculated automatically, but width won't
    // provide only height for warpping sizedbox
    else if ((this.node as AltTextNode).textAutoResize === "HEIGHT") {
      return new SizedBox({
        child: child,
        width: this.node.width
      })
    }

    return child;
  }
}

