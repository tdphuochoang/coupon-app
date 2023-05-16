<template>
	<div
		class="bg-white w-full h-[230px] rounded-md shadow-lg flex overflow-hidden"
	>
		<!--Left-->
		<div class="p-5 flex-1">
			<!--Image-->
			<div>
				<img
					:src="coupon.image"
					:alt="coupon.title"
					class="w-[70px] h-[70px] object-contain rounded-full"
				/>
			</div>

			<!--Title & description-->
			<div class="mt-3">
				<p class="text-gray-500 text-md mb-3">{{ coupon.title }}</p>
				<p class="font-bold text-md sm:text-xl">{{ coupon.description }}</p>
			</div>
		</div>

		<!--Right-->
		<div
			class="flex-3 bg-[#F0CD66] text-red-400 p-5 flex flex-col justify-center items-center gap-5"
		>
			<!--Discount value-->
			<div class="text-xl flex flex-col justify-center items-center">
				<p class="font-bold text-3xl">{{ coupon.discountValue }}%</p>
				<p>OFF</p>
			</div>

			<!--Show Code button-->
			<div>
				<Button @click="showCouponContainer">Show Code</Button>
			</div>

			<!--ShowCode Container-->
			<div v-if="showCoupon" class="coupon-container">
				<div
					class="relative py-10 px-5 sm:w-[600px] sm:h-[600px] text-black bg-[#ECF0F1] shadow-md rounded-md flex flex-col justify-center items-center gap-12"
				>
					<!--Image-->
					<div>
						<img
							:src="coupon.image"
							:alt="coupon.title"
							class="w-[120px] h-[120px] object-contain rounded-full"
						/>
					</div>

					<!--Description-->
					<div>
						<p class="font-bold text-2xl text-center">
							{{ coupon.description }}
						</p>
					</div>

					<!--Code reveal-->
					<div class="w-[90%]">
						<p class="text-gray-500 text-center mb-2">
							Copy and paste this code at {{ coupon.websiteName }}
						</p>
						<div
							class="bg-dim-25 h-12 border-2 border-dashed border-dim-150 flex justify-center items-center"
						>
							<p class="font-bold text-2xl tracking-[8px]">
								{{ coupon.couponCode }}
							</p>
						</div>
					</div>

					<!--Website redirect-->
					<button
						class="px-20 py-3 shadow-lg bg-dim-25 rounded-md text-lg hover:text-white hover:bg-dim-100 duration-500"
						@click="redirectToWebsite(coupon.websiteUrl)"
					>
						Visit website
					</button>

					<!--X-Marks-->
					<button
						class="text-black text-2xl absolute top-3 right-5"
						@click="hideCouponContainer"
					>
						<font-awesome-icon :icon="['fas', 'xmark']" />
					</button>
				</div>
			</div>

			<!--Expiration-->
			<div class="text-sm text-red-400">
				<span class="mr-1">
					<font-awesome-icon :icon="['far', 'clock']" /> </span
				><span>Expires on {{ coupon.expiration }}</span>
			</div>
		</div>
	</div>
</template>

<script>
// const { coupon } = defineProps(["coupon"]);

export default {
	props: {
		coupon: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			showCoupon: false,
		};
	},
	methods: {
		showCouponContainer() {
			this.showCoupon = true;
		},
		hideCouponContainer() {
			this.showCoupon = false;
		},
		redirectToWebsite(url) {
			window.open(url, "_blank");
		},
	},
};
</script>

<style scoped>
.coupon-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}
</style>
