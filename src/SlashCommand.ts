import { SlashCommandOptions } from './types/SlashCommandOptions';

export class SlashCommand {
	constructor(options: SlashCommandOptions) {
		Object.assign(this, options);
	}
}