<template>
	<div>
		<div class="bg-[#ECF0F1] min-h-full">
			<div>
				<!--Navbar-->
				<Navbar @search="performSearch" />
			</div>

			<!--List of coupons-->
			<main class="sm:px-10 sm:py-5">
				<MainSection :coupons="filteredCoupons" />
			</main>
		</div>
	</div>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import { coupons } from "@/data/data.js";

export default {
	components: {
		MainSection,
	},
	data() {
		return {
			allCoupons: coupons,
			filteredCoupons: coupons,
		};
	},
	methods: {
		performSearch(query) {
			this.filteredCoupons = this.allCoupons.filter((coupon) =>
				coupon.title.toLowerCase().includes(query.toLowerCase())
			);
		},
	},
};
</script>
