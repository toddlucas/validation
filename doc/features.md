# Features

## Can you briefly summarize what you think our product should do?

**Corporate Document Management for SMBs - Product Summary**

**What it does:**
A purpose-built system that helps small businesses (5-50 employees) organize and manage their corporate governance documents—bylaws, operating agreements, board resolutions, contracts, policies, and compliance filings.

**Core features:**
- **Smart document layer** - Connects to your existing file storage (SharePoint, Google Drive, Dropbox, Box) and adds corporate governance intelligence on top
- **File versioning & audit trails** - Complete history of document changes, who accessed what and when, approval chains, and version tracking
- **Automated tracking** - Expiration dates, renewal reminders, signature requirements, amendment history
- **Governance workflows** - Board approval processes, signature routing, compliance tracking
- **Compliance calendar** - Annual meeting reminders, filing deadlines, required updates
- **Document relationships** - Understands how documents connect (amendments to bylaws, resolutions to contracts)

**Storage architecture:**
Files remain in your existing systems (SharePoint, Google Drive, Dropbox, Box, etc.). Prise doesn't replace your file storage—it adds a governance and compliance layer on top, providing structure, tracking, and workflows while your documents stay where they are.

**The value proposition:**
Prevents the expensive chaos that happens when SMBs manage corporate documents ad-hoc (Google Drive folders, filing cabinets, spreadsheets). Saves them from:
- $5,000-20,000 in lawyer fees to reconstruct records during fundraising/M&A
- Personal liability risk from failing to maintain corporate formalities
- Compliance violations from missed deadlines
- Deal delays or reduced valuations from messy due diligence

**Key differentiator:**
It's the Goldilocks solution—more sophisticated than SharePoint (understands corporate governance), simpler and cheaper than enterprise entity management software (built for single-entity SMBs, not multi-national corporations).

**Pricing sweet spot:** $99-199/month - less than the cost of one lawyer hour, positioned as essential compliance infrastructure like Gusto (payroll) or Carta (cap table).

## Are there any other features or areas that you think should be added, now or in the future?

Great question. Here are features I'd consider, organized by priority:

## Should Include at Launch (or very soon after)

**Entity management**
- Maintain a centralized directory of company entities, subsidiaries, and legal structures
- Record and manage key individuals: directors, officers, shareholders, signatories, with their roles and responsibilities
- Enable inviting stakeholders to create or link user accounts; store essential contact details for compliance and workflows

**File storage integrations** ⭐ **CORE ARCHITECTURE**
- Connect to SharePoint, Google Drive, Dropbox, Box, OneDrive
- Read/write access to manage documents in place
- Sync metadata and track changes
- Files stay in customer's existing systems (security, compliance, backup)
- Prise adds governance layer without becoming another data silo

**File versioning & audit trails** ⭐ **CORE FEATURE**
- Complete version history for every document
- Track who viewed, edited, approved, or downloaded documents
- Timestamp all actions with user attribution
- Immutable audit log for compliance and due diligence
- Compare versions side-by-side
- Restore previous versions when needed

**Stakeholder directory**
- Track shareholders, board members, officers with contact info
- Auto-populate signature blocks and approval workflows
- Shows who needs to sign what

**Audit trail exports**
- Generate compliance reports for auditors/investors
- Show complete history of document changes, approvals, access (built on core versioning/audit trail system)
- PDF export of "corporate records book"
- Critical for due diligence
- Includes full chain of custody and approval workflows

## Phase 2 (3-6 months)

**E-signature integration**
- Essential for board resolutions, amendments, contracts
- Either build native or integrate with DocuSign/PandaDoc
- Without this, you're forcing users to print/scan or use separate tools

**Document templates library**
- Pre-built templates for common docs (bylaws, operating agreements, board resolutions, stock purchase agreements)
- State-specific variations where needed
- Guided questionnaires to fill them out correctly
- This is table stakes—competitors have this

## Phase 3 (6-12 months)

**Light cap table management**
- Track basic equity ownership (doesn't need to compete with Carta)
- Connect to stock certificates and purchase agreements
- Show current ownership percentages
- Many SMBs use spreadsheets for this—low bar to improve

**Board portal lite**
- Schedule meetings, distribute materials, record votes
- Meeting minutes templates and approval workflows
- Attendance tracking
- Natural extension since you already have the board docs

**Compliance playbooks**
- State-specific checklists (Delaware C-corp vs. California LLC)
- Industry-specific requirements (healthcare, financial services)
- Annual compliance calendar auto-generated based on entity type
- Guides users through "what do I need to do when?"

**AI document review**
- Flag missing required clauses in contracts
- Suggest when bylaws need updates (e.g., "Your bylaws say 3 directors but you only have 2 listed")
- Extract key dates/obligations automatically
- Summarize long contracts

## Future Expansion Opportunities

**Professional services marketplace**
- Connect to vetted lawyers for document review ($299)
- Annual compliance audit service ($499)
- Formation services for new entities
- Take a referral fee, create revenue stream

**Fundraising prep**
- One-click data room creation for investor due diligence
- Check for common red flags investors look for
- Gap analysis: "You're missing these 7 documents investors will ask for"

**Multi-company management**
- For professional services firms managing clients
- For companies with subsidiaries
- Charge per-entity or white-label to law/accounting firms

**Integration ecosystem**
- **File storage** (core integrations): SharePoint, Google Drive, Dropbox, Box, OneDrive
- QuickBooks/Xero (link to financial records)
- Gusto/Rippling (pull employee data for HR docs)
- Stripe/payment processors (track merchant agreements)
- CRMs (link to customer contracts)

**Insurance & IP tracking**
- Certificate of insurance management
- Trademark/patent portfolio tracking
- Vendor insurance verification
- Natural adjacencies to corporate docs

**HR document extension**
- Employee agreements, offer letters, handbooks
- Separate product or add-on module
- Same document management principles, different domain

## What NOT to build

**Don't compete with:**
- Full accounting software (QuickBooks)
- Full contract management (Ironclad for commercial deals)
- Full cap table management (Carta for complex structures)
- Project management (this isn't that)

**The strategic principle:**
Stay focused on corporate governance documents for SMBs. Integrate with best-in-class tools for adjacent needs rather than building everything. The moat is in understanding corporate structure and compliance requirements, not in building generic features.

**MVP recommendation:** Launch with e-signatures, templates, stakeholder directory, and compliance calendar. Everything else can wait until you validate product-market fit.
