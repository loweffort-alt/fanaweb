import { createTransport } from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const templateHTML = (to = "Alex", email, phone) => {
  return `
    <div style="max-width: 600px; border: 1px solid #efefef; padding: 16px">
      <div style="margin-bottom: 32px; color: #222">
        <p style="margin-bottom: 16px">Hi, ${to},</p>
        <p style="margin-bottom: 16px">Welcome to my ${email}!</p>
        <p>
          Proident ullamco cillum eu magna dolor Lorem sit elit ad dolore eiusmod aliquip dolor enim. Cupidatat labore velit
          aliquip ullamco aute esse cupidatat nisi quis ullamco. Pariatur aute do quis ex exercitation ullamco enim tempor.
          Culpa veniam do ex velit magna consequat Lorem duis enim anim do.
        </p>
      </div>
      <div style="color: #5f5f5f">
        <p>Footer content goes ${phone} ...</p>
      </div>
    </div>
  `;
};

async function sendEmail(options) {
  const transporter = await getEmailTransporter();
  return new Promise(async (resolve, reject) => {
    const { to, subject, html } = options;
    const from = "New Message From FanaWeb <onboarding@resend.dev>";
    const message = { to, subject, html, from };
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      console.log("Message sent:", info.messageId);
      resolve(info);
    });
  });
}
async function getEmailTransporter() {
  return new Promise((resolve) => {
    const transporter = createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: { user: "resend", pass: "re_jdtCyYfJ_8kPopP97Hf7caPkw8bNtzrem" }
    });
    resolve(transporter);
  });
}

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    console.log(body);
    const { carplate, checkbox, email, phone, username } = body;
    if (!email || !carplate || !username) {
      throw new Error("Missing required fields");
    }
    const html = templateHTML(checkbox, email, phone);
    await sendEmail({ to: email, subject: username, html });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
