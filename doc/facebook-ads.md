# Facebook Ads

Based on the official Meta documentation, here's a comprehensive breakdown of the **required and optional fields** for Facebook ad CSV bulk uploads:

## **CAMPAIGN LEVEL**

### Required Fields:
- **Campaign Objective** - Your advertising goal (Awareness, Traffic, Engagement, Leads, Sales, App promotion)
- **Buying Type** - "Auction" or "Fixed"

### Optional Fields:
- **Campaign ID** - Leave blank for new campaigns; required for editing existing ones
- **Campaign Name** - 35 character limit (recommended)
- **Campaign Status** - Active or Paused
- **Campaign Spend Limit** - Maximum spending cap
- **Tags** - For organization (comma-separated)

---

## **AD SET LEVEL**

### Required Fields:
- **Ad Set Name** - 35 character limit (recommended)
- **Budget** - Either **Ad Set Daily Budget** OR **Ad Set Lifetime Budget** (must have one)
- **Countries** - ISO country code (e.g., "US")
- **Optimization Goal** - Choose from: IMPRESSIONS, APP_INSTALLS, PAGE_LIKES, OFFER_CLAIMS, LINK_CLICKS, POST_ENGAGEMENT, CLICKS, BRAND_AWARENESS, EVENT_RESPONSES, LEAD_GENERATION, OFFSITE_CONVERSIONS, REACH, VIDEO_VIEWS
- **Billing Event** - APP_INSTALLS, OFFER_CLAIMS, LINK_CLICKS, PAGE_LIKES, POST_ENGAGEMENT, IMPRESSIONS, or VIDEO_VIEWS

### Conditional Required:
- **Bid Amount** or **Max Bid** - Required for CPC/CPM ads
- **Application ID** - Required for app install ads
- **Link Object ID** - Required for Page post ads

### Optional Fields:
- **Ad Set ID** - For editing existing ad sets
- **Ad Set Status** - Active or Paused
- **Ad Set Time Start** - MM/DD/YY HH:MM format
- **Age Min/Max** - Default is 13-64
- **Gender** - Men, Women, or blank for all
- **Cities** - Semicolon-separated (e.g., "Palo Alto, CA; New York, NY")
- **Regions** - States/regions (comma-separated)
- **Zip** - Zip codes (comma-separated)
- **Locales** - Languages (comma-separated)
- **Custom Audiences** - Format: [ID]:[Name]
- **Excluded Custom Audiences**
- **Connections** - Target people connected to your Page/app/group
- **Excluded Connections**
- **Friends of Connections**
- **Broad Category Clusters**
- **Education Status** - Comma-separated
- **College Start/End Year** - YYYY format
- **Relationship** - Single, relationship, engaged, married
- **Interested In** - Genders target audience is interested in
- **Video Engagement** - Target video engagers
- **Excluded Video Engagements**

---

## **AD LEVEL**

### Required Fields:
- **Ad Name** - 35 character limit
- **Body** - Ad copy (90 chars for right column, 500 for Feed)
- **Title** - 25 character limit
- **Image** - Filename with extension (e.g., "image1.jpg")
- **Link Description** - Required for Feed ads

### Conditional Required:
- **Ad ID** - Required for editing existing ads
- **Link** - Required if linking to external website
- **Story ID** - Required for Page post ads or using existing posts
- **Image Hash** - Required when editing ads (auto-generated after upload)

### Optional Fields:
- **Ad Status** - On or Off (should match campaign/ad set status)
- **Creative Type** - "Page post ad" or "Standard"
- **Display Link** - Friendly URL (e.g., www.example.com)
- **URL Tags** - Tracking parameters (format: key1=value1&key2=value2)

---

## **Key Tips for 200+ Ad Variations:**

1. **Use naming conventions** - Create systematic names for easy tracking (e.g., "Campaign_Audience_Creative_v1")

2. **Leverage dynamic fields** - Consider which elements vary:
   - Different ad copy (Body, Title)
   - Different images
   - Different audiences (Custom Audiences, Demographics)
   - Different URL tags for tracking

3. **Start with export** - Create one ad manually in Ads Manager, export it, then use it as your template

4. **Bulk image upload** - You can upload images separately, then reference them by filename

5. **Status management** - Consider starting with "Paused" status to review before launching

6. **Testing structure** - Organize by:
   - Campaign = Overall goal
   - Ad Set = Audience variation
   - Ad = Creative variation

Would you like me to create a sample CSV template with these fields that you can use as a starting point?
