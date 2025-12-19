# Live Package Tracking System - Setup & Implementation Guide

## Overview
This guide explains how to use the new Live Package Tracking system implemented in SwiftDelivery.

## Components Implemented

### 1. **Admin Dashboard - Live Tracking Map** (AdminDashboard.jsx)
Located in the "Tracking" tab of the admin dashboard.

#### Features:
- **Verified Users Sidebar**: Lists all verified customers
- **Interactive Google Map**: Display package locations with custom markers
- **Status Selection**: Choose from 11 package statuses:
  - Pending Pickup
  - Pickup Assigned
  - Pickup Accepted
  - Enroute to Facility
  - Arrived at Hub or Facility
  - In Transit
  - Out for Delivery
  - Delivered
  - Awaiting Receipt
  - Delivery Failed
  - Returned to Sender

#### Workflow:
1. Select a verified customer from the left sidebar
2. Choose a package status from the dropdown
3. Click "Pin Package Location" button
4. Click on the map to pin the exact delivery location
5. System generates a unique Tracking ID automatically
6. Copy the Tracking ID and share with the customer

#### Map Features:
- Color-coded markers based on delivery status
- Click markers to view package details
- Real-time location updates
- Responsive design for all devices

---

### 2. **Customer Tracking Page** (CustomerTracking.jsx)
Public-facing page accessible at: `/#/track-package`

#### Features:
- **Tracking ID Search**: Enter tracking ID to retrieve package info
- **Live Map Display**: Shows package location with marker
- **Status Information**: 
  - Current delivery status with icon
  - Recipient name and email
  - GPS coordinates
  - Last update timestamp
- **Status Timeline**: Shows current status in a visual timeline

#### How Customers Use It:
1. Visit the tracking page (/#/track-package)
2. Enter the Tracking ID provided by admin
3. Map automatically shows package location
4. View all package details including status, coordinates, and update time
5. Map auto-centers on the package location with zoom level 14

---

## Backend API Endpoints

### Admin Endpoints (Requires Admin Auth)

#### 1. Get Verified Users
```
GET /api/admin/verified-users
Headers: Authorization: Bearer {token}
Response: Array of verified user objects
```

#### 2. Create Tracking Record
```
POST /api/admin/tracking
Headers: 
  - Authorization: Bearer {token}
  - Content-Type: application/json
Body:
{
  "userId": "user_id",
  "status": "In Transit",
  "location": {
    "lat": 6.5244,
    "lng": 3.3792
  }
}
Response: { trackingId, status, location, user, createdAt, updatedAt }
```

#### 3. Update Tracking Record
```
PUT /api/admin/tracking/:trackingId
Headers:
  - Authorization: Bearer {token}
  - Content-Type: application/json
Body:
{
  "status": "Delivered",
  "location": { "lat": 6.5250, "lng": 3.3800 }
}
Response: Updated tracking record
```

#### 4. Get All Tracking Records
```
GET /api/admin/tracking
Headers: Authorization: Bearer {token}
Response: Array of all tracking records sorted by latest update
```

### Public Endpoints (No Auth Required)

#### Get Tracking by ID
```
GET /api/tracking/:trackingId
Response: { trackingId, status, location, user, createdAt, updatedAt }
```

---

## Database Models

### Tracking Model (models/tracking.js)
```javascript
{
  trackingId: String (unique, auto-generated),
  userId: ObjectId (reference to User),
  status: String (one of 11 statuses),
  location: {
    lat: Number,
    lng: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

---

## Setup Instructions

### 1. **Frontend Setup**

#### Install Dependencies
```bash
cd my-frontend
npm install
```

#### Environment Variables
Create `.env` file in `my-frontend/` directory:
```env
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
VITE_API_BASE_URL=http://localhost:5000
```

**To get Google Maps API Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Maps JavaScript API
4. Create an API key with restrictions
5. Copy the API key to your `.env` file

#### Run Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 2. **Backend Setup**

#### Environment Variables
Ensure your `swift-delivery-backend/.env` file contains:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Start Backend Server
```bash
cd swift-delivery-backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

---

## Testing the Features

### Admin Workflow:
1. **Register/Login as Admin**
   - Navigate to `/register` 
   - Register with any email/password
   - Admin is auto-created in the system

2. **Verify Customers**
   - Go to Admin Dashboard → Users tab
   - Click "Verify" on customer accounts

3. **Create Tracking Record**
   - Go to Admin Dashboard → Tracking tab
   - Select a verified customer from sidebar
   - Choose a package status
   - Click "Pin Package Location"
   - Click on map to set location
   - Copy generated Tracking ID

### Customer Workflow:
1. **Register/Login as Customer**
   - Navigate to `/register`
   - Create account (will be customer by default)

2. **Track Package**
   - Go to `/#/track-package` (public page)
   - Enter the Tracking ID provided by admin
   - View package location on map
   - Check delivery status and details

---

## File Structure

```
my-frontend/src/
├── AdminDashboard.jsx           # Admin dashboard main component
├── LiveTrackingMap.jsx          # Admin tracking map component
├── LiveTrackingMap.css          # Admin tracking styles
├── CustomerTracking.jsx         # Customer tracking page component
├── CustomerTracking.css         # Customer tracking styles
├── App.jsx                      # Router configuration
└── models/
    └── tracking.js             # Tracking schema

swift-delivery-backend/
├── server.js                    # Main server with tracking endpoints
├── models/
│   └── tracking.js             # Tracking MongoDB model
└── ...
```

---

## Styling & UX

### Color-Coded Status Markers
- 🟨 **Pending Pickup**: Yellow
- 🔵 **Pickup Assigned**: Blue
- 🟢 **Pickup Accepted**: Green
- 🟣 **Enroute to Facility**: Purple
- 🟠 **Arrived at Hub**: Orange
- 🔷 **In Transit**: Light Blue
- 🩷 **Out for Delivery**: Pink
- 🟢 **Delivered**: Green
- 🟦 **Awaiting Receipt**: Blue
- 🔴 **Delivery Failed**: Red
- ⚫ **Returned to Sender**: Gray

### Responsive Design
- Desktop: Sidebar + Map side-by-side
- Tablet: Responsive grid layout
- Mobile: Full-width map with collapsible controls

---

## Key Features & Benefits

✅ **Real-time Tracking**: Customers can track packages in real-time
✅ **Admin Control**: Admins can set status and location updates
✅ **Unique Tracking IDs**: Each package gets a unique SWIFT-xxxxx ID
✅ **Beautiful UI**: Modern, intuitive interface with color-coded statuses
✅ **Responsive**: Works seamlessly on desktop, tablet, and mobile
✅ **Secure**: Admin-only operations require authentication
✅ **Public Access**: Customers can track without login (just tracking ID)
✅ **Location Pinning**: Easy map-based location selection
✅ **Status Timeline**: Visual representation of delivery status

---

## Troubleshooting

### Issue: Map not loading
**Solution**: 
- Verify `VITE_GOOGLE_MAPS_API_KEY` is set in `.env`
- Ensure Google Maps API is enabled in Cloud Console
- Check browser console for API key errors

### Issue: Can't create tracking record
**Solution**:
- Ensure you're logged in as admin
- Make sure selected customer is verified
- Check backend is running on port 5000
- Check browser console for API errors

### Issue: Backend not responding
**Solution**:
- Verify backend is running: `npm start` from `swift-delivery-backend/`
- Check `MONGO_URI` is correct
- Ensure MongoDB is running
- Check firewall/port 5000 is not blocked

### Issue: Tracking ID not found when searching
**Solution**:
- Verify Tracking ID format: `SWIFT-xxxxxxxxxxxxx-XXXXX`
- Ensure admin has created a tracking record for this customer
- Check backend logs for database errors

---

## Future Enhancements

- [ ] Real-time location updates via WebSocket
- [ ] SMS/Email notifications for status changes
- [ ] Multiple packages per customer
- [ ] Route optimization for couriers
- [ ] Delivery proof (photos, signatures)
- [ ] Estimated delivery time
- [ ] Package dimensions and weight tracking
- [ ] Integration with SMS gateway (Twilio)
- [ ] Push notifications to mobile app
- [ ] Analytics dashboard for delivery metrics

---

## Support

For issues or questions, check:
1. Browser console for errors
2. Backend logs (terminal where server is running)
3. MongoDB connection status
4. Google Maps API configuration

---

**Created**: November 2025
**Last Updated**: November 28, 2025
