/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber:27738153958','27734318508'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AnshBot Mini', 'Ansh Larsen'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Ansh Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VVXZOiOBT9L3nVGvlSwKquGsRPBEVtW2BrHgIECCDEEFCc8r9vYU/PzMPubC9PIaTOPfecc8N3UJS4QmvUgvF3QChuIEPdkrUEgTGY1FGEKOiDEDIIxuC6lakyIllEuaN943OdjAaulA9GWr4cyVSK6Q7WE9N/42Yv4NEHpPZzHPwB0G7OlS/yRDytFMtBvIYkRURnqFQrjp9ajWqOeturd19m3At4dIgQU1zEM5KgM6IwX6PWhph+jn6lXbZI9+w6TCnDb4mjklKdueSe1Sbj/bDIb7Y9iULqcJ+j7ytNZGjeIc+NU2unuj8UOcH1ULibujTyw706RZalaPU8fqdf4bhA4SpEBcOs/bTuliXdR2jUm7WjcK6bA2t/y07eRUrF5jCSWJQOXt/0ZBltjrvPEW+tGTJWSF37Q8zluHSOviph+Yx6oSv752Mwcaa9GolN6v5O3KYfWcn+j+4zyxRGPOVtwyvfJIKhPzyo3oYjzQ1fp/fNAgusnKt3gf+k7iZV36AvpY4uXQvZqxONTD2lSU7qElfJ3mjrfF9et00y+U13yGr6J5bCYcNN3GlgXchpbul1dcuLk2GdKhVZsLXDwwCmUnw1WKRSQfAyt70Eu63enBJDK+sBO3BnrSA3AlWl57b1ZDI4bZPry7OjDLWrEIz5Rx9QFOOKUchwWXR7otwHMGwOKKCIPdUFkkky/9BTXtU9f0PKvjF9tzedJ8LF5Jbm0fZSxyeDJVkX8QvoA0LLAFUVCpe4YiVtLVRVMEYVGP/1rQ8KdGPvvj2r8X0QYVqxY1GTvIThh6kfH2EQlHXBDm0R6N0CUTDmfm0jxnARV52MdQFpkOAG6QlkFRhHMK/QzwYRRSEYM1qjn0Orl2Gn+3y9M9TNfgn64Pz0A4ddz7ysyKLI8aI65r9WX64dKCTkS4EY6IP8eUgVJHk4EhRZkERRGvNfu+3HT3YdWIgYxHkFxkC3T6shkxazFb6lFrdYaLNY02MN/OrmIxXvst8qfuJFR3fBN+eDRrQyM6jN7+4BRSna9Kqdad/h2ekVE/flH0DAGKTXatc6E2asQ1mTy1E8tRe8ipmdSIKZkWRr3d6uGXGW95qgxipScjMy5WLgw8wrlWwBs2BQ7/YnL2QXo94GobodaLuXrlqIGhyg34tNb8l9vtoHzkVq51fX5fduWpJ4aCJxuvJEngxv6zKMLtvgcoyOqSle2CiibjRMrd5FXiVOE6/ccNA4lbrhTdcc0PkKx+95fc5L/uOews8odT51rxFGz7EvYOfef/n2TrsLF/fo/4bw4xr5l1GcBP5md3L4xYT5wyxe79aGDu/q0RLXYimmEZ3pd0Ug+YBcT+Dx+NYHJIcsKukZjAEsQlriEPQBLesurasiKv9QTNeOq1kc613fOayY9msCXvEZVQyeCRjzsiwI6kgUhfdTNi3JElZJ9xM7ZcNJl+ZWI+TAIPuYJ6B1z9Z5BY+/AZMC/HRqBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Made by Ansh Larsen',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/Ansh-Zubair',
      instagram: 'https://instagram.com/hiezo',
      youtube: 'https://youtube.com/@anshtechie'
    }
};
  
