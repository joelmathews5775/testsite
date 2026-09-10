/**
 * DRAFTED UX — configuration
 *
 * GOOGLE SIGN-IN SETUP (takes about 2 minutes, no backend required):
 *   1. Go to https://console.cloud.google.com/apis/credentials
 *   2. Create a project (or pick an existing one).
 *   3. Click "Create credentials" -> "OAuth client ID".
 *   4. Application type: "Web application".
 *   5. Under "Authorized JavaScript origins", add the exact origin
 *      you're serving this site from, e.g.:
 *        http://localhost:5500
 *        https://your-deployed-domain.com
 *      (No path, no trailing slash.)
 *   6. Copy the generated Client ID (it ends in .apps.googleusercontent.com)
 *      and paste it below, replacing the placeholder string.
 *
 * This value is not a secret — Client IDs are meant to be public and
 * are safe to ship in front-end code. Until you replace the placeholder,
 * the "Continue with Google" button will stay hidden and email/password
 * sign-in still works normally.
 */
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
