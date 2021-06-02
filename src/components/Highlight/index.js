import { Grid } from '@material-ui/core';
import React from 'react';
import HighLightCard from './HighLightCard';

function Highlight({ report }) {
	const data = report && report.length ? report[report.length - 1] : []
	const sumary = [
		{
			title: 'Số ca nhiễm',
			count: data.Confirmed,
			type: 'comfirmed',
		},
		{
			title: 'Số ca khoỉ',
			count: data.Recovered,
			type: 'recoverd',
		},
		{
			title: 'Số ca tử vong',
			count: data.Deaths,
			type: 'death',
		},
	];

	return (
		<Grid container spacing={3}>
			{sumary.map((item) => (
				<Grid item sm={4} xs={12} key={item.type}>
					<HighLightCard {...item} />
				</Grid>
			))}
		</Grid>
	);
}

export default Highlight;
