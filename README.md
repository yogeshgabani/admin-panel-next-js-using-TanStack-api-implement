# Admin Panel with Next.js & TanStack Query

A modern admin panel built with Next.js 14, TanStack Query, and Tailwind CSS.

## Features

- ✅ Next.js 14 with App Router
- ✅ TanStack Query for API state management
- ✅ Authentication (Login/Signup)
- ✅ 401 Unauthorized error handling with auto-redirect
- ✅ Beautiful admin panel UI with sidebar and header
- ✅ Logout functionality
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ React Icons

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard pages
│   │   ├── analytics/
│   │   ├── orders/
│   │   ├── reports/
│   │   ├── settings/
│   │   └── users/
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── components/
│   ├── DashboardLayout.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── Providers.jsx      # TanStack Query & Auth providers
├── context/
│   └── AuthContext.jsx    # Authentication context
├── hooks/
│   ├── useUsers.js        # User API hooks
│   └── useOrders.js       # Order API hooks
└── lib/
    └── apiClient.js       # Axios instance with interceptors
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features Explained

### Authentication

- **Login/Signup pages** with form validation
- **Auth context** for managing user state across the app
- **Protected routes** - automatically redirects to login if not authenticated
- **Token-based authentication** - stores JWT in localStorage

### API Integration

- **TanStack Query** for server state management
- **Axios interceptors** for adding auth tokens to requests
- **401 Error Handling** - automatically redirects to login on unauthorized errors
- **API hooks** in `/hooks` directory for reusable API calls

### Admin Panel UI

- **Sidebar navigation** with active state indication
- **Header** with search, notifications, and user menu
- **Logout functionality** in header dropdown
- **Responsive design** - mobile-friendly with hamburger menu
- **Dashboard pages** for Users, Orders, Analytics, Reports, and Settings

## API Integration

### Example Usage

```javascript
import { useUsers } from '@/hooks/useUsers';

function UsersComponent() {
  const { data: users, isLoading, error } = useUsers();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### API Configuration

Update the API base URL in `lib/apiClient.js`:

```javascript
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  // ...
});
```

Or set the environment variable:

```bash
NEXT_PUBLIC_API_URL=https://your-api.com
```

## Customization

### Colors

Tailwind config in `tailwind.config.js` - customize colors, fonts, etc.

### Sidebar Menu

Edit `components/Sidebar.jsx` to add/remove menu items:

```javascript
const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: FiHome },
  { name: "Users", href: "/dashboard/users", icon: FiUsers },
  // Add more items...
];
```

### API Hooks

Create new hooks in `/hooks` directory following the pattern in `useUsers.js`:

```javascript
export function useYourData() {
  return useQuery({
    queryKey: ["yourData"],
    queryFn: async () => {
      const response = await apiClient.get("/your-endpoint");
      return response.data;
    },
  });
}
```

## Technologies

- **Next.js 14** - React framework
- **TanStack Query** - Server state management
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS
- **React Icons** - Icon library

## License

MIT

