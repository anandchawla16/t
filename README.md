# India Gelatine & Chemicals Ltd. — Website Redesign V2

Static HTML/CSS/JavaScript redesign with a reworked Investor Relations portal.

## What is included
- Responsive corporate homepage
- Company, Products, Manufacturing, Quality, Sustainability and Contact pages
- Investor Relations portal with:
  - 5-year interactive financial chart
  - metric switcher
  - FY filter
  - document-type filter
  - investor-document search
  - latest disclosure area
  - Regulation 46 section
  - mobile-first layout
- Original SVG visual assets (no stock photography dependency)
- Google Sheets + Google Drive ready CMS bridge via Google Apps Script
- No database

## Local preview
Run any static web server from the repository root, for example:
```
python -m http.server 8000
```
Then open http://localhost:8000

## Google Sheet CMS
Create a spreadsheet with two tabs:

### Investor Documents
Headers:
`date | fy | quarter | category | title | url | featured | regulation`

### Financials
Headers:
`fy | income | ebitda | pbt | pat | shareholderFunds | dividendPercent`

Copy `apps-script/Code.gs` into Apps Script attached to the Sheet and deploy as a Web App. Then place the deployed URL in `assets/app.js` under `window.IGCL_CONFIG.investorEndpoint`.

PDFs can stay in Google Drive. Put the shareable Drive URL in the `url` column.

## Current financial data
The five-year financial data in the demo is based on India Gelatine & Chemicals Limited's FY2025-26 Annual Report financial highlights.

## Production notes
Before go-live:
1. Replace demo document URLs with the final Google Drive/public document URLs.
2. Confirm all investor records against the company-secretarial master archive.
3. Add the official logo files.
4. Add analytics, cookie controls and final SEO metadata.
5. Connect the Apps Script endpoint.
