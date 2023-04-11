import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
	name: 'default',
	title: 'astrojobs',

	projectId: 'utkjjazh',
	dataset: 'production',

	plugins: [
		deskTool({
			name: 'site_config',
			title: 'Site Config',
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						S.listItem()
							.title('Site Config')
							.child(
								S.document()
									.schemaType('site_config')
									.documentId('site_config')
									.title('Site Config')
							),
						...S.documentTypeListItems().filter(
							(listItem) => !['site_config'].includes(listItem.getId() as string)
						),
					]),
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
