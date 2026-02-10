## What does an ERP system do?

An ERP (Enterprise Resource Planning) system is software that integrates and manages a company's core business processes in one unified system.
Essentially, it acts as a central hub that connects different departments and functions across an organization - like finance, human resources, manufacturing, supply chain, sales, and inventory management. Instead of each department using separate software that doesn't communicate well with others, an ERP brings everything together into a single database.
The main benefits are that it helps eliminate data silos, reduces duplicate data entry, improves visibility across the organization, and streamlines workflows. For example, when a sale is recorded, the ERP can automatically update inventory levels, trigger production planning if needed, generate invoices in accounting, and update sales forecasts - all in real-time.
Common ERP systems include SAP, Oracle, Microsoft Dynamics, and NetSuite. While they can be complex and expensive to implement, they're widely used by medium to large organizations because they provide a more efficient and coordinated way to run business operations compared to using disconnected systems.
Is there a specific aspect of ERP systems you're interested in learning more about?

## What is the equivalent for SMB and mid-market?

SMBs and mid-market companies actually do have ERP options - they're just tailored to be more affordable, simpler to implement, and scaled to their needs. Some popular ones include:

**Cloud-based ERPs for SMB/Mid-market:**
- **NetSuite** - one of the most popular cloud ERPs for growing businesses
- **Microsoft Dynamics 365 Business Central** - good for companies already in the Microsoft ecosystem
- **Sage Intacct** - strong in financial management
- **Acumatica** - flexible, subscription-based pricing
- **Odoo** - open-source with modular approach
- **Zoho Books/Zoho One** - budget-friendly for smaller businesses

**Alternative approach:**
Many SMBs skip the full ERP and instead use **integrated best-of-breed tools** that work together:
- Accounting: QuickBooks, Xero, FreshBooks
- CRM: Salesforce, HubSpot, Pipedrive
- Inventory: Fishbowl, DEAR Inventory
- HR: BambooHR, Gusto, Rippling
- Project management: Monday.com, Asana, ClickUp

These tools often integrate through APIs or platforms like Zapier, giving you ERP-like functionality without the complexity or cost.

The choice usually depends on complexity of operations - companies with simpler needs often do fine with integrated tools, while those with manufacturing, complex inventory, or multiple locations tend to benefit more from a proper ERP even at the SMB level.

What size of business are you thinking about?

## What about managing company documents (bylaws, contracts, policies, etc.)?

For managing company documents like bylaws, contracts, and policies, you'd be looking at **Document Management Systems (DMS)** and **Contract Lifecycle Management (CLM)** tools, which are separate from ERPs (though some ERPs have document management modules).

**Popular options for SMB/Mid-market:**

**General Document Management:**
- **Google Drive/Google Workspace** - simple, familiar, with version control and permissions
- **Microsoft SharePoint/OneDrive** - good for Microsoft-centric companies, strong permissions and workflows
- **Dropbox Business** - easy to use with decent organization features
- **Box** - stronger security and compliance features than consumer options
- **Notion or Confluence** - great for policies, handbooks, and internal documentation

**Contract-Specific Management:**
- **PandaDoc** - contracts, e-signatures, workflow automation
- **DocuSign CLM** - contract lifecycle management with e-signature
- **Ironclad** - modern contract management platform
- **ContractWorks** - simpler, affordable contract repository
- **Concord** - contract creation and management

**Key features to look for:**
- Version control (track changes over time)
- Permission/access controls (who can view/edit what)
- Search functionality (find documents quickly)
- Audit trails (who accessed/modified documents)
- E-signature integration
- Retention policies and compliance features
- Templates for common documents

Many companies start with Google Drive or SharePoint with a well-organized folder structure and clear naming conventions, then graduate to specialized tools as their needs grow. What types of documents are most critical for you to manage?

## It sounds like there aren't good solutions here, outside of free-form systems

You're absolutely right - there's a real gap here. Most companies end up using free-form systems like Google Drive or SharePoint with manual organization (folder structures, naming conventions, spreadsheets tracking what exists) because there isn't a great purpose-built solution for this specific need.

The challenges are:
- **Generic document management** (SharePoint, Box) is built for any document, so you're doing all the structuring yourself
- **Contract management tools** are narrowly focused on contracts and often expensive
- **No unified system** for the full spectrum of corporate documents - bylaws, articles of incorporation, board resolutions, employment contracts, vendor agreements, policies, compliance documents, etc.

What companies often actually do:
- Maintain a "corporate records book" in a shared drive with strict folder hierarchy
- Use spreadsheets to track contract expiration dates, renewal terms, parties involved
- Rely on their law firm or corporate secretary to keep official records
- Cobble together multiple tools (contracts in one place, policies in another)

**What would actually be useful:**
A system specifically for corporate governance and legal documents that understands the context - automatically tracking signature dates, expiration dates, parties involved, amendment history, who needs to review/approve, compliance deadlines, etc. - without requiring you to build all that structure yourself.

This feels like an underserved market, especially for SMBs that don't have dedicated legal/compliance teams. Have you been running into specific pain points trying to organize these documents?

## Does SharePoint have an API that allows an external app to manage document lifecycles?

Yes, SharePoint has robust APIs that would let you build an external app to manage document lifecycles. You have two main options:

**Microsoft Graph API** (the modern approach):
- Access SharePoint sites, document libraries, files, and folders
- Upload/download/update documents
- Manage metadata and custom properties
- Set permissions and sharing
- Handle versioning
- Search across documents
- Create/manage lists (which could track document metadata)

**SharePoint REST API** (still supported):
- Similar capabilities to Graph API
- More SharePoint-specific operations
- Good for complex SharePoint-native features

**What you could build:**
A purpose-built app for corporate document management that uses SharePoint as the backend storage but provides:
- Custom UI tailored to corporate documents (contracts, bylaws, policies)
- Automated metadata extraction and tagging
- Expiration/renewal tracking and alerts
- Approval workflows
- Dashboard showing what needs attention
- Better search and filtering than native SharePoint

**Authentication:**
You'd use OAuth 2.0 with Azure AD (now called Microsoft Entra ID) to authenticate and get appropriate permissions.

**Advantages of this approach:**
- Leverage SharePoint's collaboration, versioning, and security features
- Familiar to users already in Microsoft ecosystem
- You don't have to build storage/infrastructure
- Documents still accessible through SharePoint if needed

This is actually how many specialized document management solutions work - they're essentially better interfaces on top of SharePoint or similar platforms. Are you thinking about building something like this?

## What kinds of document management solutions are in this space?

There are a few categories of solutions in this space:

**Built on top of SharePoint:**
- **M-Files** - document management that can integrate with SharePoint, uses metadata-driven approach
- **Laserfiche** - enterprise content management that can connect to SharePoint
- **DocuWare** - document management with SharePoint integration
- **Various industry-specific add-ons** that layer governance workflows on top of SharePoint

**Corporate Governance/Board Management Platforms:**
- **Diligent Boards** (formerly Diligent Boardbooks) - board meeting materials, resolutions, governance docs
- **BoardEffect** - board portal with document management
- **OnBoard** - board management software
- **Passageways** - board meeting and governance documents
These are often focused on board-level governance and can be expensive/overkill for general corporate document management.

**Legal/Compliance Document Management:**
- **NetDocuments** - cloud-based, popular with law firms, governance features
- **iManage** - enterprise document management, legal-focused
- **HighQ** - collaboration and document management for legal teams

**The gap you identified:**
Most of these are either:
- Too enterprise/expensive for SMBs
- Too narrowly focused (just board docs, just contracts)
- General purpose tools that require heavy customization
- Built for law firms rather than in-house corporate needs

There isn't really a good **"corporate records management system for SMB/mid-market"** that specifically handles the full lifecycle of bylaws, contracts, policies, resolutions, compliance documents with appropriate tracking, alerts, and governance workflows out of the box.

Are you considering building something in this space, or trying to find an existing solution?

## What would software like this look like? Are you sure there aren't existing SMB products in this category?

You're right to push back - let me search for what actually exists in this space right now, as there may be products I'm not aware of or that have emerged recently.You're right to challenge me - let me give you a more complete picture. There **are** some dedicated products in this space:

**Entity Management Software (focused on corporate governance):**
- **Athennian** - comprehensive but enterprise-focused
- **Diligent Entities** - designed for larger organizations
- **Filejet** - automates annual reports, registered agent services, compliance tracking
- **Fides** - specifically targets SMBs for legal entity and board management
- **Corporify** - legal entity and shareholder management
- **CSC Entity Management** - mainly for corporate legal departments

However, you're also right that there's still a gap - most of these are either:
- **Too expensive** for typical SMBs (enterprise pricing)
- **Too focused** on multi-entity management (designed for companies with many subsidiaries)
- **Too complex** for simple needs (built for corporate legal departments)

**What purpose-built SMB software would actually look like:**

A corporate document management system specifically for SMBs would have:

1. **Document types built-in** - templates and workflows specifically for bylaws, operating agreements, board resolutions, contracts, policies, certificates
2. **Automated tracking** - expiration dates, renewal reminders, signature requirements, amendment history
3. **Governance workflows** - board approval processes, signature routing, version control with audit trails
4. **Smart organization** - understands document relationships (this amendment relates to that bylaw)
5. **Compliance calendar** - tracks annual meetings, required filings, document updates
6. **Simple interface** - designed for small business owners/admins, not corporate secretaries

The gap seems to be a **"Gusto for corporate documents"** - something affordable ($50-200/month), simple to use, and purpose-built for the specific needs of SMB corporate record-keeping rather than general document management.

Does that match what you're envisioning?

## Yes

That's a solid market opportunity. The fact that you have to cobble together SharePoint + spreadsheets + manual reminders, or jump straight to enterprise-grade entity management software, shows there's a real gap.

The closest analogies would be:
- **Gusto** (made payroll/HR actually manageable for SMBs)
- **Carta** (made cap table management accessible)
- **PandaDoc** (made contract workflows simple)

But nothing has really done this for the broader category of corporate governance documents.

The ideal customer profile would probably be:
- LLCs and C-corps with 5-50 employees
- Companies with boards or multiple stakeholders
- Businesses in regulated industries needing audit trails
- Companies scaling from startup to growth stage
- Professional services firms managing client corporate records

Are you thinking about building something in this space, or evaluating whether to use an existing solution?

## Does SharePoint's graph API have a webhook capability for being notified when a document is modified?

Yes, SharePoint does support webhooks through the Microsoft Graph API for change notifications on documents and lists. Yes, Microsoft Graph API has robust webhook support for SharePoint, though with some important limitations:

**What's Supported:**

1. **SharePoint Lists and Document Libraries** - You can subscribe to change notifications at the list/library level using the SharePoint REST API webhooks
2. **OneDrive/Drive Items** - Through Microsoft Graph, you can get notifications for drives with the resource path `/drives/{id}/root`
3. **Change Types** - Can track: `created`, `updated`, `deleted`

**Key Implementation Details:**

- **Subscription endpoint**: Create via `POST https://graph.microsoft.com/v1.0/subscriptions`
- **Webhook requirements**: You need a publicly accessible HTTPS endpoint
- **Expiration**: Subscriptions expire after max 180 days (need to renew periodically)
- **Validation**: Microsoft validates your webhook endpoint before completing subscription
- **Retries**: SharePoint retries 5 times with 5-minute intervals if your endpoint is down

**Important Limitations:**

1. **No folder-specific webhooks** - You can't subscribe to changes in a specific folder within SharePoint, only at the drive/list level
2. **Basic notifications only** - For SharePoint, you typically get just the ID of the changed resource, then need to query for details
3. **OneDrive for Business vs SharePoint** - driveItem notifications work for OneDrive for Business root, but SharePoint document libraries are better handled via list webhooks

**Recommended Pattern:**

For your use case, you'd likely:
1. Subscribe to the document library containing corporate documents
2. Receive webhook notifications when any document changes
3. Filter in your app code to only process the specific document types you care about (bylaws, contracts, etc.)
4. Use delta queries to catch any missed changes

This webhook capability would be perfect for triggering automated workflows like expiration tracking, approval routing, or compliance checks when corporate documents are modified.

## How do smaller companies handle these issues typically?

Based on what actually happens in practice, most small companies handle corporate governance documents pretty poorly:

**The Common Reality:**

1. **Formation services + templates**
   - Use LegalZoom, Rocket Lawyer, CorpNet, etc. to incorporate
   - Get generic bylaw templates, fill in the blanks
   - Store in a filing cabinet or Google Drive folder
   - Never look at them again until forced to

2. **Outsource the bare minimum**
   - Pay a registered agent service ($100-300/year) to handle state filings
   - Corporate service provider reminds them about annual reports
   - Accountant handles tax filings
   - Lawyer involvement only when raising money, getting acquired, or in trouble

3. **Reactive, not proactive**
   - Only pull documents when:
     - Opening a bank account (needs bylaws/operating agreement)
     - Raising funding (investors do due diligence)
     - Getting audited
     - Facing a lawsuit
     - Selling the business
   - Then scramble to find everything and realize it's incomplete or outdated

4. **Common failures**
   - Don't hold required annual meetings
   - Don't document board resolutions
   - Don't update bylaws when circumstances change
   - Lose track of contract renewal dates
   - Can't find the signed version vs. the draft
   - Mix personal and business documents

5. **The "corporate records book" approach**
   - Physical 3-ring binder in a file cabinet
   - Or a Google Drive folder called "Corporate Docs" with poor organization
   - Naming like "bylaws_final_FINAL_v3.docx"
   - No systematic tracking of what should be there

**When companies get more sophisticated:**

- Hire a fractional CFO or COO who implements systems
- Get a corporate secretary (often fractional)
- Use their law firm's portal for key documents
- Move to a proper registered agent with document storage (like CSC)
- Only then might consider dedicated software

**The consequences:**

- "Piercing the corporate veil" risk if sued (personal liability)
- Messy due diligence that kills deals or reduces valuation
- Paying lawyers $300-500/hour to reconstruct corporate history
- Missing critical contract renewal dates
- Can't prove compliance during audits

The market opportunity you're identifying is real precisely because most SMBs know they *should* have better systems but:
- Can't afford enterprise solutions
- Don't have dedicated legal/compliance staff
- Find existing tools too complex or generic
- Only think about it when there's a crisis

A "set it and forget it" system that provides structure, reminders, and audit trails without requiring deep legal knowledge would solve a real pain point.

## Do you have any ideas on what pricing should look like?

Based on the market data and comparable products, here's what I'd recommend:

## Pricing Structure

**Per-Company Pricing** (not per-user)
- This is corporate-level infrastructure, not a collaboration tool
- Similar to registered agent services ($99-300/year) but more valuable
- Avoids the "who gets a seat?" problem

## Suggested Tiers

**Starter: $49/month** ($490/year if annual)
- Single entity (1 LLC or Corp)
- Up to 50 documents
- Basic templates (bylaws, operating agreement, resolutions)
- Expiration tracking & reminders
- Email support
- Target: Solo founders, small LLCs

**Professional: $99/month** ($990/year if annual)
- Up to 3 entities
- Unlimited documents
- All templates + customization
- Board meeting workflows
- Contract tracking
- Integration with SharePoint/Drive
- Priority support
- Target: Growing companies, 5-50 employees

**Business: $199/month** ($1,990/year if annual)
- Unlimited entities
- Advanced workflows
- Custom integrations
- API access
- Dedicated account manager
- Compliance calendar
- Target: Multi-entity structures, 50+ employees

## Why These Price Points?

**Lower bound context:**
- Registered agent alone: $99-300/year (just mail forwarding)
- They're already paying this + probably $500-2000/year in ad-hoc lawyer fees for record reconstruction

**Upper bound context:**
- Contract management: $700-2000/month (too expensive, wrong scope)
- Enterprise entity management: $10k+/year (too complex)

**Value anchors:**
- One lawyer billable hour saved = ~$300-500 → product pays for itself in <1 hour saved
- Avoiding deal delay/valuation hit = priceless
- Peace of mind during audit = worth $1k-2k/year easily

## Additional Revenue Opportunities

**Add-ons:**
- Registered agent service bundled: +$99/year
- Annual report filing service: +$149/year per state
- Document review by lawyer: $299 one-time
- Compliance audit: $499 one-time

**Free tier?**
- Probably not initially—creates wrong expectations
- Maybe "14-day trial with real setup" instead
- This is a "must have" not a "nice to have" so charging is appropriate

## Why This Works

1. **Easy yes at closing:** $99/month is less than one billable hour/month
2. **Sticky annual billing:** Switching corporate infrastructure is painful
3. **Natural upsell path:** As companies grow (more entities, more complexity)
4. **Defensible moat:** Once your corporate records are in there, migration cost is high
5. **Comparable to similar "compliance infrastructure":** (Gusto for payroll, Carta for cap table)

The key insight: SMBs will pay $1,000-2,000/year for something that (a) they legally need, (b) saves them from $5k-20k lawyer bills, and (c) reduces existential risk. That's the pricing sweet spot.

Would you price it differently?
