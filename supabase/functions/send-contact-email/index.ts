import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  language: "en" | "hr";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, language }: ContactFormData = await req.json();

    console.log("Processing contact form submission:", { name, email, phone: phone || "N/A" });

    // Email to Zvone with Reply-To set to customer's email
    const notificationEmail = resend.emails.send({
      from: "Kalypso Apartment <onboarding@resend.dev>",
      to: ["zvone098@net.hr"],
      replyTo: email, // This allows Zvone to click Reply and respond directly
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            💡 Tip: Click "Reply" to respond directly to ${name} at ${email}
          </p>
        </div>
      `,
    });

    // Confirmation email to customer
    const confirmationMessages = {
      en: {
        subject: "Thank you for contacting Kalypso Apartment",
        greeting: `Dear ${name},`,
        body: `Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.`,
        regards: "Best regards,<br>Kalypso Apartment Team",
      },
      hr: {
        subject: "Hvala što ste nas kontaktirali - Kalypso Apartment",
        greeting: `Poštovani/a ${name},`,
        body: `Hvala što ste nas kontaktirali! Primili smo vašu poruku i javit ćemo vam se u najkraćem mogućem roku.`,
        regards: "Srdačan pozdrav,<br>Kalypso Apartment Tim",
      },
    };

    const msg = confirmationMessages[language];

    const confirmationEmail = resend.emails.send({
      from: "Kalypso Apartment <onboarding@resend.dev>",
      to: [email],
      subject: msg.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">${msg.subject}</h2>
          <p>${msg.greeting}</p>
          <p>${msg.body}</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #666;"><strong>Your message:</strong></p>
            <div style="white-space: pre-wrap;">${message}</div>
          </div>
          <p>${msg.regards}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Kalypso Apartment<br>
            Vrt Jagode Truhelke 1, Osijek, Croatia<br>
            Phone: +385 91 444 6571<br>
            Email: zvone098@net.hr
          </p>
        </div>
      `,
    });

    // Wait for both emails to be sent
    const [notificationResult, confirmationResult] = await Promise.all([
      notificationEmail,
      confirmationEmail,
    ]);

    console.log("Notification email sent:", notificationResult);
    console.log("Confirmation email sent:", confirmationResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    // Handle specific Resend API errors
    if (error.statusCode === 429) {
      return new Response(
        JSON.stringify({ 
          error: "Rate limit exceeded. Please try again later." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (error.statusCode === 402) {
      return new Response(
        JSON.stringify({ 
          error: "Email service payment required. Please contact support." 
        }),
        {
          status: 402,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
