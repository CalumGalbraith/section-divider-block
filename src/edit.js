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
		toggleField,
		dividerStyle,
		dividerColor		
	} = attributes;
	
	const [color, setColor] = useState();

	const colors = useSelect('core/block-editor').getSettings().colors;

	function onChangeToggleField( newValue ) {
		setAttributes( {
			// Toggle the state.
			toggleField: ! toggleField
		} );

	}
	

	return (
		<>
		<InspectorControls>
					<PanelBody title={ __( 'Divider Settings' ) }>
					<ToggleControl
							__nextHasNoMarginBottom
							label="Divider Position"
							help={toggleField ? "Top Divider" : "Bottom Divider"}
							checked={ toggleField }
							onChange={ onChangeToggleField }
						/>

						<SelectControl
						label="Divider Style"
						value={ dividerStyle }
						options={ [
							{ label: 'Cross', value:'cross '},
							{ label: 'Bubble', value:'bubble '},
							{ label: 'Asym Slope', value:'asym-slope '},
							{ label: 'Asym Triangle', value:'asym-triangle '},
							{ label: 'Inter Tilt', value:'inter-tilt '},
							{ label: 'Grunge', value:'grunge '}
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
			<div className={`${toggleField ? 'top ' : 'bottom '} ${dividerStyle}`} style={{ backgroundColor: dividerColor }}> </div>
		</div>
		</>
	);

}
