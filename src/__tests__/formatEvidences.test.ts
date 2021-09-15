import formatEvidences from "../formatEvidences";

describe("formatEvidences", () => {
  it("pass plain text through", () => {
    const input = `# title
this
is an evidence
`;

    const expected = input;

    expect(formatEvidences(input)).toEqual(expected);
  });

  it("format markdown image tags to html img tags for more compact images", () => {
    const input = `This line should be ignored
![Screen Shot 2021-09-15](/uploads/e4638ca90bb016efc0ac20f88f6769ab/Screen Shot 2021-09-15.png)
`;

    const expected = `This line should be ignored
<img src="/uploads/e4638ca90bb016efc0ac20f88f6769ab/Screen Shot 2021-09-15.png" alt="Screen Shot 2021-09-15" width="250"/>
`;

    expect(formatEvidences(input)).toEqual(expected);
  });

  it("group multiple images with specific filenames", () => {
    const input = `These
lines
are ignored

![addCtaToWithdrawalNotAvailableScreen-0](/uploads/ff3e9cc4e50ca8c4a85593c32c223d43/addCtaToWithdrawalNotAvailableScreen-0.png)
![addCustomFormattersForHkAndThAddresses-1](/uploads/5e90ad2b7385df1d4c8705036aa697c9/addCustomFormattersForHkAndThAddresses-1.png)
![addCustomFormattersForHkAndThAddresses-0](/uploads/82acc88d3591e557f1a02253aa5c957a/addCustomFormattersForHkAndThAddresses-0.png)
![addCellTextSeparatorComponent-0](/uploads/f0e687d5c1db5be266339a6f75bb9170/addCellTextSeparatorComponent-0.png)
![addCustomFormattersForHkAndThAddresses-2](/uploads/4403d2a2f15444d574b39434cef9371d/addCustomFormattersForHkAndThAddresses-2.png)
![addCellTextSeparatorComponent-1](/uploads/2d79720e0e7d076663b2096800e4d2a8/addCellTextSeparatorComponent-1.png)
`;

    const expected = `These
lines
are ignored



## Add cell text separator component

<img src="/uploads/f0e687d5c1db5be266339a6f75bb9170/addCellTextSeparatorComponent-0.png" alt="addCellTextSeparatorComponent-0" width="250"/>
<img src="/uploads/2d79720e0e7d076663b2096800e4d2a8/addCellTextSeparatorComponent-1.png" alt="addCellTextSeparatorComponent-1" width="250"/>

## Add cta to withdrawal not available screen

<img src="/uploads/ff3e9cc4e50ca8c4a85593c32c223d43/addCtaToWithdrawalNotAvailableScreen-0.png" alt="addCtaToWithdrawalNotAvailableScreen-0" width="250"/>

## Add custom formatters for hk and th addresses

<img src="/uploads/82acc88d3591e557f1a02253aa5c957a/addCustomFormattersForHkAndThAddresses-0.png" alt="addCustomFormattersForHkAndThAddresses-0" width="250"/>
<img src="/uploads/5e90ad2b7385df1d4c8705036aa697c9/addCustomFormattersForHkAndThAddresses-1.png" alt="addCustomFormattersForHkAndThAddresses-1" width="250"/>
<img src="/uploads/4403d2a2f15444d574b39434cef9371d/addCustomFormattersForHkAndThAddresses-2.png" alt="addCustomFormattersForHkAndThAddresses-2" width="250"/>`;

    expect(formatEvidences(input)).toEqual(expected);
  });
});
