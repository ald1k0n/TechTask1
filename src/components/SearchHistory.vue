<template>
	<div>
		<div class="History">
			<h3>History of search:</h3>
			<template v-if="history.length">
				<strong id="history" v-for="(value, index) in history" :key="index">
					{{ value }}
				</strong>
			</template>
			<template v-else> История локаций отсутствует </template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchHistory',
	props: {
		history: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style>
#history {
	display: block;
}
</style>
