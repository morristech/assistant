import { Widget, Transform } from "@bridged.xyz/flutter-builder";
import { AltLayoutMixin } from "@bridged.xyz/design-sdk/lib/nodes/mixin";

/**
 * https://api.flutter.dev/flutter/widgets/Transform-class.html
 */
export function wrapWithRotation(node: AltLayoutMixin,
    child: Widget): Widget {
    if (node.rotation !== undefined && child &&
        Math.round(node.rotation) !== 0) {
        //  convert angles to clockwise radians: (angle * -pi/180)
        Transform.rotate({
            angle: node.rotation * (-3.14159 / 180),
            child: child
        });
    }
    return child;
}
