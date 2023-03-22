let handler = async m => m.reply(`
╭─「 Donasi • All Payment 」
│ • Smartfren [08893729854]
│ • Dana Pay [08893729854]
│ • Saweria [https://saweria.co/FahriXz]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/628893729854
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
