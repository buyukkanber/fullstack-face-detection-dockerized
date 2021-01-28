import React from 'react';

const Navigatiom = ({onRouteChange, isSignedIn}) => {
		if(isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'center'}}>
					<p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa4 pointer'>Sign Out</p>
				</nav>
			);
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'center'}}>
					<p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa4 pointer '>Sign In</p>
					<p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa4 pointer '>Register</p>
				</nav>
			);
		}
}

export default Navigatiom;