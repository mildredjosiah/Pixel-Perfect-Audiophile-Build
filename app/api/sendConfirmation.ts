import { NextRequest, NextResponse } from "next/server";
import Resend from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, orderId, items, total } = await req.json();

  try {
    await resend.emails.send({
      from: "orders@audiophile.com",
      to: email,
      subject: `Order Confirmation #${orderId}`,
      html: `
        <h1>Hello ${name},</h1>
        <p>Thank you for your order!</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <h2>Items:</h2>
        <ul>
          ${items
            .map(
              (item: any) =>
                `<li>${item.name} - ${item.quantity} x ${item.price}</li>`
            )
            .join("")}
        </ul>
        <p><strong>Total:</strong> ${total}</p>
        <p>Your order will be shipped to your address.</p>
        <p>Need help? Contact support@audiophile.com</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false });
  }
}
