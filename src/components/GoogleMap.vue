<template>
	<div>
		<button @click="drawMarkers">Draw Markers</button>
		<GmapMap
			:center="{ lat: 51.163797, lng: 71.438872 }"
			:zoom="15"
			style="width: 100%; height: 700px; margin: 0 auto"
			:options="{
				disableDefaultUi: false,
				fullscreenControl: false,
			}"
		>
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				:clickable="true"
				:draggable="true"
				@click="center = m.position"
			/>
		</GmapMap>
	</div>
</template>

<script>
export default {
	name: 'GoogleMap',
	data() {
		return {
			markers: [],
			paths: [],
		};
	},
	props: {
		firstPoint: Object,
		secondPoint: Object,
	},
	methods: {
		drawMarkers() {
			this.markers = [
				{
					position: this.$props.firstPoint,
				},
				{
					position: this.$props.secondPoint,
				},
			];
		},
	},
};
</script>

<style scoped></style>
