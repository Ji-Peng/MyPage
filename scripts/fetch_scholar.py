#!/usr/bin/env python3
"""
Fetch Google Scholar metrics (citations, h-index, i10-index, yearly citations)
for Dr. Jipeng Zhang (user: dL1IM-M9ltIC) and export to src/data/scholar.json.
"""

import argparse
import datetime
import json
import os
import re
import sys
import urllib.request
import urllib.error

USER_ID = "dL1IM-M9ltIC"
SCHOLAR_BASE_URL = "https://scholar.google.com/citations"

def fetch_scholar_data(user_id: str = USER_ID) -> dict:
    url = f"{SCHOLAR_BASE_URL}?user={user_id}&hl=en"
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/124.0.0.0 Safari/537.36"
        ),
        "Accept-Language": "en-US,en;q=0.9",
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode("utf-8", errors="replace")
    except urllib.error.URLError as e:
        print(f"Error fetching Google Scholar profile: {e}", file=sys.stderr)
        raise

    # Parse citation indices from table#gsc_rsb_st
    # Typical cells:
    # Citations: all, since_year
    # h-index: all, since_year
    # i10-index: all, since_year
    metrics = re.findall(r'<td class="gsc_rsb_std">(\d+)</td>', html)
    
    all_citations = int(metrics[0]) if len(metrics) > 0 else 0
    recent_citations = int(metrics[1]) if len(metrics) > 1 else 0
    all_h_index = int(metrics[2]) if len(metrics) > 2 else 0
    recent_h_index = int(metrics[3]) if len(metrics) > 3 else 0
    all_i10_index = int(metrics[4]) if len(metrics) > 4 else 0
    recent_i10_index = int(metrics[5]) if len(metrics) > 5 else 0

    # Parse citation history by year
    years = re.findall(r'<span class="gsc_g_t"[^>]*>(\d+)</span>', html)
    counts = re.findall(r'<span class="gsc_g_al">(\d+)</span>', html)
    
    citations_per_year = []
    if len(years) == len(counts):
        for y, c in zip(years, counts):
            citations_per_year.append({
                "year": int(y),
                "citations": int(c)
            })

    # Parse top publications and citation counts
    papers = []
    rows = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', html, re.DOTALL)
    for row in rows:
        title_match = re.search(r'class="gsc_a_at"[^>]*>(.*?)</a>', row)
        cites_match = re.search(r'class="gsc_a_ac[^\"]*"[^>]*>(\d+)</a>', row)
        year_match = re.search(r'class="gsc_a_h[^\"]*"[^>]*>(\d+)</span>', row)
        
        if title_match:
            title = title_match.group(1).strip()
            cites = int(cites_match.group(1)) if cites_match else 0
            year = int(year_match.group(1)) if year_match else None
            papers.append({
                "title": title,
                "citations": cites,
                "year": year
            })

    data = {
        "userId": user_id,
        "profileUrl": url,
        "updatedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "totalCitations": all_citations,
        "hIndex": all_h_index,
        "i10Index": all_i10_index,
        "stats": {
            "citations": {
                "all": all_citations,
                "recent": recent_citations
            },
            "hIndex": {
                "all": all_h_index,
                "recent": recent_h_index
            },
            "i10Index": {
                "all": all_i10_index,
                "recent": recent_i10_index
            }
        },
        "citationsPerYear": citations_per_year,
        "publications": papers
    }
    return data

def main():
    parser = argparse.ArgumentParser(description="Fetch Google Scholar metrics")
    parser.add_argument("--user", default=USER_ID, help="Google Scholar user ID")
    parser.add_argument(
        "--output",
        default=os.path.join(os.path.dirname(__file__), "..", "src", "data", "scholar.json"),
        help="Path to output JSON file"
    )
    args = parser.parse_args()

    print(f"Fetching Google Scholar data for user: {args.user}...")
    try:
        data = fetch_scholar_data(args.user)
    except Exception as e:
        print(f"Failed to fetch live data ({e}).", file=sys.stderr)
        sys.exit(1)

    output_path = os.path.abspath(args.output)
    if data['stats']['citations']['all'] == 0 and os.path.exists(output_path):
        print(f"Warning: Parsed 0 citations (likely temporary Google CAPTCHA). Keeping existing data at: {output_path}", file=sys.stderr)
        sys.exit(0)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully saved scholar data to: {output_path}")
    print(f"Citations: {data['stats']['citations']['all']}, h-index: {data['stats']['hIndex']['all']}, i10-index: {data['stats']['i10Index']['all']}")

if __name__ == "__main__":
    main()
