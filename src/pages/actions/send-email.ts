import type { APIRoute } from "astro";
import { templateHTML } from "@/utils/emailTemplate";
import { sendEmail } from "@/utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    // Get the form data submitted by the user on the home page
    const body = await request.json();
    const { carplate, checkbox, email, phone, username } = body

    // Throw an error if we're missing any of the needed fields.
    if (!email || !carplate || !username) {
      throw new Error("Missing required fields");
    }

    const html = templateHTML(checkbox, email, phone)
    await sendEmail({ to: email, subject: username, html });

    // Redirect the user to a success page after the email is sent.
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })

  } catch (error) {
    throw new Error("Failed to send email");
  }
};
