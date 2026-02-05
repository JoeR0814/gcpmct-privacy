'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const HomePage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		company: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
		smsConsent: false,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here - integrate with your backend/email service
		console.log('Form submitted:', formData);
		alert('Thank you for your message! We will contact you soon.');
	};

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
				<p>476 Pepper St, Monroe, CT, 06468</p>
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

			{/* Customer Contact Form */}
			<section className='mb-10'>
				<div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
					<h2 className='text-2xl font-bold text-center mb-6'>Send us a message</h2>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
									placeholder='Name'
								/>
							</div>
							<div>
								<label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-1'>
									Company
								</label>
								<input
									type='text'
									id='company'
									name='company'
									value={formData.company}
									onChange={handleInputChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
									placeholder='Company'
								/>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
									Phone
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
									placeholder='Phone'
								/>
							</div>
							<div>
								<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
									placeholder='Email'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
								Subject
							</label>
							<input
								type='text'
								id='subject'
								name='subject'
								value={formData.subject}
								onChange={handleInputChange}
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
								placeholder='Subject'
							/>
						</div>

						<div>
							<label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleInputChange}
								rows={4}
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
								placeholder='Message'
							/>
						</div>

						{/* SMS Consent Checkbox */}
						<div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
							<label className='flex items-start space-x-3'>
								<input
									type='checkbox'
									name='smsConsent'
									checked={formData.smsConsent}
									onChange={handleInputChange}
									className='mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'
								/>
								<span className='text-sm text-gray-700'>
									By checking this box, I agree to receive Conversational SMS messages about
									landscaping, construction, and property maintenance services from Gold Coast
									Property Maintenance LLC at the phone number provided above. Message frequency may
									vary. Data rates may apply. Text HELP for assistance. Reply STOP to opt out of
									receiving SMS messages. Please review our{' '}
									<Link href='/privacy-policy' className='text-blue-600 hover:underline'>
										Privacy Policy
									</Link>{' '}
									and{' '}
									<Link href='/terms-conditions' className='text-blue-600 hover:underline'>
										Terms & Conditions
									</Link>
									.
								</span>
							</label>
						</div>

						<button
							type='submit'
							className='w-full bg-green-700 text-white py-3 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium'
						>
							SEND MESSAGE
						</button>
					</form>
				</div>
			</section>

			{/* Services Section */}
			<section className='mb-10'>
				<h2 className='text-2xl font-semibold mb-4 text-center'>Our Services</h2>
				<p className='mb-6 text-gray-700 text-center max-w-3xl mx-auto'>
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
							src='/shovel-deck.JPG'
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

			{/* SMS Terms Summary */}
			<section className='mb-10'>
				<div className='max-w-4xl mx-auto bg-green-50 p-6 rounded-lg border border-green-200'>
					<h3 className='text-xl font-semibold mb-4 text-center'>SMS Communication Terms</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700'>
						<div>
							<h4 className='font-semibold mb-2'>What you can expect:</h4>
							<ul className='list-disc list-inside space-y-1'>
								<li>Service appointment reminders</li>
								<li>Weather-related schedule updates</li>
								<li>Service completion notifications</li>
								<li>Billing and payment reminders</li>
							</ul>
						</div>
						<div>
							<h4 className='font-semibold mb-2'>Important details:</h4>
							<ul className='list-disc list-inside space-y-1'>
								<li>Message frequency: 2-5 per week during active service</li>
								<li>Standard messaging rates apply</li>
								<li>Reply STOP to opt out anytime</li>
								<li>Reply HELP for assistance</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default HomePage;

