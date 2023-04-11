import {defineType} from 'sanity'

export const site_config = defineType({
	name: 'site_config',
	title: 'Site Config',
	type: 'document',
	fields: [
		{
			name: 'free_slots',
			type: 'number',
		},
	],
})
