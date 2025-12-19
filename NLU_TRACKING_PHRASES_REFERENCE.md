# Enhanced NLU Tracking Phrases Reference

## 📋 Overview

The SwiftDelivery chatbot now recognizes **60+ tracking phrases** and **5+ tracking ID formats**. This ensures maximum compatibility with customer natural language variations.

---

## 🎯 Tracking ID Formats Recognized

Your tracking ID `SWIFT-1764838531166-A36MZ` is recognized in these formats:

### **Pattern 1: SWIFT-[10+ digits]-[3+ letters]**
```
SWIFT-1764838531166-A36MZ  ✅ (Your ID)
SWIFT-1234567890-ABCDE     ✅
SWIFT-1234567-ABC          ✅
```

### **Pattern 2: SWIFT-[8+ digits]-[3+ letters]**
```
SWIFT-12345678-ABC         ✅
SWIFT-123456789-XYZ        ✅
```

### **Pattern 3: Alphanumeric prefix + numbers + letters**
```
SWF123456AB                ✅
FDX987654XY                ✅
```

### **Pattern 4: Pure numbers (10+ digits)**
```
1764838531166              ✅
1234567890                 ✅
```

### **Pattern 5: Any SWIFT-* format**
```
SWIFT-anything-here        ✅
SWIFT-ABC-123              ✅
```

---

## 📝 Complete List of 60+ Tracking Phrases

The bot now understands these phrases (case-insensitive):

### **Core Tracking Phrases**
- track my package
- check tracking
- where is my shipment
- track shipment
- delivery status
- please track
- help me track
- i want to track
- can you track
- track this package
- track this shipment

### **Find/Locate Variations**
- find my package
- find my shipment
- locate my package
- locate my shipment
- where is my package
- where is my cargo
- where is my parcel

### **Time-Based Queries**
- when will my package
- when will my shipment
- when will my delivery
- has my package arrived
- has my shipment arrived
- when will it arrive

### **Status Checking**
- current status of
- package status
- shipment status
- cargo status
- delivery update
- tracking update
- check status
- what is the status
- what is the location

### **Trace/Monitor/Follow**
- trace package
- trace shipment
- trace cargo
- monitor package
- monitor shipment
- follow package
- follow shipment
- trace my
- package trace
- shipment trace

### **Assistance Requests**
- help track
- track for me
- please help me track
- can you help track
- i need to track
- need help tracking
- help with tracking
- tracking help

### **Tracking Info Requests**
- package tracking
- shipment tracking
- cargo tracking
- live tracking
- real-time tracking
- track id
- tracking number
- reference number
- shipment number
- cargo number

### **Location/Details**
- parcel tracking
- parcel status
- package location
- shipment location
- delivery location
- current location of
- last update on
- track and trace
- trace and track
- show me tracking
- show tracking info
- show delivery status

---

## 🧠 NLU Detection Logic

### **Priority 1: Tracking ID + Phrase (Confidence: 0.99)**
```
"Track SWIFT-1764838531166-A36MZ"
"Help me track my package SWIFT-1764838531166-A36MZ"
"Where is SWIFT-1764838531166-A36MZ"
```
**Action**: Autonomous navigation + auto-fill + search

### **Priority 2: Tracking ID Alone (Confidence: 0.98)**
```
"SWIFT-1764838531166-A36MZ"
"1764838531166"
"Can you help with SWIFT-1764838531166-A36MZ"
```
**Action**: Autonomous navigation + auto-fill + search

### **Priority 3: Tracking Phrase (Confidence: 0.88-0.90)**
```
"Where is my package"
"Can you help me track"
"Check delivery status"
```
**Action**: Navigate to tracking page, ask for tracking ID

### **Priority 4: Base Intent Recognized (Confidence: 0.85+)**
```
"Track this shipment"
"Show me tracking"
```
**Action**: Navigate to tracking section

---

## 🧪 Test Cases

### **Test 1: Your Tracking ID with Phrase**
```
Input:  "help me track this package SWIFT-1764838531166-A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.99
Action: Navigate → Fill form → Search
```

### **Test 2: Just the Tracking ID**
```
Input:  "SWIFT-1764838531166-A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.98
Action: Navigate → Fill form → Search
```

### **Test 3: Various Phrase Formats**
```
Input:  "where is my shipment SWIFT-1764838531166-A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.99
Action: Navigate → Fill form → Search
```

```
Input:  "can you help track SWIFT-1764838531166-A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.99
Action: Navigate → Fill form → Search
```

```
Input:  "trace cargo SWIFT-1764838531166-A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.99
Action: Navigate → Fill form → Search
```

### **Test 4: Pure Tracking Number**
```
Input:  "1764838531166"
Intent: TRACK_BY_ID
Confidence: 0.98
Action: Navigate → Fill form → Search
```

### **Test 5: Alternate Format**
```
Input:  "SWIFT-1764838531166A36MZ"
Intent: TRACK_BY_ID
Confidence: 0.98
Action: Navigate → Fill form → Search
```

---

## 🔍 Keywords That Trigger Tracking Detection

### **Core Keywords**
- track, tracking, where is my, status, shipment, package
- delivery, cargo, courier, find, locate, trace, monitor
- follow, check, swift, has it arrived, when will it arrive
- where is it, locate my

### **Additional Keywords Supported**
- shipment, cargo, parcel, delivery, consignment
- where, when, how, status, location
- help, can, could, will, need, want

---

## 💡 Entity Extraction

When the NLU processes a message, it extracts:

1. **Tracking IDs** - Finds all matching tracking numbers
2. **Tracking Phrase Flag** - Marks if message has tracking keywords
3. **Status Keywords** - Detects delivery status references
4. **Time Expressions** - Identifies when/time references
5. **Customer Names** - Extracts person names if present

### Example:
```
Input: "Can you track my package SWIFT-1764838531166-A36MZ? It should be delivered by tomorrow."

Extraction:
- trackingIds: ["SWIFT-1764838531166-A36MZ"]
- hasTrackingPhrase: true
- statusKeywords: ["delivered"]
- timeExpressions: ["tomorrow"]
- customerNames: []

Result:
- Intent: TRACK_BY_ID
- Confidence: 0.99
- Action: AUTONOMOUS_TRACKING
```

---

## 🚀 Autonomous Action Flow

When NLU detects tracking intent with ID:

```
1. Message Received
   ↓
2. Entity Extraction
   • Find Tracking ID: SWIFT-1764838531166-A36MZ ✅
   • Detect Phrase: "help me track" ✅
   ↓
3. Intent Detection
   • Base Intent: NAVIGATE_TRACK
   • Enhanced Intent: TRACK_BY_ID
   • Confidence: 0.99 ✅
   ↓
4. Generate Actions
   • AUTONOMOUS_TRACKING (primary)
   • NAVIGATE_TO_TRACKING
   • AUTO_FILL_TRACKING_FORM
   ↓
5. Execute Actions
   • Navigate to /tracking ✅
   • Fill input: "SWIFT-1764838531166-A36MZ" ✅
   • Trigger search ✅
   ↓
6. Autonomous Tracking Started
   • Bot Message: "🔍 Tracking initiated..."
   • Results displayed
   ↓
7. Save to MongoDB
   • Session: Updated message count
   • Chat History: Message saved
   • Tracking History: Recorded tracking request
```

---

## 📊 Phrase Categories

| Category | Examples | Count |
|----------|----------|-------|
| Direct Tracking | track, tracking, check tracking | 5 |
| Location Queries | where, locate, find | 8 |
| Status Inquiries | status, delivery update, current | 7 |
| Time Requests | when, arrival, has it arrived | 5 |
| Action Phrases | help me, can you, please | 12 |
| Trace/Monitor | trace, monitor, follow | 9 |
| Status Keywords | cargo, shipment, package, parcel | 7 |
| Location Keywords | location, address, where | 5 |
| **TOTAL** | | **58+** |

---

## 🎓 Advanced Examples

### **Complex Natural Language**
```
"Hey, I'm trying to figure out where my delivery is right now. 
Can you please help me track SWIFT-1764838531166-A36MZ? 
I need to know when it'll arrive."

Detection:
✅ Tracking phrase: "help me track"
✅ Tracking ID: "SWIFT-1764838531166-A36MZ"
✅ Time query: "when it'll arrive"
→ Result: TRACK_BY_ID (0.99) + Save to history
```

### **Minimal Input**
```
"SWIFT-1764838531166-A36MZ"

Detection:
✅ Tracking ID found
❌ Phrase not required
→ Result: TRACK_BY_ID (0.98) + Auto-navigate
```

### **Indirect Query**
```
"Where's my stuff?"

Detection:
✅ Phrase: "where"
❌ Tracking ID not found
❌ No specific tracking phrase
→ Result: Navigate to tracking (0.88)
→ Bot asks for tracking ID
```

---

## ✅ Verification Checklist

- [x] Tracks format: `SWIFT-1764838531166-A36MZ`
- [x] Recognizes 60+ variations
- [x] Handles phrases WITH tracking ID
- [x] Handles phrases WITHOUT tracking ID
- [x] Handles tracking ID WITHOUT phrase
- [x] Autonomous navigation works
- [x] Form auto-fill works
- [x] Search triggers
- [x] Saves to MongoDB
- [x] Shows smart suggestions
- [x] Context persistence works

---

## 🔧 Testing Your ID

Try these with your tracking ID `SWIFT-1764838531166-A36MZ`:

1. **Direct**: `SWIFT-1764838531166-A36MZ`
2. **With Phrase**: `Track SWIFT-1764838531166-A36MZ`
3. **Question**: `Where is SWIFT-1764838531166-A36MZ`
4. **Casual**: `Can you help me track SWIFT-1764838531166-A36MZ`
5. **Urgent**: `I need to find SWIFT-1764838531166-A36MZ immediately`
6. **Status**: `What's the status of SWIFT-1764838531166-A36MZ`
7. **Location**: `Where is my package SWIFT-1764838531166-A36MZ`
8. **Time**: `When will SWIFT-1764838531166-A36MZ arrive`

All should trigger autonomous tracking! ✅
