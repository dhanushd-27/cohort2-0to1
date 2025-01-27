// import { env } from "@/env";
// import Link from "next/link";
// import { CheckIcon } from "../../components/Icon/CheckIcon";
// import { api } from "@/api";
"use client"
import { PolarEmbedCheckout } from '@polar-sh/checkout/embed'
import { useEffect } from 'react'


export default function Home() {
	// const { result } = await api.products.list({
	// 	organizationId: env.POLAR_ORGANIZATION_ID,
	// 	isArchived: false,
	// });

	useEffect(() => {
    PolarEmbedCheckout.init()
  }, [])


	return (
		<div className="flex flex-col gap-y-32">
			<h1 className="text-5xl">Products</h1>
			<div className="grid grid-cols-4 gap-12">
				{/* {result.items.map((product) => (
					<div
						key={product.id}
						className="flex flex-col gap-y-24 justify-between p-12 rounded-3xl bg-neutral-950 h-full border border-neutral-900"
					>
						<div className="flex flex-col gap-y-8">
							<h1 className="text-3xl">{product.name}</h1>
							<p className="text-neutral-400">{product.description}</p>
							<div>
								{product.benefits.map((benefit) => (
									<div
										key={benefit.id}
										className="flex flex-row gap-x-2 items-center"
									>
										<CheckIcon />
										<span>{benefit.description}</span>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-row gap-x-4 justify-between items-center">
							<Link
								className="h-8 flex flex-row items-center justify-center rounded-full bg-white text-black font-medium px-4"
								href={`/checkout?productId=${product.id}`}
							>
								Buy
							</Link>
							<span className="text-neutral-500">
								{product.prices[0].amountType === "fixed"
									? `$${product.prices[0].priceAmount / 100}`
									: product.prices[0].amountType === "free"
										? "Free"
										: "Pay what you want"}
							</span>
						</div>
					</div>
				))} */}

				<a
					href="https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_7fUecLR4ULVnlM4xY1Mp4J8NKY4Ym52MJEbic2AEIck/redirect"
					data-polar-checkout
					data-polar-checkout-theme="light"
					about=''
					
					draggable
				>
					Purchase
				</a>
				<script
					src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
					defer
					data-auto-init
				></script>


				{/* <a
					href="https://sandbox-api.polar.sh/v1/checkout-links/polar_cl_n6LeCdVFfygNT4DgvOFPBH5WBXQRulpQU4mWl13XXQy/redirect"
					data-polar-checkout
					data-polar-checkout-theme="dark"
				>
					Purchase
				</a> */}
			</div>
		</div>
	);
}
