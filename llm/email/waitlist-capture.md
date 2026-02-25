# Waitlist name capture

Why whole name?

The modal currently uses a single whole name field. Here's the trade-off analysis for this context:

**Single whole name (current)**

Pros:
- Less friction — one field instead of two, which is especially important for an optional field on a waitlist signup
- Works better for people with names that don't fit first/last conventions (single names, multi-part surnames, non-Western naming orders)
- Simpler code, simpler data model

Cons:
- Can't reliably personalize emails using just a first name (you'd have to split the string, which is error-prone)
- Some CRMs/email tools expect separate fields and will need mapping logic

**First + last name**

Pros:
- Enables clean personalization like "Hi Sarah," in follow-up emails without string parsing
- Easier to sort/search contacts in a CRM by last name

Cons:
- More friction — two fields increases form abandonment, especially on an optional signup like this
- Still culturally fragile (patronymics, mononyms, etc.)
- The "last name" field is often left blank anyway, giving you the same data quality problem you were trying to avoid

**Recommendation for this use case:** The single field is the right call here. This is a top-of-funnel validation waitlist — minimizing friction matters more than data cleanliness. If you want first-name personalization in outreach emails, you can split on the first space as a best-effort heuristic, which is good enough for a waitlist context.
