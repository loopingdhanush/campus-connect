# Campus Connect

A college networking website that allows students to showcase their portfolios and projects. Built with Flask, SQLite, and modern web technologies.

## Features

- User authentication (register/login)
- User profiles with college information
- Project portfolio management
- Project showcase with links
- Responsive design
- Modern UI/UX

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd campus-connect
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the application:
```bash
python app.py
```

## Deployment to Render (Free Hosting)

1. Create a GitHub Account:
   - Go to [GitHub](https://github.com)
   - Sign up for a free account
   - Create a new repository
   - Push your code to the repository

2. Create a Render Account:
   - Go to [Render](https://render.com)
   - Sign up using your GitHub account
   - Click "New +" and select "Web Service"

3. Configure Your Web Service:
   - Connect your GitHub repository
   - Fill in the following settings:
     - Name: your-app-name
     - Environment: Python 3
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `gunicorn -c gunicorn_config.py app:app`
   - Add Environment Variables:
     - `SECRET_KEY`: Generate a secure random key
     - `DATABASE_URL`: Will be automatically added by Render

4. Deploy:
   - Click "Create Web Service"
   - Wait for the deployment to complete
   - Your app will be available at: `https://your-app-name.onrender.com`

## Project Structure

```
campus-connect/
├── app.py              # Main application file
├── requirements.txt    # Python dependencies
├── gunicorn_config.py # Gunicorn configuration
├── Procfile           # Process file for deployment
├── static/
│   └── css/
│       └── style.css  # Application styles
└── templates/         # HTML templates
    ├── base.html
    ├── index.html
    ├── login.html
    ├── register.html
    ├── profile.html
    └── add_project.html
```

## Maintenance

To update your deployed application:
1. Push changes to your GitHub repository
2. Render will automatically redeploy your application

## Troubleshooting

If you encounter issues:
1. Check the Render logs in the dashboard
2. Ensure all environment variables are set correctly
3. Verify your database connection
4. Check if all requirements are installed

## License

This project is licensed under the MIT License. 