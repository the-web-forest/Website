import Member from 'core/domain/Member';
import styles from './styles.module.css';

const MemberCard = ({
	profilePictureUrl,
	name,
	description,
	linkedInUrl
}: Member) => {
	const openLinkedIn = () => {
		window.open(linkedInUrl, '_blank');
	};

	const getStyle = () => {
		const withPhoto = {
			backgroundImage: `url(${profilePictureUrl})`
		};
		return profilePictureUrl ? withPhoto : {};
	};

	return (
		<div id={styles.memberCard}>
			<div style={getStyle()} id={styles.profilePicture} />
			<div id={styles.name}>{name}</div>
			<div id={styles.description}>{description}</div>
			<div onClick={(e) => openLinkedIn()} id={styles.linkedinTeam} />
		</div>
	);
};

export default MemberCard;
