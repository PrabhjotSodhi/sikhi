# Full Stack Sikh hymns music player with Next.js 13.4 App Router

This project is a full-stack music player built with Next JS, featuring advanced functionalities and a sleek UI design using Tailwind CSS. It integrates various technologies such as React, Tailwind, Supabase, PostgreSQL, and Stripe for a comprehensive music streaming experience.

## Key Features

### User Experience
- **Sleek Tailwind Design**: Aesthetic and modern UI with responsive design for all devices.
- **Animations and Transitions**: Engaging Tailwind animations and transition effects for a dynamic interface.
- **Advanced Player Component**: An immersive audio experience with a feature-rich music player.

### Functionality
- **Shabad Upload**: Users can upload their own Shabads to the platform.
- **Play Shabad Audio**: Stream music directly from the platform.
- **Favorites System**: Allows users to mark and manage their favorite tracks.
- **Playlists/Liked Shabads System**: Create and manage personal playlists and liked Shabads.

### Authentication and Security
- **Credential Authentication with Supabase**: Secure login and user data management.
- **GitHub & Google Authentication**: Convenient sign-in options with GitHub and Google accounts.

### Data Management
- **File and Image Upload**: Utilized Supabase storage for managing file and image uploads.
- **Client Form Validation**: Robust form handling using react-hook-form.
- **Server Error Handling**: Implement react-toast for efficient server-side error management.

### Payment Integration
- **Stripe Integration**: Facilitate online payments with Stripe.
- **Recurring Payment Integration**: Manage subscriptions with Stripe's recurring payment functionality.

### Backend Operations
- **Route Handlers**: Efficiently manage POST, GET, and DELETE routes.
- **Direct Database Access**: Fetch data in server React components by directly accessing the database.
- **Real-Time Component Relations**: Handle relations between Server and Child components in a real-time environment.
- **Stripe Subscription Cancellation**: Provide users with the option to cancel their Stripe subscriptions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### 1. Clone the repository
```shell
git clone https://github.com/PrabhjotSodhi/sikhi.git
```
### 2. Install NPM packages
```shell
npm install
```
### 3. Setup the .env file
```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```
### 4. Add SQL Tables
Use `database.sql` file, create Shabads and liked_Shabads table
### 4. Run the application
```shell
npm run dev
```

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Prabhjot Sodhi - [sodhiprabhjot23@gmail.com]

Project Link: [https://github.com/your_username/your_project_name](https://github.com/your_username/your_project_name)
