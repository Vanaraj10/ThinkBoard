# ThinkBoard Frontend

A modern, responsive note-taking application built with React, Vite, and Tailwind CSS. ThinkBoard provides an intuitive interface for creating, viewing, editing, and managing notes with a beautiful gradient design.

## 🚀 Features

- **📝 Create Notes**: Easy-to-use note creation interface
- **📋 View Notes**: Grid-based note display with search and filtering
- **✏️ Edit Notes**: In-place note editing capabilities
- **🗑️ Delete Notes**: Quick note deletion with confirmation
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🎨 Modern UI**: Beautiful gradient backgrounds with DaisyUI components
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 Real-time Updates**: Live updates when creating, editing, or deleting notes
- **🚨 Error Handling**: Comprehensive error handling with toast notifications
- **⏱️ Rate Limiting**: Built-in rate limiting protection with user-friendly UI

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.17 + DaisyUI 4.12.24
- **HTTP Client**: Axios 1.9.0
- **Routing**: React Router 7.6.0
- **Icons**: Lucide React 0.511.0
- **Notifications**: React Hot Toast 2.5.2
- **Linting**: ESLint 9.25.0

## 📁 Project Structure

```
frondend/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Notecard.jsx      # Individual note card component
│   │   ├── NotesNotFound.jsx # Empty state component
│   │   └── RateLimitedUi.jsx # Rate limiting UI component
│   ├── lib/                  # Utility libraries and configurations
│   │   ├── axios.js          # Axios configuration and API client
│   │   └── utils.js          # Utility functions (date formatting, etc.)
│   ├── pages/                # Page components
│   │   ├── HomePage.jsx      # Home page with notes grid
│   │   ├── CreatePage.jsx    # Note creation page
│   │   └── NoteDetailPage.jsx # Individual note view/edit page
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🌐 API Endpoints

The frontend communicates with a RESTful API backend running on `http://localhost:5001/api`. Here are the available endpoints:

### Notes API

| Method | Endpoint      | Description                    | Request Body                |
|--------|---------------|--------------------------------|-----------------------------|
| GET    | `/notes`      | Fetch all notes               | None                        |
| GET    | `/notes/:id`  | Fetch a specific note by ID   | None                        |
| POST   | `/notes`      | Create a new note             | `{ title, content }`        |
| PUT    | `/notes/:id`  | Update an existing note       | `{ title, content }`        |
| DELETE | `/notes/:id`  | Delete a note by ID           | None                        |

### API Configuration

The API client is configured in `src/lib/axios.js`:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
})

export default api;
```

## 📊 Note Data Structure

Notes follow this data structure:

```javascript
{
  "_id": "string",           // MongoDB ObjectId
  "title": "string",         // Note title (required)
  "content": "string",       // Note content (required)
  "createdAt": "Date",       // Auto-generated creation timestamp
  "updatedAt": "Date"        // Auto-generated update timestamp
}
```

### Example Note Object:
```json
{
  "_id": "674d1a2b8c9e5f001234567a",
  "title": "My First Note",
  "content": "This is the content of my first note. It can be as long as needed.",
  "createdAt": "2024-12-01T10:30:00.000Z",
  "updatedAt": "2024-12-01T10:30:00.000Z"
}
```

## 🧩 Component Architecture

### Core Components

#### `App.jsx`
- Main application component
- Handles routing using React Router
- Applies global gradient background styling

#### `HomePage.jsx`
- Displays all notes in a responsive grid
- Handles note fetching with loading states
- Manages rate limiting UI display
- Implements error handling with toast notifications

#### `CreatePage.jsx`
- Form-based note creation interface
- Input validation for title and content
- Loading states during creation
- Navigation back to home after successful creation

#### `NoteDetailPage.jsx`
- Individual note viewing and editing
- In-line editing capabilities
- Delete functionality with confirmation

#### `Notecard.jsx`
- Reusable note display component
- Shows title, content preview, and creation date
- Delete button with confirmation
- Responsive card design with hover effects

#### `Navbar.jsx`
- Application navigation header
- Links to home and create pages
- Responsive design

#### Utility Components

- **`NotesNotFound.jsx`**: Empty state when no notes exist
- **`RateLimitedUi.jsx`**: User-friendly rate limiting message

### Utility Functions

#### `lib/utils.js`
```javascript
export function formatDate(date) {
    return date.toLocaleDateString("en-US", {
       month: "short",
       day: "numeric",
       year: "numeric",
    });
}
```

## 🚦 Routes

The application uses React Router for navigation:

- `/` - Home page displaying all notes
- `/create` - Note creation page
- `/notes/:id` - Individual note detail/edit page

## 🎨 Styling

### Design System
- **Primary Color**: `#00FF9D` (Bright Green)
- **Background**: Radial gradient from black to green
- **Component Library**: DaisyUI for consistent styling
- **Layout**: CSS Grid for responsive note layouts
- **Typography**: System fonts optimized for readability

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - `md`: 2-column grid on medium screens
  - `lg`: 3-column grid on large screens
  - Single column on mobile devices

## 🔧 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ThinkBoard/frondend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## ⚠️ Error Handling

The application includes comprehensive error handling:

### API Errors
- **429 Rate Limiting**: Shows rate-limited UI component
- **Network Errors**: Toast notifications for connection issues
- **Validation Errors**: Form validation with user feedback

### User Experience
- Loading states for all async operations
- Confirmation dialogs for destructive actions
- Toast notifications for success/error feedback
- Graceful fallbacks for empty states

## 🔒 Rate Limiting

The application handles API rate limiting gracefully:
- Detects 429 status codes from the backend
- Displays user-friendly rate limiting UI
- Prevents additional API calls when rate limited
- Automatically recovers when rate limit expires

## 🚀 Production Build

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
