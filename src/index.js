'use strict';

/** Content API actions the public website needs without an API token. */
const PUBLIC_CONTENT_ACTIONS = [
	'api::sponsor-logo.sponsor-logo.find',
	'api::sponsor-logo.sponsor-logo.findOne',
	'api::footer.footer.find'
];

async function ensurePublicPermissions(strapi) {
	const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
		where: { type: 'public' }
	});
	if (!publicRole) {
		strapi.log.warn('users-permissions: public role not found; skipping permission bootstrap');
		return;
	}

	for (const action of PUBLIC_CONTENT_ACTIONS) {
		const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
			where: { action, role: publicRole.id }
		});
		if (!existing) {
			await strapi.db.query('plugin::users-permissions.permission').create({
				data: { action, role: publicRole.id }
			});
			strapi.log.info(`users-permissions: enabled public ${action}`);
		}
	}
}

module.exports = {
	register(/*{ strapi }*/) {},

	async bootstrap({ strapi }) {
		try {
			await ensurePublicPermissions(strapi);
		} catch (err) {
			strapi.log.error('users-permissions bootstrap failed', err);
		}
	}
};
