# Math League Competition — September 2026

Student competition website using Firebase Firestore.

## Features
- 10-question multiple-choice competition
- Student name + ID registration
- One submission per student ID (client-side duplicate check; for strict server-authoritative enforcement, add a trusted backend/Cloud Function)
- Automatic grading
- Admin dashboard
- Firebase Firestore storage

## Firebase
Project: mlgo-86f79

Enable:
1. Firestore Database
2. Authentication > Sign-in method > Anonymous

Deploy with any static host after uploading these files.

## Important security note
The requested admin password is "faithful". This implementation uses it in the client UI, which is suitable only for a private/temporary competition. A production admin dashboard should use Firebase Authentication or a server-side secret instead of a client-side password.

## Firestore
Use the included firestore.rules file. Because a static client cannot securely enforce uniqueness by student ID, strict one-attempt enforcement across devices requires a trusted backend or authenticated student accounts.
