import { PrefixCommandOptions } from './types/PrefixCommandOptions';

export class PrefixCommand {
	constructor(options: PrefixCommandOptions) {
		Object.assign(this, options);
	}
}