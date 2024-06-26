import type { ChatInputCommandHandler } from '#src/discord/types.js'

import { failure } from '#src/discord-utils.js'

import { createInsight } from '#src/create-insight.js'

const onChatInputCommandInsight: ChatInputCommandHandler = async (options) => {
  const { db, interaction, guildId, userId } = options

  const text = interaction.options.getString('text')
  if (!text) {
    await interaction.reply(failure('You must text for the insight.'))
    return
  }

  const { reply } = await createInsight({
    db,
    guildId,
    userId,
    content: text,
  })
  await interaction.reply(reply)
}

export { onChatInputCommandInsight }
