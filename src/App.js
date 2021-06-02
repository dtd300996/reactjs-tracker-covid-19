import '@fontsource/roboto';
import { Container, Typography } from '@material-ui/core';
import sortBy from 'lodash.sortby';
import moment from 'moment';
import 'moment/locale/vi';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountry } from './apis';
import CountySelector from './components/CountySelector';
import Highlight from './components/Highlight';
import Sumary from './components/Sumary';
import '@fontsource/roboto';

moment.locale('vi');

function App() {
	const [countries, setCountries] = useState([]);
	const [selectedCountryId, setSelectedCountryId] = useState('');
	const [report, setReport] = useState('');
	useEffect(() => {
		getCountries().then((res) => {
			const countries = sortBy(res.data, 'Country')
			setCountries(countries);
			setSelectedCountryId('vn');
		});

	}, []);

	const handleOnChange = (e) => {
		setSelectedCountryId(e.target.value);
	};

	useEffect(() => {
		if(selectedCountryId) {
			const country = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId);
	
			getReportByCountry(country.Slug).then((res) => {
				res.data.pop();
				setReport(res.data);
			});
		}
	}, [countries, selectedCountryId]);

	return (
		<Container style={{marginTop: 20}}>
			<Typography variant="h2" component="h2">Số liệu Covid-19</Typography>
			<Typography>{moment().format('LLL')}</Typography>

			<CountySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
			<Highlight report={report} />
			<Sumary report={report} selectedCountryId={selectedCountryId} />
		</Container>
	);
}

export default App;
