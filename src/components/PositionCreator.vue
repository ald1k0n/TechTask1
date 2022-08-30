<template>
	<div>
		<div>
			<label for="">Start Point</label>
			<input type="search" @input="addQueryInput" /><br />
			<label for="">End Point</label>
			<input type="search" @input="addDestination" /><br />
			<button @click="addPosition">Add position</button>
		</div>
		<GoogleMapVue
			:firstPoint="coordinatesOfFirstPlace"
			:secondPoint="coordinatesOfSecondPlace"
		/>
		<SearchHistory :history="history" />
	</div>
</template>

<script>
import axios from 'axios';
import GoogleMapVue from './GoogleMap.vue';
import SearchHistory from './SearchHistory.vue';
export default {
	name: 'PositionCreator',
	data() {
		return {
			query: '',
			destination: '',
			coordinatesOfFirstPlace: {},
			coordinatesOfSecondPlace: {},
			history: [],
		};
	},
	methods: {
		addPosition() {
			axios
				.get(
					`http://api.positionstack.com/v1/forward?access_key=c8202ca018e894abf82378cd428a4310&query=${this.query},Nur-Sultan%20010000&country=KZ&region=Astana&limit=1`
				)
				.then(
					(res) =>
						(this.coordinatesOfFirstPlace = {
							lat: res.data.data[0].latitude,
							lng: res.data.data[0].longitude,
						})
				);
			axios
				.get(
					`http://api.positionstack.com/v1/forward?access_key=c8202ca018e894abf82378cd428a4310&query=${this.destination},Nur-Sultan%20010000&country=KZ&region=Astana&limit=1`
				)
				.then(
					(res) =>
						(this.coordinatesOfSecondPlace = {
							lat: res.data.data[0].latitude,
							lng: res.data.data[0].longitude,
						})
				);
			this.history.push(`From ${this.query} to ${this.destination}`);
		},
		addQueryInput(e) {
			this.query = e.target.value;
		},
		addDestination(e) {
			this.destination = e.target.value;
		},
	},
	components: {
		GoogleMapVue,
		SearchHistory,
	}
};
</script>
