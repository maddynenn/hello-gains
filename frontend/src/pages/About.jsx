import React from "react";

export default function FAQPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-16">
			<h1 className="text-2xl font-bold text-green-600 text-center mb-8">
				Frequently Asked <br /> Questions
			</h1>

			<div className="max-w-xl text-gray-700 space-y-6">
				<div>
					<p className="font-medium">• I don't know what to buy!</p>
					<p className="mt-1">
						Don’t worry! Our talented team of data engineers have developed an
						algorithm to get you the protein of your dreams.
					</p>
				</div>

				<div>
					<p className="font-medium">
						• If I buy your products, will I look like Owen and Henry?
					</p>
					<p className="mt-1">HA! no.</p>
				</div>

				<div>
					<p className="font-medium">• How much does this cost?</p>
					<p className="mt-1">
						As much or as little as you want – try our starter packs for just
						$5/month, then order what you like best whenever you want à la carte.
					</p>
				</div>

				<div>
					<p className="font-medium">• Is this only for bulking/cutting?</p>
					<p className="mt-1">
						Nope! Our products are for anyone who wants to gain, maintain, or
						even lose weight! Simply choose the relevant option when creating
						your account and you will get the perfect boxes recommended to you.
					</p>
				</div>
			</div>

			<div className="mt-16 flex flex-col items-center">
				<img
					src="/hellogains-logo.png"
					alt="Hello Gains Logo"
					className="w-56 h-auto mb-4"
				/>
				<h2 className="text-4xl font-bold text-green-600 tracking-tight">
					HELLO <br />
					<span className="block">GAINS</span>
				</h2>
			</div>
		</div>
	);
}
