# Rotary PU College Website

A modern, responsive website for Rotary PU College built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with animations
- **Gallery**: Interactive photo gallery with fullscreen viewer
- **Admission Forms**: Contact forms with email integration
- **Multi-page**: Home, About, Courses, Admissions, Gallery, Results

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Vercel Serverless Functions (Node.js)
- **Email**: Nodemailer with Gmail
- **Animations**: Framer Motion
- **Maps**: Leaflet with React Leaflet

## 📧 Email Configuration

The admission form uses Gmail to send emails. You'll need:

1. **Gmail Account**: Your Gmail address
2. **App Password**: Generate at https://myaccount.google.com/apppasswords
3. **Environment Variables**: Set in Vercel dashboard

### Environment Variables

Create a `.env.local` file for local development:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

For Vercel deployment, add these in your Vercel project settings under "Environment Variables".

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add `GMAIL_USER` and `GMAIL_PASS`
3. **Deploy**: Vercel will automatically detect and deploy

The API routes in `/api` will be automatically converted to serverless functions.

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
rotory-website/
├── api/                    # Vercel serverless functions
│   └── admission-enquiry.js
├── public/                 # Static assets
│   └── gallery/           # Gallery images
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── assets/           # Images and icons
│   └── icons/            # SVG icons
├── vercel.json           # Vercel configuration
├── .env.example         # Environment variables template
└── package.json
```

## 📧 API Endpoints

- `POST /api/admission-enquiry` - Handle admission form submissions

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## 📝 Notes

- The gallery supports fullscreen viewing with keyboard navigation
- All forms include proper validation and error handling
- The design is fully responsive across all devices
- Email functionality requires Gmail app password for security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to Rotary PU College.
