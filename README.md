🧾 First Class Senior High School — Payment Receipt System
This project is a dynamic web-based payment receipt generator designed for First Class Senior High School. It allows staff to record student payments, automatically calculate arrears, generate printable receipts, and send PDF copies to an email address — all in one seamless workflow.

🌟 Features
🧍 Student Information Form

Student name, class, and new campus/branch dropdown (Afra Odumase, Daban, Edwenase, Takoradi, Accra, Tamale).
Auto-generated unique Receipt Number for each transaction.
💰 Smart Payment Calculation

Automatically computes arrears (Total – Amount Paid) in real-time.
📜 Multi-Selectable Purpose of Payment

Choose one or multiple payment purposes (Admission, Tuition, Books, NOV/DEC classes, etc.).
🧾 Instant Receipt Generation

Generates a detailed, well-formatted receipt in a popup window with all transaction details.
Includes summary table, totals, and school branding.
🖨️ Print & Export

Built-in Print button for physical receipts.
Generate a PDF version of the receipt for emailing.
📧 Email Integration (EmailJS)

Sends the generated PDF receipt directly to a preset email address.
Can easily be configured to send to a student’s or parent’s email.
⚙️ Technologies Used
Type	Technology
Frontend	HTML5, CSS3, JavaScript (ES6)
PDF Generation	jsPDF (v2.5.1)
Email Service	EmailJS API
Icons	Unicode Emojis (no external libraries)
🚀 How It Works
Open the webpage (index.html) in any modern browser.

Fill in all required student payment details:

Student Name
Class
Campus/Branch
Total Amount & Amount Paid
Payment Method, Received By, and Date
Purpose(s) of Payment (you can select multiple)
Click Generate.

A new popup window displays the receipt.
In the popup:

Click 🖨️ Print to print or save manually.
Click 📧 Send Email Receipt to email the PDF version.
📤 EmailJS Setup
To enable email sending, you’ll need a free EmailJS account.

Sign up at emailjs.com.

Create a new service and note down the Service ID.

Create a new email template and note down the Template ID.

In the JavaScript section of your HTML:

emailjs.init("YOUR_PUBLIC_KEY");
await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params);
Replace:

YOUR_PUBLIC_KEY → Your EmailJS public key
YOUR_SERVICE_ID → Your EmailJS service ID
YOUR_TEMPLATE_ID → Your EmailJS template ID
Update the to_email value if you want to send to a different address (e.g., student’s email).

🧩 File Structure
project-folder/
│
├── index.html          # Main webpage (form + scripts + styles)
├── fci logo 1.png      # School logo displayed on receipt
└── README.md           # Project documentation
🎨 Customization
Area	How to Customize
Logo	Replace fci logo 1.png with your preferred logo image.
Colors	Adjust gradient and accent colors in the CSS section.
Email Recipients	Change to_email in the sendEmailWithPDF() function.
Default Year & Contact	Edit under .header section in the HTML.
🧠 Tips
Ensure your browser allows pop-ups for this site.
Test EmailJS integration in sandbox mode first.
For multiple campuses, you can duplicate the HTML form and change default branch values.
📩 Support
For support or further customization: 📧 info@firstclassschools.org 📞 0244406506
