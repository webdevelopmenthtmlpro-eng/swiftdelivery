# 🚀 Quick Start Guide - Live Tracking

## 1. Setup Environment

### Backend
```bash
cd swift-delivery-backend
npm install
npm start
```

### Frontend
```bash
cd my-frontend
npm install
```

Create `.env` file:
```env
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

Get API key: https://console.cloud.google.com/

```bash
npm run dev
```

## 2. Access Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

## 3. Admin Workflow

1. **Register as Admin**
   - Go to `/register`
   - Create account (auto-admin)

2. **Verify Customers**
   - Go to Admin Dashboard
   - Users tab → Click "Verify"

3. **Create Tracking**
   - Go to Admin Dashboard
   - **Tracking tab** → 
     - Select customer from sidebar
     - Choose status from dropdown
     - Click "Pin Package Location"
     - Click on map to set location
     - Copy generated Tracking ID

## 4. Customer Workflow

1. **Get Tracking ID from Admin**

2. **Track Package**
   - Go to `/#/track-package`
   - Enter Tracking ID
   - View location on map
   - See delivery status

## 5. Update Status

**Admin can update anytime:**
- Go to Tracking tab
- Click existing marker
- Update status/location
- Changes appear for customers instantly

---

## 📍 Admin Dashboard Tracking Features

| Feature | How to Use |
|---------|-----------|
| Select Customer | Click user in left sidebar |
| Change Status | Select from dropdown menu |
| Pin Location | Click "Pin Package Location" then click map |
| Copy ID | Click 📋 button next to tracking ID |
| Update Existing | Click marker, modify, save |
| View All | All packages shown as colored markers |

---

## 🎯 Package Statuses

1. 📦 Pending Pickup
2. 👤 Pickup Assigned
3. ✅ Pickup Accepted
4. 🚚 Enroute to Facility
5. 🏢 Arrived at Hub or Facility
6. 🛣️ In Transit
7. 🚗 Out for Delivery
8. 📍 Delivered
9. ⏳ Awaiting Receipt
10. ❌ Delivery Failed
11. ↩️ Returned to Sender

---

## 🆔 Tracking ID Format

`SWIFT-1234567890-ABCDE`

- Automatically generated
- Unique for each package
- Shared with customer
- Used to track on public page

---

## 📱 Public Tracking Page

**URL**: `/#/track-package`

**Anyone can access:**
- No login required
- Just need Tracking ID
- Shows map + delivery details
- Shows current status
- Shows location coordinates

---

## 🗺️ Map Features

### Admin Map:
- ✅ Click to pin locations
- ✅ Color-coded markers by status
- ✅ Info windows on marker click
- ✅ Sidebar with all customers
- ✅ Real-time updates

### Customer Map:
- ✅ Shows package location
- ✅ Status with emoji indicator
- ✅ Recipient details
- ✅ Auto-centered on location
- ✅ Click marker for info

---

## ⚙️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Map won't load | Add Google Maps API key to `.env` |
| No customers shown | Verify at least one customer in system |
| Tracking ID not found | Ensure admin created record for customer |
| Backend not responding | Verify running on port 5000 |
| Database errors | Check MongoDB connection in `.env` |

---

## 🔗 Important Links

- **Admin Dashboard**: `/#/` (login first)
- **Customer Tracking**: `/#/track-package` (public)
- **Register**: `/#/register`
- **Login**: `/#/login`

---

## 💡 Tips

1. **Create test data first**: Register a customer, verify them, then create tracking
2. **Copy tracking ID**: Click the 📋 button to copy to clipboard
3. **Update status anytime**: Customers see updates in real-time
4. **Mobile friendly**: Works great on phones and tablets
5. **Share tracking ID**: Send via SMS, email, or chat to customers

---

**Start tracking in 5 minutes!** 🎯
