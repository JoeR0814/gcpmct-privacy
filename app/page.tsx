'use client';

import Image from 'next/image';

const PrivacyPage: React.FC = () => {
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

			<h1 className='text-3xl font-bold text-center mb-2'>Gold Coast Property Maintenance LLC</h1>
			<h3 className='text-xl text-center mb-4 text-gray-700'>Landscape & Construction Services</h3>
			<p className='text-center mb-6'>Serving commercial, residential, and community properties.</p>

			<p className='text-center mb-10 text-gray-600'>
				📞 Phone: (203) 331-7117
				<br />
				📧 Email:{' '}
				<a href='mailto:OFFICE@gcpmct.com' className='text-blue-600 hover:underline'>
					OFFICE@gcpmct.com
				</a>
			</p>

			{/* Hero Image */}
			<div className='flex justify-center mb-10'>
				<Image
					src='/truck-line-up.jpg'
					alt='Gold Coast trucks lined up'
					width={800}
					height={400}
					className='rounded-lg shadow-lg object-cover'
				/>
			</div>

			{/* Services Section */}
			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-4'>Our Services</h2>
				<p className='mb-6 text-gray-700'>
					Gold Coast Property Maintenance LLC provides full-service property maintenance and
					construction solutions, including:
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
					{/* Service Card */}
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/sidewalk.webp'
							alt='Concrete and sidewalk work'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Concrete & Hardscaping</h3>
							<p className='text-gray-600 text-sm'>
								Sidewalks, pads, repairs, patios, and other concrete solutions.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/multch-bed.jpg'
							alt='Mulching and landscaping'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Landscaping & Mulching</h3>
							<p className='text-gray-600 text-sm'>
								Lawn care, mulching, flower beds, planting, and beautification.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/plowing.jpg'
							alt='Snow plowing services'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Seasonal & Winter Services</h3>
							<p className='text-gray-600 text-sm'>
								Snow plowing, ice control, salting, and seasonal cleanups.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/patio.jpg'
							alt='Patio construction'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Excavation & Site Prep</h3>
							<p className='text-gray-600 text-sm'>
								Site preparation, grading, and excavation for any project size.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/shovel-deck.jpg'
							alt='New lawns and restoration'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Lawn Install & Restoration</h3>
							<p className='text-gray-600 text-sm'>
								New lawns, lawn restoration, and ongoing lawn maintenance programs.
							</p>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image
							src='/flower-bed.jpg'
							alt='Flower bed maintenance'
							width={400}
							height={250}
							className='object-cover w-full h-48'
						/>
						<div className='p-4'>
							<h3 className='font-semibold mb-2'>Property Maintenance</h3>
							<p className='text-gray-600 text-sm'>
								Ongoing property maintenance, custom projects, and community support.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Privacy & SMS Section */}
			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-3'>Privacy Policy & SMS Terms</h2>
				<p className='text-gray-600 mb-4'>
					<strong>Effective Date:</strong> 01/30/26
				</p>

				<h3 className='text-xl font-semibold mt-4 mb-2'>Privacy Policy</h3>
				<p className='text-gray-700 mb-4'>
					Gold Coast Property Maintenance LLC (“we,” “us,” or “our”) values your privacy and is
					committed to protecting your personal information.
				</p>

				<h4 className='font-semibold mt-4 mb-1'>Information We Collect</h4>
				<ul className='list-disc list-inside mb-4 text-gray-600'>
					<li>Name</li>
					<li>Phone number</li>
					<li>Email address (if provided)</li>
					<li>Text message content and communication history</li>
				</ul>

				<h4 className='font-semibold mt-4 mb-1'>How We Use Your Information</h4>
				<ul className='list-disc list-inside mb-4 text-gray-600'>
					<li>Respond to customer inquiries</li>
					<li>Schedule and coordinate services</li>
					<li>Provide job updates and customer support</li>
				</ul>

				<h4 className='font-semibold mt-4 mb-1'>SMS Consent and Data Sharing</h4>
				<p className='text-gray-600 mb-2'>
					We do not sell, rent, or share mobile phone numbers or SMS consent with third parties or
					affiliates for marketing or promotional purposes.
				</p>
				<p className='text-gray-600 mb-2'>
					No mobile opt-in or text message consent will be shared with third parties or affiliates.
				</p>

				<h4 className='font-semibold mt-4 mb-1'>Data Protection</h4>
				<p className='text-gray-600 mb-2'>
					We take reasonable steps to protect your information from unauthorized access, misuse, or
					disclosure.
				</p>

				<h4 className='font-semibold mt-4 mb-1'>Contact Information</h4>
				<p className='text-gray-600 mb-6'>
					📞 Phone: (203) 331-7117
					<br />
					📧 Email:{' '}
					<a href='mailto:Office@gcpmct.com' className='text-blue-600 hover:underline'>
						Office@gcpmct.com
					</a>
				</p>
			</section>

			{/* SMS Terms */}
			<section className='mb-10 bg-white p-6 rounded-lg shadow-lg'>
				<h3 className='text-xl font-semibold mb-4'>SMS Terms of Service</h3>

				<ul className='list-disc list-inside mb-4 text-gray-700'>
					<li>Customer service and support</li>
					<li>Scheduling, job coordination, and service updates</li>
					<li>
						Direct communication related to landscaping, construction, and property maintenance
						services
					</li>
				</ul>

				<p className='text-gray-700 mb-4'>
					<strong>We do not send promotional or marketing text messages.</strong>
				</p>

				<ul className='list-disc list-inside mb-4 text-gray-700'>
					<li>Message frequency may vary</li>
					<li>Message and data rates may apply</li>
					<li>Reply STOP at any time to opt out</li>
					<li>Reply HELP for assistance</li>
				</ul>

				<p className='text-gray-700 mb-4'>
					You may opt out of receiving SMS messages at any time by replying STOP. After opting out,
					you will receive a single confirmation message and will no longer receive text messages
					unless you opt back in by replying START.
				</p>

				<p className='text-gray-700 mb-0'>
					Your information is handled according to this Privacy Policy and is used only for
					business-related communication.
				</p>
			</section>

			{/* SMS Consent */}
			<section className='mb-10'>
				<h3 className='text-xl font-semibold mb-2'>Website SMS Consent Language</h3>
				<p className='text-gray-700 mb-6'>
					If a contact form is used, the following consent language will be displayed:
				</p>
				<p className='text-gray-700 bg-white p-4 rounded-lg shadow'>
					☐ I consent to receive conversational and informational SMS messages from Gold Coast
					Property Maintenance LLC related to landscaping, construction, and property maintenance
					services. Reply STOP to opt out; Reply HELP for support; Message and data rates may apply;
					Messaging frequency may vary.
				</p>
			</section>
		</main>
	);
};

export default PrivacyPage;

