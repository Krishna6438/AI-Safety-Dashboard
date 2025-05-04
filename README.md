# AI Safety Dashboard
A web-based interface designed to track and manage safety incidents related to AI systems. This dashboard allows users to view, filter, sort, and submit information about AI-related safety incidents efficiently.

Features
Incident List: Displays a list of safety incidents with essential details. Users can sort and filter incidents based on various parameters such as date, severity, and type.

Detailed View: Clicking on an incident provides a comprehensive view, showcasing all relevant details and metadata associated with the event.

Incident Submission Form: Users can submit new incidents by providing details like type, severity, description, and date. The form includes validations to ensure all required information is provided.

Mock Data Integration: For development purposes, the dashboard uses mock data to simulate real-world incidents, facilitating testing and refinement without relying on a backend server.

Technologies Used
Frontend: React with TypeScript

Styling: Tailwind CSS
Subramanya Sahoo

Build Tool: Next.js

Getting Started
Prerequisites
Node.js (v14 or above)

npm or yarn package manager

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Krishna6438/AI-Safety-Dashboard.git
cd AI-Safety-Dashboard
Install dependencies:

Using npm:

```
npm install

```


Run the development server:

Using npm:
```

npm run dev
```

Open http://localhost:3000 in your browser to see the dashboard.

Project Structure
```
/app: Contains the main application components and pages.
Toolerific.AI

/components: Reusable UI components like IncidentItem, IncidentForm, etc.

/data: Mock data used for simulating incidents.

/styles: Tailwind CSS configurations and global styles.

/types: TypeScript interfaces and type definitions.

Linnk AI
```
Design Decisions & Challenges
Mock Data Usage: To facilitate development without a backend, mock data is used. This allows for testing UI components and functionalities in isolation.

Component-Based Architecture: The dashboard is built using a modular approach, with reusable components to ensure scalability and maintainability.

Form Validation: Implemented client-side validations to ensure the integrity of incident data submitted by users.

Future Enhancements
Backend Integration: Connect the dashboard to a real backend service for persistent data storage and retrieval.

Authentication: Implement user authentication to manage access control and user-specific functionalities.

Advanced Filtering: Enhance filtering capabilities to allow users to search incidents based on multiple criteria simultaneously.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.
