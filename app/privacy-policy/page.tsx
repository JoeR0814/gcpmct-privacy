'use client';

import Image from 'next/image';

const PrivacyPolicyPage: React.FC = () => {
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

			<h1 className='text-3xl font-bold text-center mb-6'>Privacy Policy</h1>
			<p className='text-center text-gray-600 mb-8'>
				<strong>Effective Date:</strong> January 30, 2026
			</p>

			<div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
					<p className='text-gray-700 mb-4'>
						Gold Coast Property Maintenance LLC ("we," "us," or "our") values your privacy and is
						committed to protecting your personal information. This Privacy Policy describes how we
						collect, use, and safeguard your information when you use our services or interact with
						our website.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Information We Collect</h2>
					<p className='text-gray-700 mb-3'>We may collect the following types of information:</p>
					<ul className='list-disc list-inside mb-4 text-gray-700'>
						<li>Name and contact information</li>
						<li>Phone number (including mobile phone number for SMS communications)</li>
						<li>Email address</li>
						<li>Property address and service location</li>
						<li>Service preferences and communication history</li>
						<li>Text message content and communication records</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>How We Use Your Information</h2>
					<p className='text-gray-700 mb-3'>We use your information for the following purposes:</p>
					<ul className='list-disc list-inside mb-4 text-gray-700'>
						<li>Provide landscaping, construction, and property maintenance services</li>
						<li>Respond to customer inquiries and support requests</li>
						<li>Schedule and coordinate service appointments</li>
						<li>Send service updates, appointment reminders, and follow-up communications</li>
						<li>Process billing and payment information</li>
						<li>Improve our services and customer experience</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>SMS Communications and Consent</h2>
					<p className='text-gray-700 mb-4'>
						<strong>Data Sharing:</strong> The information (phone numbers) obtained as part of the
						SMS consent process will not be shared with third parties for marketing purposes. We do
						not sell, rent, or share mobile phone numbers or SMS consent with third parties or
						affiliates for marketing or promotional purposes.
					</p>
					<p className='text-gray-700 mb-4'>
						<strong>No Third-Party Sharing:</strong> No mobile opt-in or text message consent will
						be shared with third parties or affiliates.
					</p>
					<p className='text-gray-700 mb-4'>
						<strong>Business Use Only:</strong> We use SMS communications solely for
						business-related customer service, appointment scheduling, service updates, and direct
						communication related to our landscaping, construction, and property maintenance
						services.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Data Protection and Security</h2>
					<p className='text-gray-700 mb-4'>
						We implement appropriate technical and organizational measures to protect your personal
						information against unauthorized access, alteration, disclosure, or destruction.
						However, no method of transmission over the internet or electronic storage is 100%
						secure.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Data Retention</h2>
					<p className='text-gray-700 mb-4'>
						We retain your personal information only as long as necessary to provide our services
						and comply with legal obligations. Communication records may be retained for business
						and legal compliance purposes.
					</p>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Your Rights</h2>
					<p className='text-gray-700 mb-3'>You have the right to:</p>
					<ul className='list-disc list-inside mb-4 text-gray-700'>
						<li>Access and review your personal information</li>
						<li>Request corrections to inaccurate information</li>
						<li>Opt out of SMS communications at any time by replying "STOP"</li>
						<li>Request deletion of your personal information (subject to legal requirements)</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
					<p className='text-gray-700 mb-4'>
						If you have questions about this Privacy Policy or our data practices, please contact
						us:
					</p>
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
					<h2 className='text-2xl font-semibold mb-4'>Changes to This Policy</h2>
					<p className='text-gray-700'>
						We may update this Privacy Policy from time to time. Any changes will be posted on this
						page with an updated effective date. We encourage you to review this policy
						periodically.
					</p>
				</section>
			</div>
		</main>
	);
};

export default PrivacyPolicyPage;
