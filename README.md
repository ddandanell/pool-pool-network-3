# Bali Pool Pros - Pool Service Website

[![CI](https://github.com/ddandanell/pool-pool-network-3/actions/workflows/ci.yml/badge.svg)](https://github.com/ddandanell/pool-pool-network-3/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Bali's premier pool service company website - Expert pool maintenance, repair, leak detection, and installation services.

## 🌊 About

This is the official website for Bali Pool Pros, a leading pool service provider in Bali, Indonesia. The site provides information about pool maintenance, repair, and installation services, along with booking and contact functionality.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Routing**: Wouter
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- PostgreSQL database (for backend features)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ddandanell/pool-pool-network-3.git
cd pool-pool-network-3
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/pooldb
NODE_ENV=development
SESSION_SECRET=your-session-secret-here
```

## 🏃 Running the Application

### Development Mode

Start the client development server:
```bash
npm run dev:client
```

Start the backend server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Production Build

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🧪 Testing & Quality

### Type Checking
```bash
npm run check
```

### Database Management
```bash
npm run db:push
```

## 📦 Project Structure

```
pool-pool-network-3/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility libraries
│   ├── public/            # Static assets
│   └── index.html         # HTML entry point
├── server/                # Backend Express server
├── shared/                # Shared types and utilities
├── script/                # Build and utility scripts
├── .github/               # GitHub Actions workflows
└── vercel.json           # Vercel deployment configuration
```

## 🌐 Deployment

This application is configured for seamless deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Vercel

Make sure to set these in your Vercel project settings:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret for session management
- `NODE_ENV` - Set to `production`

## 🔒 Security

- All dependencies are regularly audited for vulnerabilities
- Security headers configured in `vercel.json`
- Session management with secure cookies
- Input validation with Zod
- SQL injection protection via Drizzle ORM

## 📝 SEO

- Complete sitemap.xml for all pages
- robots.txt configured for search engines
- Open Graph and Twitter Card meta tags
- JSON-LD structured data for local business
- Optimized meta descriptions and titles
- Mobile-responsive design

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [https://balipoolpros.com](https://balipoolpros.com)
- **WhatsApp**: +62 823-2301-1656
- **Email**: support@poolrepairlab.com
- **Location**: Jl. Raya Ubud No. 45, Gianyar, Bali 80571, Indonesia

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Designed specifically for Bali's tropical climate pool service needs
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---

© 2026 Bali Pool Pros. All rights reserved.
