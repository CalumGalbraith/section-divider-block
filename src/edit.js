/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useState } from 'react';



/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import {
	ToggleControl,
	PanelBody,
	SelectControl,
	ColorPalette 
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	
	const {
		dividerPosition,
		dividerStyle,
		dividerColor,
		dividerFlip,		
	} = attributes;
	

	const colors = useSelect('core/block-editor').getSettings().colors;

	

	return (
		<>
		<InspectorControls>
					<PanelBody title={ __( 'Divider Settings' ) }>
					<ToggleControl
							__nextHasNoMarginBottom
							label={ __( 'Divider Position' ) }
							help={ __(dividerPosition ? 'Top Divider' : 'Bottom Divider') }
							checked={ dividerPosition }
							onChange={  (value) => setAttributes({ dividerPosition: ! dividerPosition }) }
						/>
					<ToggleControl
							__nextHasNoMarginBottom
							label={ __( 'Horizontal Flip' ) }
							help={ __(dividerFlip ? 'Flip' : 'No Flip') }
							checked={ dividerFlip }
							onChange={  (value) => setAttributes({ dividerFlip: ! dividerFlip }) }
						/>

						<SelectControl
						label={ __( 'Divider Style' ) }
						value={ dividerStyle }
						options={ [
							{ label: 'Arc', value:'section-divider-block-arc '},
							{ label: 'Bubble', value:'section-divider-block-bubble '},
							{ label: 'Curve', value:'section-divider-block-curve '},
							{ label: 'Triangle', value:'section-divider-block-triangle '},
							{ label: 'Steps', value:'section-divider-block-steps '},
							{ label: 'Grunge', value:'section-divider-block-grunge '},
							{ label: 'Asym Slope', value:'section-divider-block-asym-slope '},
							{ label: 'Asym Triangle', value:'section-divider-block-asym-triangle '},
							{ label: 'Layered Curves', value:'section-divider-block-layered-curves '},
							{ label: 'Inter Tilt', value:'section-divider-block-inter-tilt '},
							{ label: 'Inter Arc', value:'section-divider-block-inter-arc '},
							{ label: 'Inter Curves', value:'section-divider-block-inter-curves '},
							{ label: 'Inter Waves', value:'section-divider-block-inter-waves '},
							{ label: 'Inter Scattered Waves', value:'section-divider-block-inter-waves-scattered '},
							
						]}
						onChange={ (value) => setAttributes({ dividerStyle: value })}
						/>

						<ColorPalette
							colors={ colors }
            				value={ dividerColor }
            				onChange={ ( value ) => setAttributes({dividerColor: value}) }
        				/>
					</PanelBody>
					</InspectorControls>
		
		
		<div { ...useBlockProps(
				
		) }>
			<div className={`${dividerPosition ? 'section-divider-block-top ' : 'section-divider-block-bottom '} ${dividerFlip ? 'section-divider-block-flip ' : ''} ${dividerStyle}`} style={{ backgroundColor: dividerColor }}>
			</div>
		
		</div>
		</>
	);

}
