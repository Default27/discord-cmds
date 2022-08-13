import { 
	ChatInputApplicationCommandData, 
	ChatInputCommandInteraction, 
	Client, 
	CommandInteractionOptionResolver, 
	PermissionResolvable 
} from 'discord.js';

export interface RunOptions {
    client: Client
    interaction: ChatInputCommandInteraction
    options: CommandInteractionOptionResolver
}

export type RunFunction = (options: RunOptions) => any;

export type SlashCommandOptions = {
    permissions?: {
        member?: PermissionResolvable[]
        bot?: PermissionResolvable[]
    }
    run: RunFunction
} & ChatInputApplicationCommandData;