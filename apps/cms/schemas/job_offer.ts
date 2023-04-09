import {defineField, defineType} from 'sanity'

export const job_offer = defineType({
	name: 'job_offer',
	title: 'Job Offer',
	type: 'document',
	fields: [
		defineField({
			name: 'company_name',
			type: 'string',
		}),
		defineField({
			name: 'company_logo',
			type: 'image',
		}),
		defineField({
			name: 'location',
			type: 'string',
		}),
		defineField({
			name: 'is_remote',
			type: 'boolean',
		}),

		defineField({
			name: 'role_title',
			type: 'string',
		}),
		defineField({
			name: 'is_full_time',
			type: 'boolean',
		}),
		defineField({
			name: 'is_contract',
			type: 'boolean',
		}),
		defineField({
			name: 'salary_left_bound',
			type: 'number',
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: 'salary_right_bound',
			type: 'number',
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: 'meta_framework',
			type: 'string',
			options: {
				list: [
					{value: 'react', title: 'React'},
					{value: 'vue', title: 'Vue'},
					{value: 'preact', title: 'Preact'},
					{value: 'svelte', title: 'Svelte'},
					{value: 'solidjs', title: 'SolidJS'},
					{value: 'alpinejs', title: 'AlpineJS'},
					{value: 'lit', title: 'Lit'},
				],
			},
		}),
		defineField({
			name: 'listing_url',
			type: 'url',
		}),
	],
})
