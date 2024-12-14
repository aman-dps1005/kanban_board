# Kanban Board

A fully functional Kanban board application built with React, TypeScript, Recoil, and DnD Kit. It supports features like drag-and-drop task management, task creation, search functionality, and responsive design.

## Features

- **Drag-and-Drop**: Move tasks between columns using drag-and-drop powered by DnD Kit.
- **Task Creation**: Add new tasks with a title and description.
- **Search Functionality**: Search tasks by title or description.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **State Management**: Tasks are managed using Recoil state management.
- **LocalStorage Integration**: Tasks persist in the browser’s local storage.

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 16 or later)
- npm or yarn (latest version)

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Project Structure

The project files are organized as follows:

```
├── src/
│   ├── TaskCard.tsx       # Task card component with drag-and-drop functionality
│   ├── Column.tsx         # Column component to group tasks
│   ├── store/
│   │   ├── atoms/
│   │   │   ├── taskAtom.ts    # Recoil atom for task management
│   ├── types.ts           # Type definitions for tasks and columns
│   ├── App.tsx                # Main application file
│   ├── index.css              # Global CSS (integrated with Tailwind)
│   ├── main.tsx               # Application entry point
├── public/                    # Static assets
├── README.md                  # Project documentation
```

## Usage

### Add a Task

1. Click the **+ Add Task** button in the bottom-right corner.
2. Fill out the form with a title and description for the task.
3. Click **Add Task** to create the task in the "To Do" column.

### Drag-and-Drop

1. Drag a task from one column to another.
2. The task will automatically update its status and persist in local storage.

### Search Tasks

1. Use the search bar at the top of the page to filter tasks by title or description.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and better developer experience.
- **Recoil**: For state management.
- **DnD Kit**: For drag-and-drop functionality.
- **Tailwind CSS**: For styling.
- **LocalStorage**: For persisting tasks.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any questions or issues, feel free to reach out at:
- **Name**: Devi Prasad Satapathy
- **Email**: deviprasadsatapathy1005@gmail.com
