# 🚀 PROJECT STRUCTURE & QUICK REFERENCE

## 📁 Directory Structure

```
Website/
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable components
│   │   ├── about/        # About page component
│   │   ├── banner/       # Hero banner
│   │   ├── college/      # College listing
│   │   ├── college_details/  # Individual college details
│   │   ├── collection_form/  # Admission form
│   │   ├── contact/      # Contact info display
│   │   ├── enquiry_modal/ # Contact enquiry modal
│   │   ├── floating_enquiry/ # Floating enquiry button
│   │   ├── footer/       # Footer
│   │   ├── medical/      # Medical programs page
│   │   ├── navbar/       # Navigation bar
│   │   └── whatsapp_button/ # WhatsApp floating button
│   ├── config/           # NEW: Configuration files
│   │   └── constants.js  # Centralized constants
│   ├── data/
│   │   └── collegesData.js  # College database
│   ├── pages/            # Page components
│   │   ├── About_page.jsx
│   │   ├── Collect_Details.jsx
│   │   ├── Contact_page.jsx
│   │   ├── CollegeDetailsPage.jsx
│   │   ├── college_select.jsx
│   │   ├── homePage.jsx
│   │   ├── Medical_Page.jsx
│   │   └── Non_Medical_Page.jsx
│   ├── App.jsx           # Main app component with routes
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration with API proxy
├── eslint.config.js     # Linting rules
└── AUDIT_REPORT.md      # NEW: Comprehensive audit report
```

---

## 🔄 USER FLOW

```
1. HOME PAGE
   ├─→ Medical Programs → College Listing → College Details → Course Selection
   ├─→ Non-Medical Programs → College Listing → College Details → Course Selection
   ├─→ About Us → Static Content
   └─→ Contact Us → Contact Info + Enquiry Form

2. ADMISSION FLOW
   Course Click (From College Details)
   ├─→ Redirect to Admission Form
   ├─→ Pre-fill: College Name + Course
   ├─→ User fills: Personal Details
   └─→ Submit → Backend API → Success Page

3. ENQUIRY FLOW
   Enquiry Button Click (Navbar/Floating Button)
   ├─→ Modal Opens
   ├─→ User fills: Name, Email, Phone, Location, Message
   └─→ Submit → Backend API → Success Message
```

---

## 🔌 API ENDPOINTS

### Backend Required (Django/Flask/Node.js at `http://127.0.0.1:8000`)

**1. Enquiry Submission**
```
POST /api/enquiries/
Content-Type: application/json

Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "location": "Bangalore",
  "message": "Interested in Engineering"
}

Response: { "success": true } or error
```

**2. Admission Form Submission**
```
POST /api/submit/
Content-Type: application/json

Request:
{
  "first_name": "John",
  "last_name": "Doe",
  "dob": "2000-01-15",
  "gender": "Male",
  "email": "john@example.com",
  "phone_number": "9876543210",
  "highest_qualification": "12th Standard",
  "year_of_passing": "2022",
  "aggregate_percentage": "85%",
  "course_selected": "Computer Science Engineering",
  "colleges_selected": "College Name"
}

Response: { "success": true } or error
```

---

## 🎯 ROUTES IN APPLICATION

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Landing page |
| `/medical` | Medical_Page | Medical programs listing |
| `/non-medical` | Non_Medical_Page | Non-medical programs listing |
| `/college` | College_select | College listing for selected program |
| `/college-details/:id` | CollegeDetailsPage | Individual college details |
| `/collect_form` | Collect_Details | Admission enquiry form |
| `/about` | About_page | About us page |
| `/contact` | Contact_page | Contact information page |

---

## 🎨 KEY COMPONENTS

### 1. **NavBar** (`components/navbar/navbar.jsx`)
- Responsive navigation
- Enquiry modal trigger
- Links: Home, About, Contact, Enquiry

### 2. **College Details** (`components/college_details/CollegeDetails.jsx`)
- Displays college information
- Shows courses as clickable items
- Redirects to admission form on course click

### 3. **Collection Form** (`components/collection_form/collection_form.jsx`)
- Complete admission form
- Validates all fields
- Submits to `/api/submit/`

### 4. **Contact Page** (`components/contact/contact.jsx`)
- Phone: Clickable (tel: protocol)
- WhatsApp: Clickable link
- Email: Clickable link
- Social media: Links to Instagram, Facebook, YouTube

### 5. **Enquiry Modal** (`components/enquiry_modal/EnquiryModal.jsx`)
- Quick enquiry form
- Submits to `/api/enquiries/`

---

## 📞 CONTACT INFORMATION

**Update these in `src/config/constants.js`:**

```javascript
PHONE: '+91 9876543210'
WHATSAPP: '+91 9447738796'
EMAIL: 'admissions@college.edu'
SUPPORT_EMAIL: 'support@studypath.com'
```

---

## 🔐 VALIDATION RULES

### Phone Number:
- Exactly 10 digits
- Numbers only

### Email:
- Valid email format
- Required field

### Date of Birth:
- Cannot be in future
- Must be valid date

### Aggregate Percentage:
- Any valid percentage/CGPA format
- Required field

---

## 🚀 RUNNING THE PROJECT

```bash
# Install dependencies
npm install

# Development server (with hot reload)
npm run dev

# Build for production
npm build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🔍 FIXED ISSUES (SUMMARY)

✅ Removed dead route `/resources`  
✅ Removed broken footer links  
✅ Centralized configuration in constants.js  
✅ Removed commented dead code  
✅ Verified all active routes work  
✅ Confirmed API endpoints are correct  
✅ Validated form submissions  

---

## ⚡ PERFORMANCE TIPS

1. **Images**: Optimize image sizes before uploading to `public/`
2. **Caching**: Backend should set appropriate cache headers
3. **Database**: Ensure collegesData is indexed for fast searches
4. **API Timeout**: Configure appropriate timeouts
5. **Code Splitting**: Consider lazy loading for routes

---

## 📱 RESPONSIVE BREAKPOINTS

The app is optimized for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

---

## 🐛 DEBUGGING

### Browser Console:
- Check for JavaScript errors
- Monitor API calls in Network tab
- Use Redux DevTools if state management is added

### Common Issues:
1. **Blank page on course click**: Check if `/collect_form` route exists
2. **API errors**: Verify backend is running on `http://127.0.0.1:8000`
3. **Form not submitting**: Check browser console for validation errors
4. **Contact links not working**: Verify phone numbers in constants.js

---

## 📚 USEFUL FILES

- `AUDIT_REPORT.md` - Complete code audit
- `src/config/constants.js` - Centralized configuration
- `package.json` - Dependencies and scripts
- `vite.config.js` - Build and proxy configuration

---

**Last Updated**: January 21, 2026  
**Status**: Production Ready ✅

