import React from 'react';

// set nodes' initial position in order for onInit / createGraphLayout to work
function generateDefaultProperties(phaseNumber) {
  return {
    type: 'default',
    position: { x: 0, y: 0 },
    className: `step phase-${phaseNumber}`,
  };
}

const phase0Nodes = [
  {
    id: 'phase-0-step-0',
    data: {
      label: (
        <>
          <strong>Create Budget</strong>
          <br />
          (Fundamental to a sound financial footing is knowing where your money
          is going, budgeting helps you see your sources of income less your
          expenses.)
        </>
      ),
    },
    ...generateDefaultProperties(0),
    type: 'input',
  },
  {
    id: 'phase-0-step-1',
    data: {
      label: (
        <>
          <strong>Pay Rent/Mortgage</strong>
          <br />
          (Including renters or homeowners insurance, if required)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
  {
    id: 'phase-0-step-2',
    data: {
      label: (
        <>
          <strong>Buy Food/Groceries</strong>
          <br />
          (Depending on the severity of your situation and needs, you may wish
          to prioritize utilities before this node.)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
  {
    id: 'phase-0-step-3',
    data: {
      label: (
        <>
          <strong>Pay Essential Items</strong>
          <br />
          (Power, water, heat, toiletries, etc.)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
  {
    id: 'phase-0-step-4',
    data: {
      label: (
        <>
          <strong>Pay Income Earning Expenses</strong>
          <br />
          (Necessary transportation expenses, possibly internet/phone, anything
          required to continue earning income)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
  {
    id: 'phase-0-step-5',
    data: {
      label: (
        <>
          <strong>Pay Health Care</strong>
          <br />
          (Health insurance and health care expenses)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
  {
    id: 'phase-0-step-6',
    data: {
      label: (
        <>
          <strong>Make Minimum Payments On All Debts & Loan</strong>
          <br />
          (Student loans, credit cards, etc.)
        </>
      ),
    },
    ...generateDefaultProperties(0),
  },
];

export default phase0Nodes;
