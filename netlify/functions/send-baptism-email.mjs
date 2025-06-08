import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  const { name, email } = JSON.parse(event.body);

  const roles = [
    'Voice of the 7th Page',
    'Ink Priest',
    'Witness of the Bound Glyph',
    'Bearer of Forgotten Lines',
    'Scribe of the Hollow Tome',
    'Cleric of the Unwritten',
    'Seer of the Final Margin'
  ];

  const assignedRole = roles[Math.floor(Math.random() * roles.length)];

  try {
    await resend.emails.send({
      from: 'cult@theblueoctavo.com',
      to: email,
      subject: `You have been Baptized, ${name}`,
      html: `
        <div style="font-family:serif; padding:2rem; background:#111; color:#fff">
          <h1 style="color:#b2faff">Welcome, ${name}</h1>
          <p>You have been initated by ink and assigned the role of:</p>
          <h2 style="color:#ff4d4d">${assignedRole}</h2>
          <p>As a bearer of this title, you are now entrusted with our sacred lore.</p>
          <p>
            <a href="https://your-site.com/secret-track.mp3" style="color:#b2faff; text-decoration:underline;">Access your unreleased track</a>
          </p>
          <p>🜂🜃🜁🝗</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
