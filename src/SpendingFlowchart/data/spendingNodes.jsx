import React from 'react';

const MARGIN = 25;
const GAP = 100;
const WIDTH_OF_NODE = 250;
const HEIGHT_OF_NODE = 110;

function getGridPosition(cellX, cellY) {
  return {
    x: cellX * (WIDTH_OF_NODE + GAP) + MARGIN,
    y: cellY * (HEIGHT_OF_NODE + GAP) + MARGIN,
  };
}

export default [
  {
    id: 'phase-0-step-0',
    type: 'input',
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
    position: getGridPosition(1, 0),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
  },
  {
    id: 'phase-0-step-1',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Pay Rent/Mortgage</strong>
          <br />
          (Including renters or homeowners insurance, if required)
        </>
      ),
    },
    position: getGridPosition(0, 1),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'top',
    sourcePosition: 'right',
  },
  {
    id: 'phase-0-step-2',
    type: 'default',
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
    position: getGridPosition(1, 1),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'left',
    sourcePosition: 'right',
  },
  {
    id: 'phase-0-step-3',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Pay Essential Items</strong>
          <br />
          (Power, water, heat, toiletries, etc.)
        </>
      ),
    },
    position: getGridPosition(2, 1),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'left',
    sourcePosition: 'bottom',
  },
  {
    id: 'phase-0-step-4',
    type: 'default',
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
    position: getGridPosition(2, 2),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'top',
    sourcePosition: 'left',
  },
  {
    id: 'phase-0-step-5',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Pay Health Care</strong>
          <br />
          (Health insurance and health care expenses)
        </>
      ),
    },
    position: getGridPosition(1, 2),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'right',
    sourcePosition: 'left',
  },
  {
    id: 'phase-0-step-6',
    type: 'default',
    data: {
      label: (
        <>
          <strong>Make Minimum Payments On All Debts & Loan</strong>
          <br />
          (Student loans, credit cards, etc.)
        </>
      ),
    },
    position: getGridPosition(0, 2),
    parentNode: 'phase-0',
    extends: 'parent',
    className: 'step phase-0',
    targetPosition: 'right',
    sourcePosition: 'bottom',
  },
];
