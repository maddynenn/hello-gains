import React from "react";
import "../style/FAQ.css"; // optional — see style section below

export default function FAQ() {
	return (
		<div className="faq-container">
			<h1 className="faq-title">
				Frequently Asked <br /> Questions
			</h1>

			<div className="faq-content">
				<div className="faq-item">
					<p className="question">• I don't know what to buy!</p>
					<p className="answer">
						Don’t worry! Our talented team of data engineers have developed an algorithm to get you
						the protein of your dreams.
					</p>
				</div>

				<div className="faq-item">
					<p className="question">• If I buy your products, will I look like Owen and Henry?</p>
					<p className="answer">HA! no.</p>
				</div>

				<div className="faq-item">
					<p className="question">• How much does this cost?</p>
					<p className="answer">
						As much or as little as you want – try our starter packs for just $5/month, then order
						what you like best whenever you want à la carte.
					</p>
				</div>

				<div className="faq-item">
					<p className="question">• Is this only for bulking/cutting?</p>
					<p className="answer">
						Nope! Our products are for anyone who wants to gain, maintain, or even lose weight!
						Simply choose the relevant option when creating your account and you will get the
						perfect boxes recommended to you.
					</p>
				</div>
			</div>

			<div className="faq-logo">
				<img src="/hellogains-logo.png" alt="Hello Gains Logo" />
				<h2>
					HELLO <br /> GAINS
				</h2>
			</div>
		</div>
	);
}
