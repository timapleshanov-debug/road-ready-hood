import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderRequest {
  fullName: string;
  phone: string;
  city: string;
  filmOption: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, phone, city, filmOption }: OrderRequest = await req.json();

    // Validate required fields
    if (!fullName || !phone || !city || !filmOption) {
      throw new Error("Заполните все обязательные поля");
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Витур <onboarding@resend.dev>",
        to: ["vlad-pu@mail.ru"],
        subject: `Новая заявка на плёнку: ${filmOption}`,
        html: `
          <h1>Новая заявка с сайта</h1>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">ФИО:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Телефон:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Город:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Комплект:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${filmOption}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666;">Отправлено с сайта Витур</p>
        `,
      }),
    });

    const result = await emailResponse.json();
    console.log("Order email sent successfully:", result);

    if (!emailResponse.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
