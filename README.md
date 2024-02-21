# Project Title

workZen

## Overview

workZen is a platform tailored for effortless event coordination, catering to individuals planning simple gatherings like birthdays, bridal showers, work get-togethers, and picnics. It offers intuitive tools for organizing events seamlessly, ensuring hassle-free planning and memorable experiences for all participants.

### Problem

Event management companies struggle to efficiently coordinate and manage the many tasks involved in planning and executing events. Without a centralized platform, they face challenges in tracking project statuses, communicating with teams, and ensuring timely completion of tasks. This leads to disorganization, missed deadlines, and potential client dissatisfaction. Thus, there is a pressing need for an admin application to streamline processes, enhance collaboration, and deliver successful events seamlessly.

### User Profile

- Event Managers:
- Seeking to manage ongoing projects efficiently
- Reviewing submissions for event planning
- Tracking project statuses and deadlines
- Ensuring successful event delivery

### Features

- Homepage
- As a user, I want to see a list of ongoing projects so that I can stay updated on current activities within the organization.
- As a user, I want to review department submissions to provide feedback and ensure tasks are progressing smoothly.
- As a user, I want to access analytics data to monitor the performance and trends of our projects and departments.

- Projects/Events
- As a user, I want to view all projects and events to have a comprehensive overview of our upcoming activities.
- As a user, I want to check the status of projects to track their progress and ensure they are on schedule.
- As a user, I want to see due dates for projects/events to prioritize my tasks and meet deadlines.

- Reviews
- As a user, I want to see a list of department submissions awaiting review so that I can provide timely feedback.
- As a user, I want to review department submissions to ensure they meet our quality standards and requirements.
- As a user, I want to mark submissions as completed or pending to keep track of my review tasks.

- Logout
- As a user, I want to log out of the application securely to protect my account and data.
- As a user, I want to easily find the logout option to end my session when I'm done using the dashboard.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - react-hooks
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- User Registration/ Log in Form
- Home
- Projects/Events
- Reviews
- Logout

### Mockups

#### Data

![](database-schema.png)

### Endpoints

- Events Endpoints

**GET /events**

- Retrieves all projects.
  Response:

```
[
    {

  "event_id": 1,
  "event_name": "Birthday Party",
  "client_name": "Lois Pearson",
  "status": "Ongoing",
  "due_date": "2024-03-15",
  "location": "Central Park",
  "budget": "$1500",
  "attendance": 50

 },
 ...
 ]
```

**GET /events/:id**

Retrieves a specific event by ID.
Response:

```
{
  "event_id": 1,
  "event_name": "Birthday Party",
  "client_name": "John Doe",
  "status": "Ongoing",
  "due_date": "2024-03-15",
  "location": "Location A",
  "budget": "$1500",
  "attendance": 50
}
```

**POST /events**

Creates a new event.
Request:

```
{
  "event_name": "Anniversary Celebration",
  "client_name": "Alice Smith",
  "status": "Scheduled",
  "due_date": "2024-07-10",
  "location": "Location C",
  "budget": "$2500",
  "attendance": 40
}
```

**PUT /events/:id**

Updates an existing event by ID.
Request:

```
{
  "event_name": "Birthday Bash",
  "status": "Completed"
}
```

**DELETE /events/:id**

Deletes an event by ID.
Response:

```
{
  "message": "Event deleted successfully"
}
```

Submissions Endpoints
**GET /events/:event_id/submissions**

Retrieves all submissions for a specific event.
Response:

```
[
  {
    "submission_id": 1,
    "submission_text": "Proposal for birthday party decorations",
    "submission_status": "Pending",
    "feedback": "Approved",
    "review_status": "Completed"
  },
  {
    "submission_id": 2,
    "submission_text": "Catering menu options for bridal shower",
    "submission_status": "In Review",
    "feedback": "Pending",
    "review_status": "In Progress"
  }
]
```

**GET /events/:event_id/submissions**

Retrieves all submissions for a specific event.
Response:

```
[
  {
    "submission_id": 1,
    "submission_text": "Proposal for birthday party decorations",
    "submission_status": "Pending",
    "feedback": "Approved",
    "review_status": "Completed"
  },
  {
    "submission_id": 2,
    "submission_text": "Catering menu options for bridal shower",
    "submission_status": "In Review",
    "feedback": "Pending",
    "review_status": "In Progress"
  }
]
```

**GET /events/:event_id/submissions/:submission_id**

Retrieves a specific submission for a specific event by ID.
Response:

```
{
  "submission_id": 1,
  "submission_text": "Proposal for birthday party decorations",
  "submission_status": "Pending",
  "feedback": "Approved",
  "review_status": "Completed"
}
```

**PUT /events/:event_id/submissions/:submission_id**

Updates an existing submission for a specific event by ID.
Request:

```
{
  "submission_text": "Revised menu suggestions for birthday party",
  "submission_status": "In Review"
}
```

User Registration Endpoints
**POST /user/register**

- Add a user account

Parameters:

- username
- email: User's email
- password: User's provided password

Response:

```
{

  "message": "User registered successfully"

}
```

**POST /user/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

}
```

**POST /user/logout**

- Logout a user

Response:

```
{
  "message": "User logged out successfully"
}
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Feature: Registration Form

  - New users register for an account or existing users log in.
  - Authentication and authorization process.
  - Upon successful login, users are redirected to the dashboard homepage.

  - Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Feature: Home page

  - View a list of ongoing projects.
  - Access project details such as name, status, and progress.
  - Review Departments Submissions
  - View analytics data such as revenue trends, project completion rates.

- Feature: Project

  - View a comprehensive list of all projects/events.
  - Access project details, including status and due date.

- Feature: Review

  - View a comprehensive list of all department submission.
  - Mark submissions as completed or pending based on review status.

- Feature: Logout

  - Log out of the admin dashboard securely.
  - Clear session data and authentication tokens.
  - Redirect users to the login page.

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Click on a project to view more details.
- Provide feedback or comments on each submission.
- Create a new event/project.
