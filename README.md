# EduTrack

EduTrack is a web application that provides a platform for students to manage their educational resources and activities.

## Installation

To install and run EduTrack, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/EduTrack.git
```
2. Navigate to the project directory:
```
cd EduTrack
```
3. Open the `index.html` file in your web browser.

## Usage

EduTrack offers the following features:

- **Home**: The landing page where users can register or log in.
- **Help**: A page that provides contact information for support.
- **Login**: A page where users can log in to their account.
- **Register**: A page where users can create a new account.

Once logged in, users can access the following features:

- **Dashboard**: Displays important notices, timetables, and upcoming assignments.
- **Downloads**: Allows users to download assignment files.
- **Uploads**: Allows users to upload assignment files.
- **Resources**: Provides access to educational resources, including O'Reilly courses and downloadable PDFs.
- **Personal Info**: Allows users to update their personal information, including name, email, and password.
- **Contact**: Provides contact information for the EduTrack team.

## API

EduTrack uses the IndexedDB API to store and retrieve user data. The following API endpoints are available:

- `openDB()`: Opens the IndexedDB database and creates the necessary object stores.
- `login(username, password)`: Retrieves user data from the database and authenticates the user.
- `register(name, surname, username, email, password)`: Adds a new user to the database.
- `updatePersonalInfo(name, surname, email, password)`: Updates the user's personal information in the database.

## Contributing

Contributions to EduTrack are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

EduTrack is licensed under the [MIT License](LICENSE).

## Testing

To test the EduTrack application, you can use the following steps:

1. Open the `index.html` file in your web browser.
2. Test the registration and login functionality by creating a new account and logging in.
3. Verify that the dashboard, downloads, uploads, resources, personal info, and contact pages are working as expected.
4. Test the IndexedDB API by opening the browser's developer tools and inspecting the database.