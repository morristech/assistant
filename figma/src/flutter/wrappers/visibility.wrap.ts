import { Widget, Visibility } from "@bridged.xyz/flutter-builder";
import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes/mixin";

/**
 * Wrap widget with visibility if possible
 */
export function wrapWithVisibility(node: ReflectSceneNode,
    child: Widget): Widget {
    if (node.visible !== undefined && node.visible === false && child) {
        return new Visibility({
            visible: node.visible,
            child: child
        })
    }
    return child;
}
