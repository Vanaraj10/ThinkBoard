# 📝 ThinkBoard

A modern, full-stack note-taking application that combines the power of Spring Boot backend with a beautiful React frontend. ThinkBoard provides an intuitive interface for creating, viewing, editing, and managing notes with real-time updates and a stunning gradient design.

## 🚀 Features

- **📝 Create Notes**: Easy-to-use note creation interface with rich text support
- **📋 View Notes**: Grid-based note display with search and filtering capabilities  
- **✏️ Edit Notes**: In-place note editing with real-time updates
- **🗑️ Delete Notes**: Quick note deletion with confirmation dialogs
- **📱 Responsive Design**: Mobile-first design that works seamlessly on all devices
- **🎨 Modern UI**: Beautiful gradient backgrounds with DaisyUI components
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 Real-time Updates**: Live updates when creating, editing, or deleting notes
- **🚨 Error Handling**: Comprehensive error handling with toast notifications
- **⏱️ Rate Limiting**: Built-in rate limiting protection with user-friendly UI
- **🛡️ CORS Support**: Properly configured Cross-Origin Resource Sharing
- **📊 RESTful API**: Clean REST API design with proper HTTP status codes

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.17 + DaisyUI 4.12.24
- **HTTP Client**: Axios 1.9.0
- **Routing**: React Router 7.6.0
- **Icons**: Lucide React 0.511.0
- **Notifications**: React Hot Toast 2.5.2
- **Linting**: ESLint 9.25.0

### Backend
- **Framework**: Spring Boot 3.3.12
- **Language**: Java 17
- **Database**: MongoDB
- **Build Tool**: Maven
- **Testing**: Spring Boot Test

## 📁 Project Structure

```
ThinkBoard/
├── backend/                           # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/thinkboard/backend/
│   │   │   │   ├── BackendApplication.java     # Main Spring Boot application
│   │   │   │   ├── controller/
│   │   │   │   │   └── NoteController.java     # REST API endpoints
│   │   │   │   ├── model/
│   │   │   │   │   └── Note.java               # Note entity model
│   │   │   │   ├── repository/
│   │   │   │   │   └── NoteRepository.java     # MongoDB repository
│   │   │   │   └── service/
│   │   │   │       └── NoteService.java        # Business logic layer
│   │   │   └── resources/
│   │   │       └── application.properties      # Application configuration
│   │   └── test/
│   │       └── java/com/thinkboard/backend/
│   │           └── BackendApplicationTests.java
│   ├── pom.xml                        # Maven dependencies
│   ├── mvnw                           # Maven wrapper (Unix)
│   └── mvnw.cmd                       # Maven wrapper (Windows)
│
├── frondend/                          # React frontend (note: directory name as-is)
│   ├── src/
│   │   ├── components/                # Reusable React components
│   │   │   ├── Navbar.jsx            # Navigation bar component
│   │   │   ├── Notecard.jsx          # Individual note card component
│   │   │   ├── NotesNotFound.jsx     # Empty state component
│   │   │   └── RateLimitedUi.jsx     # Rate limiting UI component
│   │   ├── lib/                      # Utility libraries and configurations
│   │   │   ├── axios.js              # Axios configuration and API client
│   │   │   └── utils.js              # Utility functions (date formatting, etc.)
│   │   ├── pages/                    # Page components
│   │   │   ├── HomePage.jsx          # Home page with notes grid
│   │   │   ├── CreatePage.jsx        # Note creation page
│   │   │   └── NoteDetailPage.jsx    # Individual note view/edit page
│   │   ├── App.jsx                   # Main app component with routing
│   │   ├── main.jsx                  # Application entry point
│   │   └── index.css                 # Global styles and Tailwind imports
│   ├── package.json                  # Node.js dependencies and scripts
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── eslint.config.js              # ESLint configuration
│   └── index.html                    # HTML template
│
├── .gitignore                         # Git ignore rules
└── README.md                          # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- **Java 17** or higher
- **Node.js 18** or higher
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### 🖥️ Backend Setup (Spring Boot)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Configure MongoDB:**
   - Update `src/main/resources/application.properties` with your MongoDB connection string
   - Default configuration assumes MongoDB running on `localhost:27017`

3. **Install dependencies and run:**
   ```bash
   # Windows
   ./mvnw.cmd spring-boot:run
   
   # Unix/Mac/Linux
   ./mvnw spring-boot:run
   ```

4. **Verify backend is running:**
   - Backend will start on `http://localhost:8080`
   - Test API: `GET http://localhost:8080/api/notes`

### 🎨 Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```bash
   cd frondend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Frontend will start on `http://localhost:5173`
   - The app will automatically connect to the backend API

## 🔧 Available Scripts

### Backend (Maven)
```bash
./mvnw spring-boot:run    # Start the backend server
./mvnw test              # Run backend tests
./mvnw clean install    # Build the project
```

### Frontend (npm)
```bash
npm run dev             # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Run ESLint
```

## 🌐 API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/notes` - Retrieve all notes
- `GET /api/notes/{id}` - Retrieve a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/{id}` - Update an existing note
- `DELETE /api/notes/{id}` - Delete a note

### Example API Usage

```javascript
// Create a new note
POST /api/notes
{
  "title": "My First Note",
  "content": "This is the content of my note."
}

// Response
{
  "id": "64f8a2b3c1d2e3f4a5b6c7d8",
  "title": "My First Note",
  "content": "This is the content of my note.",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## 🎨 Features Showcase

### 📝 Note Creation
- Clean, intuitive interface for creating new notes
- Real-time validation and feedback
- Auto-save functionality

### 📋 Note Management
- Grid layout with responsive design
- Search and filter capabilities
- Quick actions (edit, delete, view)

### ✏️ Note Editing
- In-place editing with live preview
- Markdown support (future enhancement)
- Auto-save with conflict resolution

### 🎯 User Experience
- Loading states and error handling
- Toast notifications for user feedback
- Rate limiting protection
- Mobile-optimized interface

## 🤝 Contributing

This project was created for learning purposes. If you'd like to contribute or learn from it:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

This project demonstrates several key concepts:

- **Full-stack development** with React and Spring Boot
- **RESTful API design** and implementation
- **MongoDB integration** with Spring Data
- **Modern React patterns** (hooks, routing, state management)
- **Responsive design** with Tailwind CSS
- **Build tools** (Vite, Maven)
- **CORS configuration** for cross-origin requests

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Rich text editor with markdown support
- [ ] Note categories and tags
- [ ] Search functionality
- [ ] Note sharing capabilities
- [ ] Dark/light theme toggle
- [ ] Offline support with PWA
- [ ] Export notes to PDF/HTML
- [ ] Real-time collaboration
- [ ] Note versioning and history

## 📄 License

This project is created for educational purposes. Feel free to use it as a reference for your learning journey.

## 🙋‍♂️ Support

If you have any questions or run into issues:

1. Check the project structure and ensure all dependencies are installed
2. Verify MongoDB is running and accessible
3. Check that both frontend and backend are running on the correct ports
4. Review the browser console and backend logs for error messages

---

**Happy Coding! 🚀**

*Built with ❤️ for learning full-stack development*
