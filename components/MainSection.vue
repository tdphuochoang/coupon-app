<template>
	<div class="px-5 sm:px-20 py-10 sm:py-5">
		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-10">
			<li v-for="(c, index) in filteredCoupons" :key="index">
				<CouponCard :coupon="c" />
			</li>
		</ul>
	</div>
</template>

<script>
import CouponCard from "../components/CouponCard/index.vue";

export default {
	components: {
		CouponCard,
	},
	props: {
		coupons: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			coupons: this.coupons,
		};
	},
	computed: {
		filteredCoupons() {
			return this.coupons;
		},
	},
};
</script>
