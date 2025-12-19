# 🚀 Chatbot Activation Guide

## Issue Resolved

The autonomous features weren't working because:
- ❌ Frontend was using **Firebase tokens**
- ❌ Backend was using **custom JWT tokens**
- ❌ MongoDB session creation was failing due to auth mismatch
- ❌ Customer name wasn't being passed to backend

## ✅ What We Fixed

1. **Firebase Authentication Integration**
   - Backend now verifies Firebase ID tokens
   - `verifyFirebaseToken` middleware replaces custom JWT
   - Email-based session lookup instead of MongoDB ObjectId

2. **Customer Context Connection**
   - Backend receives customer displayName
   - MongoDB stores email field for session tracking
   - Frontend passes auth tokens correctly

3. **Autonomous Action Flow**
   - NLU detects tracking phrases + IDs
   - Enhanced confidence scoring (0.98-0.99)
   - Actions execute and save to MongoDB

---

## 🔧 Setup Steps

### Step 1: Ensure Backend is Running

```bash
cd swift-delivery-backend
npm run dev
```

**Expected Output:**
```
✅ Connected to MongoDB Atlas
✅ Firebase Admin initialized
✅ Backend running on port 5000
```

### Step 2: Verify MongoDB Connection

In backend logs, you should see:
```
✅ Connected to MongoDB Atlas
```

If not:
- Check `.env` has `MONGO_URI`
- Verify IP whitelist on MongoDB Atlas
- Check network connectivity

### Step 3: Test Authentication Flow

Open browser console when chatbot loads:

```javascript
// Check if user is authenticated
firebase.auth().currentUser
// Should return user object with email and uid

// Check if token is available
firebase.auth().currentUser.getIdToken()
// Should return a valid JWT token
```

### Step 4: Monitor Network Calls

In browser DevTools → Network tab:

**Expected Calls:**
1. `POST /api/chatbot/session/create` → Status 200
2. `POST /api/chatbot/message/save` → Status 200
3. `POST /api/chatbot/tracking/save` → Status 200

If any fails:
- Check response error message
- Verify token in Authorization header
- Check backend console for errors

---

## 🧪 Testing Autonomous Tracking

### Test Case 1: Customer Name Recognition

**What to do:**
1. Open chatbot
2. Look for greeting message

**Expected:**
```
👋 Welcome [Your Name]! How can I help you today?
```

**If not working:**
- Check browser console for errors
- Verify Firebase user has displayName or email
- Check backend logs for session creation errors

---

### Test Case 2: Autonomous Tracking with ID

**What to do:**
```
Type: "Track SWIFT-1764838531166-A36MZ"
```

**Expected Flow:**
1. NLU processes message
2. Tracking ID detected (confidence: 0.99)
3. Intent: TRACK_BY_ID
4. Actions generated:
   - NAVIGATE_TO_TRACKING
   - AUTO_FILL_TRACKING_FORM
   - AUTONOMOUS_TRACKING
5. Page navigates to tracking section
6. Form auto-fills with tracking ID
7. Search triggers automatically
8. Message saved to MongoDB

**Browser Console Should Show:**
```
🧠 Enhanced NLU Result: {
  intent: "track_by_id",
  confidence: 0.99,
  entities: { trackingIds: ["SWIFT-1764838531166-A36MZ"] }
}
🤖 Executing autonomous actions: [
  { type: "AUTONOMOUS_TRACKING", ... },
  { type: "NAVIGATE_TO_TRACKING", ... }
]
✅ Session initialized for [Your Name]
✅ Tracking history saved for SWIFT-1764838531166-A36MZ
```

**If not working:**
- Check NLU result confidence
- Verify tracking ID is extracted
- Check if navigation element exists
- Verify autonomous action executor is initialized

---

### Test Case 3: Tracking ID Variations

Try these - ALL should trigger autonomous tracking:

```
1. "Track SWIFT-1764838531166-A36MZ"
   → Confidence: 0.99 (phrase + ID)

2. "SWIFT-1764838531166-A36MZ"
   → Confidence: 0.98 (ID alone)

3. "Where is SWIFT-1764838531166-A36MZ"
   → Confidence: 0.99 (phrase + ID)

4. "Can you help me trace SWIFT-1764838531166-A36MZ"
   → Confidence: 0.99 (phrase + ID)

5. "1764838531166"
   → Confidence: 0.98 (number alone)

6. "What's the status of SWIFT-1764838531166-A36MZ"
   → Confidence: 0.99 (phrase + ID)
```

All should navigate and auto-fill! ✅

---

### Test Case 4: Returning Customer

**What to do:**
1. Close chat
2. Reopen chat

**Expected:**
- Same greeting shown
- Recent packages displayed
- Smart suggestions available

**If not working:**
- Check MongoDB for ChatSession records
- Verify session lookup by email works
- Check if tracking suggestions are populated

---

## 🔍 Debugging Checklist

### Frontend Issues

**Symptom:** Bot doesn't know customer name
```
Solution:
1. Check Firebase user: firebase.auth().currentUser
2. Verify email is set
3. Set displayName: await user.updateProfile({ displayName: "Your Name" })
4. Check browser console for errors
```

**Symptom:** Autonomous tracking not triggering
```
Solution:
1. Open DevTools console
2. Check NLU result confidence (should be >0.8)
3. Check if tracking ID is extracted
4. Verify actionExecutor is initialized
5. Check if tracking page element exists
```

**Symptom:** Form not auto-filling
```
Solution:
1. Inspect form input: document.querySelector('input[name="trackingId"]')
2. Check if input selector matches
3. Verify form triggers search on input change
```

### Backend Issues

**Symptom:** 403 Unauthorized on /api/chatbot endpoints
```
Solution:
1. Check Firebase token in Authorization header
2. Verify Firebase Admin is initialized
3. Check backend logs for token verification errors
4. Ensure serviceAccountKey.json is correct
```

**Symptom:** Session creation fails
```
Solution:
1. Check MongoDB connection: mongosh connection string
2. Verify database name and collections exist
3. Check if User collection has the email
4. Review server logs for errors
```

**Symptom:** Tracking history not saving
```
Solution:
1. Check if user exists in User collection
2. Verify TrackingHistory model is correct
3. Check MongoDB write permissions
4. Review server logs
```

---

## 📊 Expected MongoDB Collections

After first use, verify these collections exist:

### ChatSession
```javascript
db.chatsessions.findOne()
// {
//   _id: ObjectId,
//   userId: ObjectId,
//   email: "user@example.com",
//   customerName: "John",
//   sessionMetadata: {
//     totalMessages: 2,
//     trackingRequests: 1,
//     lastTrackingId: "SWIFT-1764838531166-A36MZ"
//   },
//   isActive: true,
//   createdAt: Date,
//   updatedAt: Date
// }
```

### ChatMessage
```javascript
db.chatmessages.findOne()
// {
//   _id: ObjectId,
//   sessionId: ObjectId,
//   userId: ObjectId,
//   from: "customer",
//   message: "Track SWIFT-1764838531166-A36MZ",
//   metadata: {
//     intent: "track_by_id",
//     trackingIds: ["SWIFT-1764838531166-A36MZ"],
//     confidence: 0.99
//   },
//   createdAt: Date
// }
```

### TrackingHistory
```javascript
db.trackinghistories.findOne()
// {
//   _id: ObjectId,
//   userId: ObjectId,
//   trackingId: "SWIFT-1764838531166-A36MZ",
//   customerName: "John",
//   trackedCount: 1,
//   lastTrackedAt: Date,
//   context: {
//     requestedVia: "chatbot",
//     userInitiated: true
//   },
//   createdAt: Date
// }
```

---

## ✅ Verification Checklist

- [ ] Backend running: `npm run dev`
- [ ] MongoDB connected
- [ ] Firebase initialized
- [ ] Frontend built: `npm run build`
- [ ] User logged in with Firebase
- [ ] Chat opens and loads
- [ ] Customer name displayed in greeting
- [ ] Recent packages shown (if any)
- [ ] Type tracking ID
- [ ] Autonomous tracking triggers
- [ ] Page navigates to tracking
- [ ] Form auto-fills
- [ ] Search executes
- [ ] MongoDB records created
- [ ] Returning user sees context
- [ ] All 60+ phrases work

---

## 🚨 Common Errors & Fixes

### Error: "Not authenticated"
**Cause:** No Firebase user logged in
**Fix:** Login with Firebase auth first

### Error: "Failed to create session"
**Cause:** MongoDB not connected or User not found
**Fix:** Check MongoDB connection and User collection

### Error: "Invalid or expired token"
**Cause:** Firebase token invalid or expired
**Fix:** Refresh page to get new token

### Error: "Unauthorized" (403)
**Cause:** Email mismatch between token and session
**Fix:** Verify Firebase user email matches token

### Error: Tracking ID not detected
**Cause:** NLU pattern doesn't match format
**Fix:** Check tracking ID format against regex patterns

### Error: No autonomous action executed
**Cause:** Confidence too low or actions not generated
**Fix:** Check NLU confidence (should be >0.8)

---

## 🎯 Next Steps

1. **Start backend:** `npm run dev`
2. **Start frontend:** `npm run dev` (if not running)
3. **Login with Firebase**
4. **Open chatbot**
5. **Verify greeting with your name**
6. **Test tracking ID**: `Track SWIFT-1764838531166-A36MZ`
7. **Monitor browser console** for debug messages
8. **Check backend logs** for auth verification
9. **Verify MongoDB** has records
10. **Test returning user** - close and reopen chat

---

## 📞 Support

If issues persist:

1. **Check browser console** - Copy all errors
2. **Check backend logs** - Look for auth errors
3. **Check MongoDB** - Verify collections and data
4. **Check network tab** - Verify API calls succeed
5. **Verify Firebase** - User should be authenticated

All these components need to work together for full functionality! ✅
