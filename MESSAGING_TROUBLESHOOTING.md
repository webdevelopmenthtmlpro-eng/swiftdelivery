# Messaging System Troubleshooting Guide

## Quick Debugging Steps

### 1. Check Console Logs (Browser DevTools)

**Open Developer Tools**: F12 or Ctrl+Shift+I

**Look for these logs in Console tab**:

```
⏳ Widget waiting for user data...
🔍 Fetching admin user...
✅ Admin user loaded: {_id, name, email}
📤 Send message attempt: {conversationId, socketConnected, isConnected, adminUserLoaded...}
📨 Sending message via API...
📡 API Response: 201 {success: true, ...}
✅ Message saved to database
```

### 2. Check Backend Logs

**Terminal where backend is running should show**:

```
✅ Token verified for user: [userId]
📨 Message send request: {conversationId, senderId, recipientId, message, isFromAdmin}
✅ Creating message in MongoDB...
✅ Message created: [messageId]
📧 Sending customer message notification to admin@email.com
📤 Sending response...
```

### 3. Test Admin Endpoint

**In browser console, run**:
```javascript
fetch('http://localhost:5000/api/debug/admin')
  .then(r => r.json())
  .then(data => console.log('Admin:', data))
```

**Should return admin user object**

## Common Issues and Fixes

### Issue: Widget Shows "⏳ Loading..." Permanently

**Cause**: User data not passed to widget correctly

**Fix**:
1. Make sure you're logged in as a customer (not admin)
2. Check console for: `⏳ Widget waiting for user data...`
3. If you see it, user object is null - check App.jsx is rendering widget correctly
4. Verify token exists: `localStorage.getItem('token')` in console

### Issue: "Error: Loading user data... Please wait a moment and try again."

**Cause**: Admin user not fetched from backend

**Fix**:
1. Check admin endpoint: Visit `http://localhost:5000/api/debug/admin` in browser
2. Should return admin object with `_id`, `name`, `email`
3. If error, check:
   - Admin user exists in MongoDB
   - Backend is running
   - MongoDB is connected

### Issue: "Error: User not authenticated. Please log in again."

**Cause**: No token in localStorage

**Fix**:
1. Verify you're logged in: Check localStorage for 'token'
2. If token exists but this error appears, token might be invalid
3. Try logout and login again
4. Clear browser cache: Ctrl+Shift+Delete

### Issue: Messages Not Appearing in Admin Dashboard

**Cause**: Socket.io connection issue or wrong recipient ID

**Fix**:
1. Check admin dashboard console for:
   ```
   ✅ Admin connected to messaging server
   📩 New message received
   ```
2. If you don't see "Admin connected", Socket.io failed
3. Check backend console for Socket.io connection logs
4. Try refreshing admin dashboard to reconnect

### Issue: API Response Error 401 or 403

**Cause**: Token verification failed

**Fix**:
1. Check backend logs for: `❌ Token verification failed`
2. Check if JWT_SECRET matches between frontend and backend
3. Verify token format is correct (Bearer [token])
4. Token might have expired - login again

### Issue: API Response 400 "Missing required fields"

**Cause**: Message data not being sent correctly

**Fix**:
1. Check browser console for exactly what was received
2. Verify these exist before sending:
   - `conversationId` (format: `customer-[userId]`)
   - `senderId` (your user ID)
   - `recipientId` (admin user ID)
   - `message` (text)
3. If any missing, check that admin user was fetched

## Testing Checklist

- [ ] Backend running: `npm run dev` (should see "✅ Backend running on port 5000")
- [ ] Frontend running: `npm run dev` (should see Vite server address)
- [ ] Logged in as customer (not admin)
- [ ] Widget visible in top-right (not "Loading...")
- [ ] Token exists: `localStorage.getItem('token')` returns string
- [ ] Admin exists: `http://localhost:5000/api/debug/admin` returns admin object
- [ ] Type message and send
- [ ] Check browser console for "Message sent to admin"
- [ ] Check backend console for message creation logs
- [ ] Check admin dashboard receives message
- [ ] Admin dashboard shows real-time message delivery

## Database Debugging

**Check if message was saved in MongoDB**:

Using MongoDB Compass or CLI:
```javascript
db.directmessages.find({}).pretty()
```

Should see documents with:
- `conversationId` : "customer-..."
- `senderId` : ObjectId
- `recipientId` : ObjectId
- `message` : "hello"
- `isFromAdmin` : false
- `status` : "sent" or "delivered" or "read"

## Email Notification Debugging

**Check if email was "sent"** (console logs):

Backend logs should show:
```
📧 Sending customer message notification to admin@email.com
✅ Admin notification sent to admin@email.com
```

If using console email service (default):
```
📧 Email notification (console):
To: admin@email.com
Subject: 💬 New Message from [Customer Name]
Body: [HTML content]
```

If using SendGrid:
- Requires `SENDGRID_API_KEY` env var
- Requires `EMAIL_FROM` env var
- Check SendGrid dashboard for email delivery status

## Step-by-Step Testing

### 1. Fresh Start Test

```bash
# Terminal 1: Backend
cd swift-delivery-backend
npm run dev

# Terminal 2: Frontend  
cd my-frontend
npm run dev

# Browser: http://localhost:5173
```

### 2. Create Test Account

1. Go to `/register`
2. Create new customer account
3. Login with customer account
4. Should see widget in top-right

### 3. Send Test Message

1. Open browser DevTools (F12)
2. Go to Console tab
3. Open chat widget
4. Type "hello" and send
5. Watch console logs in real-time
6. Message should appear immediately

### 4. Verify Admin Receives

1. Open admin dashboard in another window
2. Go to "Direct Messages" tab
3. Click customer name
4. Message should appear
5. Admin should see email notification (check console)

## Socket.io Debugging

**In browser console**:
```javascript
// Check if socket connected
io.connect()

// Should see
✅ Connected to messaging server

// Check online users on backend
// Backend logs: 👤 User [userId] logged in with socket [socketId]
```

## Quick Commands

**Kill backend**: Ctrl+C in terminal
**Clear localStorage**: `localStorage.clear()` in console
**Check token**: `localStorage.getItem('token')`
**Decode token**: 
```javascript
const token = localStorage.getItem('token');
const decoded = JSON.parse(atob(token.split('.')[1]));
console.log(decoded);
```

## Getting Help

If stuck, provide these details:

1. **Browser console logs** (screenshot)
2. **Backend console logs** (screenshot)  
3. **Network tab - API response** (F12 > Network > XHR)
4. **Admin user exists**: `http://localhost:5000/api/debug/admin`
5. **MongoDB has messages**: Count in collection
6. **Token is valid**: Decode and check `userId` field

## Full Message Flow Checklist

- [ ] Customer logs in
- [ ] Widget appears and loads admin
- [ ] Customer types message
- [ ] `POST /api/messaging/send` succeeds with 201
- [ ] Message saved to MongoDB
- [ ] Email notification sent
- [ ] Socket.io emits to admin
- [ ] Admin sees message in dashboard
- [ ] Admin can reply
- [ ] Customer sees admin message in widget
- [ ] Status indicators work (• ✓ ✓✓)
