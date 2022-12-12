---
widget: blank
headless: true

# ... Put Your Section Options Here (title etc.) ...
# title: 'Publication'
# subtitle: 
weight: 15  # section position on page
design:
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns: '1'
  spacing:
    # Customize the section spacing. Order is top, right, bottom, left.
    padding: ["10px", "20px", "10px", "20px"]
---

<h2 align="center"> Publication </h2>
<!-- ## Publication -->

### 2022

- Junhao Huang, Jipeng Zhang, et al. Improved Plantard arithmetic for lattice-based cryptography. [IACR Trans. on Cryptographic Hardware and Embedded Systems](https://tches.iacr.org/). Volume 2022, Issue 4.

    [PDF](/uploads/tches2022/paper.pdf). [Code](https://github.com/UIC-ESLAS/ImprovedPlantardArithmetic). [Link](https://artifacts.iacr.org/tches/2022/a16/index.html).

### 2021

- Jipeng Zhang, et al. Time-memory Trade-offs for Saber+ on Memory-constrained RISC-V. [IEEE Trans. on Computers](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12).

    [PDF](https://eprint.iacr.org/2021/1552.pdf). [Code](https://github.com/Ji-Peng/Saber_RV32).

- Lirui Zhao, Jipeng Zhang, et al. Efficient Implementation of Kyber on Mobile Devices. ICPADS2021.

    [PDF](/uploads/icpads2021/paper.pdf). [Slide](/uploads/icpads2021/slide.pdf).

### 2020

- Jipeng Zhang, et al. An Efficient and Scalable Sparse Polynomial Multiplication Accelerator for LAC on FPGA. ICPADS2020.

    [PDF](/uploads/icpads2020/paper.pdf). [Slide](/uploads/icpads2020/slide.pdf). [Code](https://github.com/Ji-Peng/LAC_SPM_Code). [Video](https://www.youtube.com/watch?v=1W24-h_kvEo).

<!-- ## Software -->

<h2 align="center"> Software </h2>

- A patch of [ST-Link](https://github.com/stlink-org/stlink) for supporting STM32G0B0/G0B1/G0C1/G050/G051/G061.

    [Pull Request #1140](https://github.com/stlink-org/stlink/pull/1140) (merged).

<h2 align="center"> Project </h2>
<!-- ## Project -->

### Curve25519 Optimization University & Enterprise Project

- Company: Shield Lab & CBG, Huawei
- Date: 2020-08-01 to 2020-12-30
- Description: Reduce the ROM occupancy of Curve25519 (X25519+Ed25519) from **70KB+** (OpenSSL) to less than **15KB** for IoT devices (Cortex-M3 and RISC-V).

### SM2 Optimization Internship Project

- Company: CDG, Tencent
- Date: 2021-07-01 to 2021-09-30
- Role: Intern (2021 Rhino-Bird Research Elite Training Program)
- Description: Optimize the performance of SM2 (Chinese ECC Commercial Standard) on ARMv8-A Linux Server. Compared to the implementation of OpenSSL, the performance of sign/verify is improved by **8.7X/3.5X** on HUAWEI Cloud Kunpeng 920 platform.
 