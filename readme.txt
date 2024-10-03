=== Section Divider Block ===
Contributors:      Calum Galbraith
Tags:              block, custom wordpress block, SVG section divider
Tested up to:      6.6
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Custom Block to display svg section dividers to the block editor in Wordpress.

== Description ==
Add a selection of SVG section dividers to the block editior. The plugin renders the theme pallete to color the dividers, the divider can be flipped to top or bottom and the divider shape is change via dropdown.

Credit to SVG Shape Dividers by SVGBackgrounds.com for the great selection of pre-made SVG dividers, you can find more at https://www.svgbackgrounds.com/elements/svg-shape-dividers/


== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/section-divider-block` directory, install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Any further plans to add functionality?  =

Plan on adding a larger selcetion of dividers and possibly height control.

= Can I add my own dividers? =

To add your own dividers you will need to add the options in edit.js, then add your class in style.scss. Lastly you will need to run npm build. As the block markup is not changing this should not cause any update errors.


== Changelog ==

= 0.1.0 =
* Release

