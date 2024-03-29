import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: `${theme.spacing(3)}px 0`
	}
}))

function CountySelector(props) {
	const { value, handleOnChange, countries } = props;
	const styles = useStyles();
	return (
		<>
			<FormControl className={styles.formControl}>
				<InputLabel htmlFor="country-selector" shrink>
					Quốc gia
				</InputLabel>
				<NativeSelect
					value={value}
					onChange={handleOnChange}
					inputProps={{
						name: 'country',
						id: 'country-selector',
					}}
				>
					{countries.map((country, index) => (
						<option key={country.ISO2} value={country.ISO2.toLowerCase()}>
							{country.Country}
						</option>
					))}
				</NativeSelect>
				<FormHelperText>Lựa chọn quốc gia</FormHelperText>
			</FormControl>
		</>
	);
}

export default CountySelector;
