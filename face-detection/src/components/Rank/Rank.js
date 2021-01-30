import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='b white f3'>
				{`Hello ${name} , You have detected faces`} 
				<div className='b white f1'>
					{entries}
				</div>
				{`times so far...`} 
      		</div>
		</div>
	);
}

export default Rank;

