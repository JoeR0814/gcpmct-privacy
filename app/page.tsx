// app/gcpmct-privacy/page.tsx
'use client';

import Image from 'next/image';
import logo from '../../public/logo.png'; // make sure logo.png is in your public folder

const PrivacyPage: React.FC = () => {
	return (
		<main className='px-4 md:px-20 lg:px-40 py-10'>
			{/* Logo */}
			<div className='flex justify-center mb-6'>
				<Image
					src='/gcpm-image.png'
					alt='Gold Coast Property Maintenance LLC Logo'
					width={300}
					height={100}
					className='object-contain'
				/>
			</div>

			<h1 className='text-3xl font-bold text-center mb-2'>Gold Coast Property Maintenance LLC</h1>
			<h3 className='text-xl text-center mb-4'>Landscape & Construction Services</h3>
			<p className='text-center mb-4'>Serving commercial, residential, and community properties.</p>

			<p className='text-center mb-6'>
				📞 Phone: (203) 331-7117
				<br />
				📧 Email:{' '}
				<a href='mailto:OFFICE@gcpmct.com' className='text-blue-600 hover:underline'>
					OFFICE@gcpmct.com
				</a>
			</p>

			<hr className='my-6' />

			<h2 className='text-2xl font-semibold mb-2'>Privacy Policy & SMS Terms</h2>
			<p>
				<strong>Effective Date:</strong> 01/30/26
			</p>

			<h3 className='text-xl font-semibold mt-4 mb-2'>Privacy Policy</h3>
			<p>
				Gold Coast Property Maintenance LLC (“we,” “us,” or “our”) values your privacy and is
				committed to protecting your personal information.
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Information We Collect</h4>
			<ul className='list-disc list-inside mb-4'>
				<li>Name</li>
				<li>Phone number</li>
				<li>Email address (if provided)</li>
				<li>Text message content and communication history</li>
			</ul>

			<h4 className='font-semibold mt-4 mb-1'>How We Use Your Information</h4>
			<p>Your information is used only to:</p>
			<ul className='list-disc list-inside mb-4'>
				<li>Respond to customer inquiries</li>
				<li>Schedule and coordinate landscaping and construction services</li>
				<li>Provide service updates and customer support</li>
			</ul>

			<h4 className='font-semibold mt-4 mb-1'>SMS Consent and Data Sharing</h4>
			<p>
				We do not sell, rent, or share mobile phone numbers or SMS consent with third parties or
				affiliates for marketing or promotional purposes.
			</p>
			<p>
				No mobile opt-in or text message consent will be shared with third parties or affiliates.
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Data Protection</h4>
			<p>
				We take reasonable steps to protect your information from unauthorized access, misuse, or
				disclosure.
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Contact Information</h4>
			<p>
				📞 Phone: (203) 331-7117
				<br />
				📧 Email:{' '}
				<a href='mailto:Office@gcpmct.com' className='text-blue-600 hover:underline'>
					Office@gcpmct.com
				</a>
			</p>

			<hr className='my-6' />

			<h3 className='text-xl font-semibold mt-4 mb-2'>SMS Terms of Service</h3>
			<p>
				By providing your phone number and communicating with Gold Coast Property Maintenance LLC by
				text message, you agree to the following:
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Types of Messages</h4>
			<p>We send text messages only for:</p>
			<ul className='list-disc list-inside mb-4'>
				<li>Customer service and support</li>
				<li>Scheduling, job coordination, and service updates</li>
				<li>Direct communication related to landscaping and construction services</li>
			</ul>
			<p>
				<strong>We do not send promotional or marketing text messages.</strong>
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Message Details</h4>
			<ul className='list-disc list-inside mb-4'>
				<li>Message frequency may vary</li>
				<li>Message and data rates may apply</li>
				<li>Reply STOP at any time to opt out</li>
				<li>Reply HELP for assistance</li>
			</ul>

			<h4 className='font-semibold mt-4 mb-1'>Opt-Out</h4>
			<p>
				You may opt out of receiving SMS messages at any time by replying STOP. Once you opt out,
				you will no longer receive text messages unless you contact us again.
			</p>

			<h4 className='font-semibold mt-4 mb-1'>Privacy</h4>
			<p>
				Your information is handled according to this Privacy Policy and is used only for
				business-related communication.
			</p>

			<hr className='my-6' />

			<h3 className='text-xl font-semibold mt-4 mb-2'>Website SMS Consent Language</h3>
			<p>If a contact form is used, the following consent language will be displayed:</p>
			<p className='mb-6'>
				☐ I consent to receive conversational and informational SMS messages from Gold Coast
				Property Maintenance LLC related to landscaping and construction services. Reply STOP to opt
				out; Reply HELP for support; Message and data rates may apply; Messaging frequency may vary.
			</p>
		</main>
	);
};

export default PrivacyPage;

