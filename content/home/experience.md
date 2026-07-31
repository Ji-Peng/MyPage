---
widget: experience
# This file represents a page section.
headless: true 
active: false
weight: 20
# ... Put Your Section Options Here (title etc.) ...
title: Experience
# Date format
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006
design:
  # 1/2 columns
  columns: "1"
# Experiences.
#   Add/remove as many `experience` blocks below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin/end multi-line descriptions with `>-`.

# experience:
experience:
  - title: 'Industrial Project'
    company: 'Shield Lab & CBG, Huawei'
    company_logo: huawei-icon
    company_url: 'https://www.huawei.com/en/'
    date_start: '2020-08-01'
    date_end: '2020-12-30'
    description: Reduce the ROM occupancy of Curve25519 (X25519+Ed25519) from **70KB+** (OpenSSL) to less than **10KB** for IoT devices (Cortex-M3 and RISC-V).
  - title: 'Intern (2021 Rhino-Bird Research Elite Training Program)'
    company: 'CDG, Tencent'
    company_logo: tencent-icon
    company_url: 'https://www.tencent.com/en-us/'
    location: 'Shenzhen, China'
    date_start: '2021-07-01'
    date_end: '2021-09-30'
    description: Optimize the performance of SM2 (Chinese ECC Commercial Standard) on ARMv8-A Linux Server. Compared to the implementation of OpenSSL, the performance of sign/verify is improved by **8.7X/3.5X** on HUAWEI Cloud Kunpeng 920 platform.
---