# Airline Management Web Application

A Flask-based web application for managing airline data, including users, user roles, and comprehensive search functionality. This project demonstrates database integration, user authentication, and CRUD operations in a web environment.

## Features

- **User Authentication**: Login/logout functionality with session management
- **User Management**: 
  - View all users and individual user profiles
  - Add new users with form validation
  - Edit and update existing user information
  - Delete users with confirmation
  - Search users by various criteria
- **Reporting**: 
  - Consolidated user reports with role information
  - User statistics and analytics
- **Responsive Design**: Bootstrap-based UI with mobile-friendly design
- **Database Integration**: PostgreSQL database with comprehensive data management

## Technology Stack

- **Backend**: Python Flask
- **Database**: PostgreSQL
- **Frontend**: HTML5, CSS3, Bootstrap 4
- **JavaScript**: jQuery for enhanced interactivity
- **Configuration**: INI-based configuration management

## Aircraft Database Operations & Queries

This project demonstrates a range of SQL queries and operations for managing aircraft data:

- **List Aircraft**: Retrieve all aircraft records, with dynamic sorting by any column (ID, ICAO code, registration, manufacturer, model, etc.).
- **Get Aircraft by ID**: Fetch detailed information for a specific aircraft using its unique ID.
- **Add Aircraft**: Insert new aircraft records into the database, including all relevant fields.
- **Update Aircraft**: Modify existing aircraft details by ID, supporting updates to any attribute.
- **Delete Aircraft**: Remove aircraft records from the system using their ID.
- **Search Aircraft**: Flexible search functionality allowing filtering by multiple criteria (ID, ICAO code, registration, manufacturer, model) using partial matches.
- **Aircraft Statistics**: Generate summary reports, such as counting aircraft by manufacturer.
- **Compare Aircraft**: Retrieve and display side-by-side comparisons of two aircraft based on their attributes.

These queries are implemented using parameterized SQL for security and reliability, and are accessible via the web interface for both admin and general users.

## Project Structure

```
airline-webapp/
├── web_app.py              # Main application entry point
├── routes.py               # Flask routes and application logic
├── database.py             # Database connection and operations
├── config.ini.example      # Configuration template
├── requirements.txt        # Python dependencies
├── static/
│   ├── css/
│   │   ├── bootstrap.css   # Bootstrap framework
│   │   └── main.css        # Custom styles
│   └── js/
│       ├── jquery-3.0.0.min.js
│       └── bootstrap.min.js
├── templates/              # Jinja2 HTML templates
│   ├── top.html           # Header template
│   ├── end.html           # Footer template
│   ├── index.html         # Login page
│   ├── welcome.html       # Dashboard
│   ├── add_user.html      # Add user form
│   ├── search_users.html  # User search interface
│   └── list_*.html        # Various listing pages
└── README.md
```

## Setup Instructions

### Prerequisites
- Python 3.7+
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd airline-webapp
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Database Setup**
   - Create a PostgreSQL database
   - Load the airline schema into your database
   - Update the database credentials in `config.ini`

4. **Configuration**
   - Copy `config.ini.example` to `config.ini`
   - Update the database connection details:
   ```ini
   [DATABASE]
   database = your_database_name
   host = your_host
   user = your_username
   password = your_password
   port = 5432

   [FLASK]
   port = 10563
   ```

5. **Run the application**
   ```bash
   python web_app.py
   ```

6. **Access the application**
   - Local: http://127.0.0.1:10563/
   - Server: http://your-server:10563/

## Usage

### Authentication
- Use the credentials from your database schema to log in
- Session management maintains user state across requests

### User Management
- **View Users**: Browse all users in the system
- **Add Users**: Create new user accounts with role assignment
- **Edit Users**: Modify existing user information
- **Search Users**: Find users by various criteria (name, ID, etc.)
- **Delete Users**: Remove users from the system

### Reports
- **Consolidated View**: See users with their associated role information
- **Statistics**: View user distribution by roles and other metrics

## Database Schema

The application expects a PostgreSQL database with the following key tables:
- `users`: User account information
- `userroles`: User role definitions
- Additional tables for airline-specific data

## Configuration

The application uses an INI-based configuration system:
- **Database settings**: Connection parameters for PostgreSQL
- **Flask settings**: Port configuration and application settings

## Security Features

- Session-based authentication
- SQL injection prevention through parameterized queries
- Input validation and sanitization
- Admin role checking for sensitive operations


## Development Notes

- The application uses Flask's debug mode for development
- Bootstrap 4 provides responsive design components
- jQuery enhances form interactions and user experience
- Database operations are centralized in `database.py` for maintainability

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify database credentials in `config.ini`
   - Ensure PostgreSQL service is running
   - Check network connectivity to database host

2. **Port Already in Use**
   - Change the port number in `config.ini`
   - Kill any existing processes using the port

3. **Module Import Errors**
   - Ensure all dependencies are installed: `pip install -r requirements.txt`
   - Check Python version compatibility

### Database Setup
- Ensure the airline schema is properly loaded
- Verify table structures match the application expectations
- Check that sample data is available for testing

## Future Enhancements

- Add pagination for large user lists
- Implement advanced search filters
- Add data export functionality
- Enhance error handling and user feedback
- Add API endpoints for external integration

---

**Note**: This is an educational project demonstrating web application development with Flask and database integration. The application includes sample data for demonstration purposes.