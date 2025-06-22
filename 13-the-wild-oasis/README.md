# 🏨 The Wild Oasis

A modern, full-featured hotel management system built with React and Supabase. This application provides a comprehensive solution for managing hotel operations including cabin management, booking systems, guest check-in/check-out processes, and business analytics.

## 🚀 Features

### 🏠 **Cabin Management**
- View, add, edit, and delete hotel cabins
- Upload and manage cabin images
- Set pricing, capacity, and discount information
- Filter cabins by discount status
- Sort cabins by various criteria (name, capacity, price)

### 📅 **Booking System**
- Comprehensive booking management interface
- View detailed booking information
- Track booking status and payment details
- Guest information management
- Booking history and analytics

### 🔐 **Authentication & User Management**
- Secure user authentication with Supabase Auth
- User registration and login
- Protected routes for authenticated users
- User profile management
- Password update functionality
- User avatar support

### 🏃‍♂️ **Check-in/Check-out**
- Streamlined guest check-in process
- Quick checkout functionality
- Today's activity overview
- Real-time status updates
- Payment confirmation during check-in

### 📊 **Dashboard & Analytics**
- Comprehensive business dashboard
- Key performance statistics
- Sales charts and revenue tracking
- Booking duration analysis
- Today's activity summary
- Occupancy rate tracking

### ⚙️ **Settings Management**
- Hotel-wide settings configuration
- Breakfast pricing management
- Maximum booking length settings
- Minimum/maximum guests per booking

### 🎨 **UI/UX Features**
- Dark/Light mode toggle
- Responsive design for all devices
- Modern, clean interface
- Loading states and error handling
- Toast notifications for user feedback
- Confirmation dialogs for destructive actions

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM 6** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **React Hook Form** - Efficient form handling
- **React Query (@tanstack/react-query)** - Server state management and caching

### **Backend & Database**
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication
  - File storage
  - Row Level Security (RLS)

### **State Management & Data Fetching**
- **React Query** - Server state management, caching, and synchronization
- **React Context** - Client state management (Dark mode)
- **Custom hooks** - Reusable stateful logic

### **UI & Styling**
- **Styled Components** - Component-level styling
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **Recharts** - Data visualization and charts

### **Development Tools**
- **ESLint** - Code linting
- **Vite Plugin ESLint** - Linting integration with Vite
- **React Query Devtools** - Development debugging tools

### **Utilities & Helpers**
- **date-fns** - Date manipulation and formatting
- **React Error Boundary** - Error handling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account

### 1. Clone the Repository
```bash
git clone <repository-url>
cd the-wild-oasis
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and configure your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
1. Create a new Supabase project
2. Set up the database schema (tables for cabins, bookings, guests, settings)
3. Configure Row Level Security (RLS) policies
4. Set up authentication

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── context/                 # React Context providers
│   └── DarkModeContext.jsx # Dark mode state management
├── data/                   # Static data and sample data
│   ├── cabins/            # Cabin images
│   ├── img/               # Other images
│   └── Uploader.jsx       # Data upload utility
├── features/              # Feature-based organization
│   ├── authentication/    # User auth components and hooks
│   ├── bookings/         # Booking management
│   ├── cabins/           # Cabin management
│   ├── check-in-out/     # Check-in/out processes
│   ├── dashboard/        # Dashboard and analytics
│   └── settings/         # Application settings
├── hooks/                # Custom reusable hooks
├── pages/                # Page components (route components)
├── services/             # API integration layer
│   ├── apiAuth.js        # Authentication API
│   ├── apiBookings.js    # Bookings API
│   ├── apiCabins.js      # Cabins API
│   ├── apiSettings.js    # Settings API
│   └── supabase.js       # Supabase client configuration
├── styles/               # Global styles and themes
├── ui/                   # Reusable UI components
├── utils/                # Utility functions and helpers
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

The project includes a `netlify.toml` configuration file for easy deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set up environment variables on your hosting platform

## 🎯 Key Features in Detail

### Dashboard Analytics
- **Statistics Overview**: Total bookings, sales, check-ins, and occupancy rate
- **Sales Chart**: Revenue tracking over selected time periods
- **Duration Chart**: Booking length distribution analysis
- **Today's Activity**: Real-time check-in/check-out activities

### Booking Management
- **Comprehensive View**: All booking details in organized tables
- **Status Tracking**: Unconfirmed, checked-in, checked-out status
- **Guest Information**: Complete guest profiles and contact details
- **Payment Tracking**: Payment status and amounts

### Cabin Operations
- **Visual Management**: Image uploads and cabin photo galleries
- **Pricing Control**: Base prices, discounts, and special offers
- **Capacity Management**: Guest limits and accommodation details
- **Availability Tracking**: Real-time cabin availability

## 🔒 Security Features

- **Authentication Required**: All routes protected except login/signup
- **Row Level Security**: Database-level security with Supabase RLS
- **Secure File Upload**: Image upload with validation
- **Protected API Endpoints**: Server-side security with Supabase

## 🎨 Design System

The application features a consistent design system with:
- **Color Scheme**: Customizable light/dark themes
- **Typography**: Consistent text styles and hierarchies
- **Spacing**: Standardized margins and padding
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email [your-email] or create an issue in the GitHub repository.

---

**Built with ❤️ using React, Supabase, and modern web technologies**
