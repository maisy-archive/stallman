const { IntegrationApplication } = require("discord.js");

module.exports = {
    name: 'test',
    description: 'A simple test command.',
    category: 'test',
    // options: [
    //     {
    //         name: 'bruh',
    //         description: 'bruh',
    //         type: 'STRING',
    //     },
    // ],
    execute: async ( interaction ) => {
        const client = interaction.client;

        // console.log(interaction.options.get('bruh'))
        // const args = interaction.options.get('bruh').value
        // console.log(client.channels.cache.get('858089809444732979'))
        // await interaction.editReply("nice test");
        throw 'This is a test error.'
    },
};