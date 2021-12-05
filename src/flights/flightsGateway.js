import { currentDay } from '../utils/common';

const baseUrl = `https://api.iev.aero/api/flights/${currentDay}`;

const fetchFlights = () => fetch(baseUrl).then(response => response.json());

export default fetchFlights;