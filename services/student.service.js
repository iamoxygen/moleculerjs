"use strict";

const DbService = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "student",

	mixins: [DbService("students")],
	/**
	 * Settings
	 */
	settings: {
		entityValidator: {
			name: {
				type: "string",
			},
			email: {
				type: "string",
			},
			address: {
				type: "string",
			},
			status: {
				type: "boolean",
			},
			current_school: {
				type: "string",
			},
			previous_school: {
				type: "string",
			},
			parents_details: {
				type: "string",
			},
			// assigned_teacher: {},
			role: {
				type: "string",
			},
			password: {
				type: "string",
			},
			// notification: {},
		},
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				_id: "string",
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				const { _id } = ctx.params;
				const response = await this.getById(_id);
				


				if(!response){
					return "Record not found"
				}


				return `Welcome, ${response?.name}`;
			},
		},

		student: {
			rest: {
				method: "GET",
				path: "/student",
			},
			params: {
				_id: "string",
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				const { _id } = ctx.params;
				const response = await this.getById(_id);

				return response;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
