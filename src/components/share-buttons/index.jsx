import React from 'react';
import './share-buttons.styles.css';

const ShareButtons = ({ shareText, subject }) => {
	const links = [
		{
			name: 'facebook',
			url: `https://www.facebook.com/sharer/sharer.php?u=${shareText}`,
		},
		{
			name: 'twitter',
			url: `https://twitter.com/messages/compose?recipient_id=&text=${shareText}`,
		},
		{
			name: 'gmail',
			url: `mailto:?Subject=${encodeURIComponent(subject)}&body=${encodeURI(
				shareText
			)}`,
		},

		{
			name: 'whatsapp',
			url: `https://api.whatsapp.com/send?text=${shareText}`,
		},
	];
	return (
		<div className="share">
			{links.map((link) => (
				<a
					href={link.url}
					rel="noopener noreferrer"
					target="_blank"
					key={link.name}
				>
					<img
						src={require(`../../assets/social/${link.name}.png`)}
						alt={link.name}
					/>
				</a>
			))}
		</div>
	);
};

export default ShareButtons;
