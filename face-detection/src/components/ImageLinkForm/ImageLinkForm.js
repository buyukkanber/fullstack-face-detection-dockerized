import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f4 dib black'>
				{'Ready to Detect Faces'}
			</p>	   
			<div className='center'>
				<div className='center pa4 br3 shadow-2'>
					<input className='f4 pa2 w-70 center bg-transparent b--white' type='tex' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-transparent b--white'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>		
	);
}

export default ImageLinkForm;