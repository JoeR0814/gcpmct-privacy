'use client';

import Image from 'next/image';

const TermsConditionsPage: React.FC = () => {
	return (
		<main className='px-4 md:px-20 lg:px-40 py-10 bg-gray-50 text-gray-800'>
			{/* Logo */}
			<div className='flex justify-center mb-8'>
				<Image
					src='/gcpm-image.png'
					alt='Gold Coast Property Maintenance LLC Logo'
					width={300}
					height={100}
					className='object-contain'
				/>
			</div>

			<h1 className='text-3xl font-bold text-center mb-6'>Terms and Conditions</h1>
			<p className='text-center text-gray-600 mb-8'>
				<strong>Effective Date:</strong> January 30, 2026
			</p>

			<div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>General Terms</h2>
					<p className='text-gray-700 mb-4'>
						These Terms and Conditions govern your use of services provided by Gold Coast Property
						Maintenance LLC and your agreement to receive SMS communications from us. By using our
						services or providing consent to receive SMS messages, you agree to these terms.
					</p>
					<p className='text-gray-700 mb-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400'>
						<strong>Note:</strong> This is a template. It is essential to customize these terms and
						conditions to align with your specific business needs and legal requirements.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>SMS For Consent Communication</h2>
					<p className='text-gray-700 mb-4'>
						The information (Phone Numbers) obtained as part of the SMS consent process will not be
						shared with third parties for marketing purposes. We maintain strict confidentiality of
						all customer phone numbers and consent records, using them solely for business-related
						communications with our customers.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Types of SMS Communications</h2>
					<p className='text-gray-700 mb-4'>
						Upon consenting to receive text messages from Gold Coast Property Maintenance LLC, you
						may receive communications related to the following types of messages. Please note that
						standard messaging disclosures apply:
					</p>
					<ul className='list-disc list-inside mb-4 text-gray-700'>
						<li>
							<strong>Appointment reminders:</strong> Notifications about scheduled landscaping or
							construction services
						</li>
						<li>
							<strong>Follow-up messages:</strong> Service completion confirmations and quality
							check-ins
						</li>
						<li>
							<strong>Billing inquiries:</strong> Payment reminders and billing-related
							communications
						</li>
						<li>
							<strong>Service updates:</strong> Weather-related delays, schedule changes, or service
							notifications
						</li>
						<li>
							<strong>Emergency communications:</strong> Urgent service-related notifications
						</li>
					</ul>

					<div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4'>
						<p className='text-gray-700'>
							<strong>Example message:</strong> "Hello, this is a friendly reminder of your upcoming
							landscaping appointment with Gold Coast Property Maintenance at [Location] on [Date]
							at [Time]. Reply STOP to opt out of SMS messaging at any time."
						</p>
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Message Frequency</h2>
					<p className='text-gray-700 mb-4'>
						Message frequency may vary depending on the type of communication. For example, you may
						receive up to 5 SMS messages per week related to your appointments, service updates, or
						account status during active service periods.
					</p>

					<div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-400'>
						<p className='text-gray-700'>
							<strong>Example:</strong> "Message frequency may vary. You may receive up to 5 SMS
							messages per week regarding your appointments, service updates, or account status."
						</p>
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Potential Fees for SMS Messaging</h2>
					<p className='text-gray-700 mb-4'>
						Carriers may charge fees for each message sent or received. These fees can vary based on
						the carrier's pricing structure and whether the message is sent domestically or
						internationally. Gold Coast Property Maintenance LLC is not responsible for any charges
						imposed by your mobile carrier for SMS messages.
					</p>
					<p className='text-gray-700 mb-4'>
						<strong>Standard messaging rates apply.</strong> Please check with your mobile service
						provider for details about your messaging plan and any associated costs.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Opt-In Method</h2>
					<p className='text-gray-700 mb-4'>
						You may opt in to receive SMS messages from Gold Coast Property Maintenance LLC through
						one of the following methods:
					</p>
					<ul className='list-disc list-inside mb-4 text-gray-700'>
						<li>By submitting an online form on our website</li>
						<li>Verbally, during a conversation with our staff</li>
						<li>By filling out a paper form during service consultation</li>
						<li>By checking the SMS consent box during service booking</li>
					</ul>
					<p className='text-gray-700 mb-4'>
						<strong>Note:</strong> Written consent is required for all SMS communications as we
						operate under the "Customer Care" use case. This consent can be provided through digital
						forms on our website or physical forms during in-person consultations.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Opt-Out</h2>
					<p className='text-gray-700 mb-4'>
						Customers can opt-out of SMS messaging from Gold Coast Property Maintenance LLC by
						replying <strong>STOP</strong> at any time to any received SMS message. Once opted out,
						they will receive no further SMS communication except for a single confirmation message
						acknowledging the opt-out request.
					</p>
					<p className='text-gray-700 mb-4'>
						Customers can opt back in at any time by replying <strong>START</strong> to our SMS
						number or by contacting us directly to re-enable SMS communications.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Standard Messaging Disclosures</h2>
					<div className='bg-gray-100 p-6 rounded-lg'>
						<ul className='list-disc list-inside mb-4 text-gray-700'>
							<li>Message and data rates may apply</li>
							<li>Message frequency: 2-5 messages per customer per week during active service</li>
							<li>Standard messaging rates will be charged by your mobile service provider</li>
							<li>
								You can opt out of receiving SMS messages at any time by texting "STOP" to the
								number from which you received the message
							</li>
							<li>
								For assistance, text "HELP" to (203) 331-7117 or visit our{' '}
								<a href='/privacy-policy' className='text-blue-600 hover:underline'>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Service Terms</h2>
					<p className='text-gray-700 mb-4'>
						Our landscaping, construction, and property maintenance services are subject to weather
						conditions, material availability, and scheduling constraints. We will communicate any
						delays or changes via SMS if you have opted in to receive such notifications.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Liability and Disclaimers</h2>
					<p className='text-gray-700 mb-4'>
						While we strive to provide accurate and timely SMS communications, Gold Coast Property
						Maintenance LLC is not liable for any delays, failures, or costs associated with SMS
						delivery. SMS communications are provided as a convenience and should not be considered
						the primary method of important communication.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
					<div className='bg-gray-100 p-4 rounded-lg'>
						<p className='text-gray-700 mb-2'>
							<strong>Gold Coast Property Maintenance LLC</strong>
						</p>
						<p className='text-gray-700 mb-2'>📞 Phone: (203) 331-7117</p>
						<p className='text-gray-700'>
							📧 Email:{' '}
							<a href='mailto:OFFICE@gcpmct.com' className='text-blue-600 hover:underline'>
								OFFICE@gcpmct.com
							</a>
						</p>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold mb-4'>Changes to Terms</h2>
					<p className='text-gray-700'>
						We reserve the right to modify these Terms and Conditions at any time. Any changes will
						be posted on this page with an updated effective date. Continued use of our services or
						SMS communications constitutes acceptance of the modified terms.
					</p>
				</section>
			</div>
		</main>
	);
};

export default TermsConditionsPage;
