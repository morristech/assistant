import { Opacity, Widget } from "@bridged.xyz/flutter-builder";
import { AltBlendMixin } from "@bridged.xyz/design-sdk/lib/nodes/mixin";

/**
 * Wrap widget with opacity if possible
 */
export function wrapWithOpacity(node: AltBlendMixin, child: Widget): Widget {
    if (node.opacity !== undefined && node.opacity !== 1 && child) {
        return new Opacity({
            opacity: node.opacity,
            child: child
        })
    }
    return child;
}