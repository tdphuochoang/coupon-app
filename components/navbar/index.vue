<template>
	<div
		class="bg-gray-800 text-gray-100 py-3 px-6 shadow flex flex-col md:flex-row justify-between items-center"
	>
		<!--Logo-->
		<div class="my-3 md:my-1">
			<Logo @click="refreshPage" />
		</div>

		<!--Search engine-->
		<form
			class="flex items-center my-3 md:my-1 w-full sm:w-1/1.5 md:w-1/3"
			@submit.prevent="search"
		>
			<label for="simple-search" class="sr-only">Search</label>
			<div class="relative w-full">
				<div
					class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800"
				>
					<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
				</div>
				<input
					type="text"
					id="simple-search"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-3"
					placeholder="What stores or brands you are looking for?"
					required
					v-model="searchQuery"
				/>
			</div>

			<button
				type="submit"
				class="p-3 ml-2 text-sm font-medium text-white bg-dim-50 rounded-lg border border-dim-150 hover:bg-dim-150 focus:ring-4 focus:outline-none focus:ring-dim-25 transition ease-in-out duration-350"
				@click="search"
			>
				<font-awesome-icon :icon="['fas', 'magnifying-glass']" />
			</button>
		</form>
		<!---->

		<!--Button-->

		<Button @click="signOut">Logout</Button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchQuery: "",
		};
	},
	methods: {
		search() {
			this.$emit("search", this.searchQuery);
		},
		refreshPage() {
			this.$router.go(); // Refreshes the current route
		},
	},
	props: ["user", "signOut"],
};
</script>
