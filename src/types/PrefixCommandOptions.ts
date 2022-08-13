import { 
	Message,
	Client, 
	PermissionResolvable 
} from 'discord.js';

export interface RunOptions {
    client: Client
    message: Message
    args: Array<string>
}

export type RunFunction = (options: RunOptions) => any;

export type PrefixCommandOptions = {
    name: string
    description?: string
    aliases?: Array<string>
    cooldown?: number
    permissions?: {
        member?: PermissionResolvable[]
        bot?: PermissionResolvable[]
    }
    run: RunFunction
};