# Payment Receipt System - First Class Senior High School

A comprehensive web-based payment receipt generator and management system for First Class Senior High School. This application allows staff to generate professional payment receipts, automatically save them to Firebase, and provides an admin dashboard for managing all receipts.

## 🚀 Features

### Receipt Generation
- **Professional Receipt Templates** - Generate beautifully formatted payment receipts
- **Multiple Payment Purposes** - Support for various payment types (tuition, hostel, books, etc.)
- **Amount in Words** - Automatic conversion of numeric amounts to text
- **Multiple Branches** - Support for all school campuses (Afra Odumase, Daban, Edwenase, etc.)
- **Program Selection** - All academic programs covered (General Arts, Science, Business, etc.)

### Admin Dashboard
- **Centralized Management** - View all generated receipts in one place
- **Advanced Filtering** - Search by student name, receipt number, branch, or date
- **Bulk Operations** - View and manage multiple receipts efficiently
- **Secure Access** - Role-based authentication for admin users
- **Export Capabilities** - Print or email receipts directly from dashboard

### Technical Features
- **Firebase Integration** - Secure cloud storage for all receipts
- **Email Integration** - Send receipts via email with PDF attachments
- **PDF Generation** - Convert receipts to downloadable PDF format
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Real-time Updates** - Instant synchronization with Firebase database

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Firestore, Authentication)
- **PDF Generation**: jsPDF, html2canvas
- **Email Service**: EmailJS
- **Styling**: Custom CSS with glassmorphism design
- **Icons**: Unicode emojis and symbols

## 📋 Prerequisites

Before running this project, you'll need:

- Firebase account and project
- EmailJS account (for email functionality)
- Modern web browser with JavaScript enabled

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/firstclass-receipt-system.git
   cd firstclass-receipt-system
   ```

2. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Create Firestore Database
   - Update Firebase configuration in `index.html`

3. **Configure EmailJS**
   - Create an EmailJS account
   - Set up email service and template
   - Update EmailJS configuration in `index.html`

4. **Deploy**
   - Upload files to your web server
   - Or run locally using a web server

## 🔧 Configuration

### Firebase Setup
Replace the Firebase config in `index.html`:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### EmailJS Setup
Update EmailJS initialization:
```javascript
emailjs.init("your-emailjs-public-key");
```

## 👥 User Roles

### Staff Users
- Generate payment receipts
- Basic form access
- Print receipts
- Email receipts to school email

### Admin Users
- Full access to all features
- View all receipts
- Search and filter receipts
- Delete receipts
- Manage admin users

## 📱 Usage

### Generating Receipts
1. Fill in student details
2. Select branch and program
3. Enter payment information
4. Choose payment purposes
5. Generate receipt
6. Print or email as needed

### Admin Dashboard
1. Login with admin credentials
2. View all receipts in table format
3. Use search and filters to find specific receipts
4. Click "View" to see receipt details
5. Manage receipts as needed

## 🎨 Design Features

- **Glassmorphism UI** - Modern translucent design with gold accents
- **Responsive Layout** - Adapts to all screen sizes
- **Smooth Animations** - Elegant entrance and hover effects
- **School Branding** - Custom colors and styling matching school identity
- **Professional Typography** - Clean, readable fonts

## 🔒 Security

- Firebase Authentication for user management
- Firestore Security Rules for data protection
- Role-based access control
- Secure email transmission

## 📞 Support

For support or questions:
- Email: info@kingsnethost.com
- Phone: 0244406506 
- Website: www.kingsnethost.com

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏫 About First Class Senior High School

First Class Senior High School is committed to providing quality education across multiple campuses in Ghana. This receipt system helps streamline financial operations and maintain professional records.

---

**Note**: This system is specifically designed for First Class Senior High School's operational needs and may require customization for other institutions.
