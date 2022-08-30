<template>
	<div>
		<div class="History">
			<h3>History of search:</h3>
			<strong v-for="(value, index) in searchHistory" :key="index">
				{{ value }}
			</strong>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchHistory',
	props: {
		history: Array,
	},
	data() {
		let store = [];
		store.push(this.$props.history);
		return {
			searchHistory: store,
		};
	},
	computed: {
		SHistory: function () {
			return this.searchHistory;
		},
	},
};
</script>
