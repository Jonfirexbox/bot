import { Command, CommandStore, CommandOptions, KlasaClient, KlasaMessage } from 'klasa';
import { DefaultCommandOptions } from '../../constants';

const ThisCommandOptions: CommandOptions = {
  ...DefaultCommandOptions,
  name: 'ping',
  description: 'Fetch the bot\'s latency to Discord'
};

export default class extends Command {
  public officialGuildOnly = false;

  constructor(store: CommandStore, file: string[], directory: string) {
    super(store, file, directory, ThisCommandOptions);
  }

  public async run(message: KlasaMessage): Promise<KlasaMessage | KlasaMessage[] | null> {
    const start = Date.now();
    return await message.sendMessage('🏓 Ping...').then((res) => res.edit(`📡 Pong: ${Date.now() - start}ms`));
  }
}
