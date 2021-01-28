import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`Hello ${name} , You have detected faces`} 
				<div className='white f1'>
					{entries}
				</div>
				{`times so far...`} 
      		</div>
		</div>
	);
}

export default Rank;

