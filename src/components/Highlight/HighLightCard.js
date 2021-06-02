import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

const useStyles = makeStyles({
	wrapper: (props) => {
		if (props.type === 'comfirmed') return { borderLeft: '5px solid #c9302c' };
		if (props.type === 'recoverd') return { borderLeft: '5px solid #28a745' };
		return { borderLeft: '5px solid gray' };
	},
	title: {
		fontSize: 18,
		marginBottom: 5,
	},
	count: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});

function HighLightCard({ title, count, type }) {
	const styles = useStyles({ type });
	return (
		<Card className={styles.wrapper}>
			<CardContent>
				<Typography component="p" variant="body2" className={styles.title}>
					{title}
				</Typography>
				<Typography component="span" variant="body2" className={styles.count}>
					<CountUp end={count || 0} duration={2} separator=" " />
				</Typography>
			</CardContent>
		</Card>
	);
}

export default HighLightCard;
