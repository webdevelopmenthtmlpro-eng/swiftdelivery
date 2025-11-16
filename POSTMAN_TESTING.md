# Swift Delivery Backend - Postman Testing Guide

## Fixed Issues

The following issues preventing Postman from receiving signals have been fixed:

1. **Missing `sendMessageToBackend()` function** - Frontend now has a proper async function that communicates with the backend
2. **Inadequate CORS configuration** - Backend now explicitly allows frontend origins
3. **Poor error handling** - Backend now returns proper HTTP status codes and error messages
4. **Missing health check endpoint** - Added `/health` endpoint for verifying backend is running
5. **Improved response validation** - Backend now validates input and handles API errors gracefully

---

## Testing with Postman

### Step 1: Start the Backend Server

```bash
cd swift-delivery-backend
npm start
# or for development with auto-reload
npm run dev
```

**Expected Console Output:**
```
✅ Backend running with Hugging Face AI on port 5000
📡 CORS enabled for local development
🔗 Try: POST http://localhost:5000/chat
Loaded Hugging Face API Key: ✅ Found
```

---

### Step 2: Test Health Check Endpoint

**URL:** `http://localhost:5000/health`
**Method:** GET
**Headers:** None required

**Expected Response (200 OK):**
```json
{
  "status": "ok",
  "message": "Backend is running"
}
```

---

### Step 3: Test Chat Endpoint

**URL:** `http://localhost:5000/chat`
**Method:** POST
**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "message": "What services do you offer?"
}
```

**Expected Response (200 OK):**
```json
{
  "reply": "[AI-generated response from Hugging Face]"
}
```

---

### Step 4: Test CORS (from frontend origin)

If testing from a web browser at `http://localhost:5173` or `http://localhost:3000`:

**URL:** `http://localhost:5000/chat`
**Method:** POST
**Headers:**
```
Content-Type: application/json
Origin: http://localhost:5173
```

**Request Body:**
```json
{
  "message": "Hello"
}
```

**Expected Result:** Request should succeed without CORS errors

---

### Step 5: Test Error Handling

#### Test Missing Message:
**URL:** `http://localhost:5000/chat`
**Method:** POST
**Headers:** `Content-Type: application/json`
**Body:** `{}`

**Expected Response (400 Bad Request):**
```json
{
  "error": "Message is required"
}
```

#### Test Empty Message:
**URL:** `http://localhost:5000/chat`
**Method:** POST
**Body:** `{"message": ""}`

**Expected Response (400 Bad Request):**
```json
{
  "error": "Message is required"
}
```

---

### Step 6: Test Auth Endpoint

**URL:** `http://localhost:5000/api/auth/test`
**Method:** POST
**Headers:** `Content-Type: application/json`
**Body:** `{"message": "test"}`

**Expected Response (200 OK):**
```json
{
  "status": "ok",
  "message": "Auth test successful",
  "timestamp": "2025-11-13T..."
}
```

---

## Frontend Integration

The frontend now properly sends messages to the backend:

1. User types a message in the chat box
2. Message is sent to `http://localhost:5000/chat` via POST
3. Backend processes the message and calls Hugging Face API
4. Response is returned and displayed in the chat
5. Error messages are displayed if something fails

### Testing from Frontend

1. Start the backend: `npm start` in `swift-delivery-backend/`
2. Start the frontend: `npm run dev` in `my-frontend/`
3. Navigate to the live chat section
4. Type a message and click Send
5. You should receive a response from the backend

---

## Troubleshooting

### Backend won't start
- Ensure port 5000 is not in use: `netstat -ano | findstr :5000`
- Check Node.js is installed: `node --version`
- Install dependencies: `npm install`

### CORS errors in browser console
- The backend now has explicit CORS configuration
- Add your frontend URL to the `origin` array in `server.js` if needed

### "API configuration error" from backend
- Ensure `.env` file exists in `swift-delivery-backend/`
- Verify `HF_API_KEY` is set: `echo %HF_API_KEY%` (Windows PowerShell)

### No response from Hugging Face
- Check your API key is valid
- Verify internet connection is active
- Hugging Face service might be rate-limited

---

## Postman Collection Import

You can import this as a Postman collection for easy testing:

```json
{
  "info": {
    "name": "Swift Delivery API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/health"
      }
    },
    {
      "name": "Chat",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": "http://localhost:5000/chat",
        "body": {"mode": "raw", "raw": "{\"message\": \"Hello\"}"}
      }
    },
    {
      "name": "Auth Test",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": "http://localhost:5000/api/auth/test",
        "body": {"mode": "raw", "raw": "{}"}
      }
    }
  ]
}
```

---

## Summary of Changes

### Backend (`server.js`)
✅ Added explicit CORS configuration  
✅ Added `/health` endpoint  
✅ Added input validation  
✅ Improved error handling with proper HTTP status codes  
✅ Better error logging  
✅ Added `/api/auth/test` endpoint  

### Frontend (`script.js`)
✅ Implemented `sendMessageToBackend()` function  
✅ Proper fetch with error handling  
✅ Correct backend URL (`http://localhost:5000/chat`)  
✅ User feedback for errors  
✅ Proper request/response headers  

---

**All systems ready for testing! 🚀**
